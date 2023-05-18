import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScheduleService} from "../schedule.service";

interface Shift {
  id: string
  start: string;
  end: string;
}
interface Schedule {
  timeFrame: Date[];
  firstShiftTime: Shift;
  secondShiftTime: Shift;
  thirdShiftTime: Shift;
  schedules: {[key:string]: {}[]};
}

@Component({
  selector: 'make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: ['./make-schedule.component.scss']
})
export class MakeScheduleComponent implements OnInit{
  schedule: Schedule = {
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules:  {}
  };
  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  @Output() sendSchedule = new EventEmitter;
  // firstShiftTime: Shift = {id: 'first shift', start: '', end: ''};
  // secondShiftTime: Shift = {id: 'second shift', start: '', end: ''};
  // thirdShiftTime: Shift = {id: 'third shift', start: '', end: ''};
  // timeFrame: Date[] = [];
  // schedules: {[key:string]: {}[]} = {};
  shifts: string[] = ['off'];
  employees: string[] = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'Robert Wilson',
    'Sarah Thompson',
    'Daniel Anderson',
    'Jennifer Thomas',
    'David Martinez',
    'Jessica Lee',
    'Andrew Taylor',
    'Nicole Clark',
    'Matthew Rodriguez',
    'Olivia Hall',
    'William Walker',
    'Sophia Young',
    'James Lewis',
    'Ava Turner',
    'Christopher Baker',
    'Mia Mitchell'
  ];
constructor(private data: ScheduleService) {
}
  ngOnInit() {
    this.buildingShiftsOptions();
    this.updateSchedule();
  }
  updateSchedule(){
    this.data.updateSchedule(this.schedule);
  }
  buildingShiftsOptions(){
    this.shifts = ['off'];

    if (this.schedule.firstShiftTime.start !== 'shift is off'){
      this.shifts.push('1st shift');
    }
    if (this.schedule.secondShiftTime.start !== 'shift is off'){
      this.shifts.push('2nd shift');
    }
    if (this.schedule.thirdShiftTime.start !== 'shift is off'){
      this.shifts.push('3rd shift');
    }
  }

  getSchedules($event:any){
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
  getTimeFrame($event: any) {
    this.schedule.timeFrame = $event.week.weekDays;
  }
}

