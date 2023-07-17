import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../schedule.service";
import {Schedule} from "../interfaces";
import {empWorkTime} from "../interfaces";
import {Renderer2} from "@angular/core";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {
  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: string [] = [];
  names: string [] = [];
  sun: string [] = [];
  mon: string [] = [];
  tue: string [] = [];
  wed: string [] = [];
  thu: string [] = [];
  fri: string [] = [];
  sat: string [] = [];

  // test
  activeEmp: empWorkTime = {
    empName: 'Leandro Yabut',
    empPhotoUrl: 'assets/leandro_pic.jpg',
    empClkIn: new Date(),
    empClkOut: new Date(),
    empLunchOut: new Date(),
    empLunchIn: new Date(),
    empDayHours: [0,0,0,0,0,0,0],
    empWeekHours: 0,
  };

  schedule: Schedule = {
    timeFrameStr: '',
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };

  constructor(private data: ScheduleService, private datePipe: DatePipe, private router: Router, private renderer: Renderer2
  ) {
    if (localStorage.getItem('active')) {
      this.schedule = JSON.parse(localStorage.getItem('active')!);
    }
    this.makeView();
    this.getDates();
  }

  ngOnInit() {
    this.data.currSchedule.subscribe(schedule => this.schedule = schedule)
  }

  toScheduleDash() {
    this.router.navigateByUrl('schedule-dashboard');
  }

  print() {
    this.renderer.addClass(document.body, 'print-mode'); // Optional: Add a CSS class to customize the print layout

    window.print();

    this.renderer.removeClass(document.body, 'print-mode'); // Optional: Remove the CSS class after printing
  }

  makeView() {
    if (this.schedule.timeFrameStr) {
      for (const key in this.schedule.schedules) {
        if (this.schedule.schedules[key].empVacation) {
          let vacStr = 'vacation';
          this.names.push(this.schedule.schedules[key].empName);
          this.sun.push(vacStr);
          this.mon.push(vacStr);
          this.tue.push(vacStr);
          this.wed.push(vacStr);
          this.thu.push(vacStr);
          this.fri.push(vacStr);
          this.sat.push(vacStr);
        } else {
          this.names.push(this.schedule.schedules[key].empName);
          this.sun.push(this.makeViewHelper(this.schedule.schedules[key].empSun));
          this.mon.push(this.makeViewHelper(this.schedule.schedules[key].empMon));
          this.tue.push(this.makeViewHelper(this.schedule.schedules[key].empTue));
          this.wed.push(this.makeViewHelper(this.schedule.schedules[key].empWed));
          this.thu.push(this.makeViewHelper(this.schedule.schedules[key].empThu));
          this.fri.push(this.makeViewHelper(this.schedule.schedules[key].empFri));
          this.sat.push(this.makeViewHelper(this.schedule.schedules[key].empSat));
        }

      }
    }
  }

  getDates() {
    if (this.schedule.timeFrameStr) {
      for (let date of this.schedule.timeFrame) {
        let newDate = new Date(date)
        this.dates.push(this.formatDate(newDate));
      }
    }
  }

  formatDate(date: Date): string {
    let str = date.toDateString()!;
    return this.datePipe.transform(str, 'MMM d')!;
  }

  makeViewHelper(shift: string) {
    switch (shift) {
      case '1st shift':
        return this.schedule.firstShiftTime.start + '  ' + this.schedule.firstShiftTime.end
      case '2nd shift':
        return this.schedule.secondShiftTime.start + '  ' + this.schedule.secondShiftTime.end
      case '3rd shift':
        return this.schedule.thirdShiftTime.start + '  ' + this.schedule.thirdShiftTime.end
      default:
        return 'off'
    }
  }
}


