import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScheduleService} from "../schedule.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Schedule} from "../interfaces";

@Component({
  selector: 'make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: ['./make-schedule.component.scss']
})
export class MakeScheduleComponent implements OnInit {
  schedule: Schedule = {
    timeFrameStr: '',
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };
  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  @Output() sendSchedule = new EventEmitter;
  shifts: string[] = ['off'];
  employees: string[] = [
    'Alfredo Borroto',
    'Amber Xiong',
    'Caleb Mc Coy',
    'Ronald Robbins',
    'Leandro Yabut',
    "John Smith",
    "Emily Johnson",
    "Michael Davis"
  ];
  employeeName =  '';

  constructor(private data: ScheduleService, private router: Router, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.buildingShiftsOptions();
  }

  saveSchedule() {
    this.router.navigateByUrl('schedule-dashboard');
    this.data.saveSchedule(this.schedule);
  }

  postSchedule() {
    this.data.updateSchedule(this.schedule)
    this.saveSchedule()
  }

  toScheduleDash() {
    this.router.navigateByUrl('schedule-dashboard');
  }

  buildingShiftsOptions() {
    this.shifts = ['off'];

    if (this.schedule.firstShiftTime.start !== 'shift is off') {
      this.shifts.push('1st shift');
    }
    if (this.schedule.secondShiftTime.start !== 'shift is off') {
      this.shifts.push('2nd shift');
    }
    if (this.schedule.thirdShiftTime.start !== 'shift is off') {
      this.shifts.push('3rd shift');
    }
  }

  getSchedules($event: any) {
    this.schedule.schedules[$event.empName] = $event;
  }

  getShiftTime($event: any) {
    switch ($event[0]) {
      case 'first-start':
        this.schedule.firstShiftTime.start = $event[1];
        break;
      case 'first-end':
        this.schedule.firstShiftTime.end = $event[1];
        break;
      case 'second-start':
        this.schedule.secondShiftTime.start = $event[1];
        break;
      case 'second-end':
        this.schedule.secondShiftTime.end = $event[1];
        break;
      case 'third-start':
        this.schedule.thirdShiftTime.start = $event[1];
        break;
      case 'third-end':
        this.schedule.thirdShiftTime.end = $event[1];
        break;
    }
  }

  formatDate(date: Date): string {
    return this.datePipe.transform(date.toDateString(), 'MMM d, y')!;
  }

  getTimeFrame($event: any) {
    this.schedule.timeFrame = $event.week.weekDays;
    let sunday = this.schedule.timeFrame[0];
    let saturday = this.schedule.timeFrame[6];
    this.schedule.timeFrameStr = this.formatDate(sunday) + ' ~ ' + this.formatDate(saturday);
  }
}

