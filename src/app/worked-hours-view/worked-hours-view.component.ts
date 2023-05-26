import {Component, OnInit, Renderer2} from '@angular/core';
import {empWorkTime} from "../interfaces";
import {DatePipe} from "@angular/common";
import {getWeeksOfYear} from "../reusableFunctions";
import {makeEmpWorkTimeArr} from "../reusableFunctions";

@Component({
  selector: 'worked-hours-view',
  templateUrl: './worked-hours-view.component.html',
  styleUrls: ['./worked-hours-view.component.scss']
})
export class WorkedHoursViewComponent implements OnInit{
  // Test data that comes from database
  weekNumber: number = 21;
  year: number = 2023;
  allEmpWorkTimes: empWorkTime[] = makeEmpWorkTimeArr();

  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Total'];
  dates: string [] = this.getDates();
  names: string [] = [
    'Alfredo Borroto',
    'Amber Xiong',
    'Caleb Mc Coy',
    'Ronald Robbins',
    'Leandro Yabut',
    "John Smith",
    "Emily Johnson",
    "Michael Davis"
  ];
  sun: string [] = [];
  mon: string [] = [];
  tue: string [] = [];
  wed: string [] = [];
  thu: string [] = [];
  fri: string [] = [];
  sat: string [] = [];
  total:string [] = [];

  activeEmp: empWorkTime = {
    empName: 'Alfredo Borroto',
    empPhotoUrl: 'assets/profilepic.jpg',
    empClkIn: new Date(),
    empClkOut: new Date(),
    empLunchOut: new Date(),
    empLunchIn: new Date(),
    empDayHours: [0,0,0,0,0,0,0],
    empWeekHours: 0,
  };

  constructor(private datePipe:DatePipe, private renderer: Renderer2) {
  }
  ngOnInit() {
    this.getData();
  }

  toMainDash(){
    //TODO
  }
  print(){
    this.renderer.addClass(document.body, 'print-mode');
    window.print();
    this.renderer.removeClass(document.body, 'print-mode');
  }
  getDates(){
    let weeks = getWeeksOfYear(this.year)
    let currWeek = weeks[this.weekNumber - 1]
    let currWeekStr: string[] = [];
    for(let day of currWeek){
      currWeekStr.push(this.formatDate(day));
    }
    let spacer = '      ';
    currWeekStr.push(spacer)
    return currWeekStr;
  }
  getData(){
    for(let employee of this.allEmpWorkTimes){
      this.sun.push(employee.empDayHours[0].toString())
      this.mon.push(employee.empDayHours[1].toString())
      this.tue.push(employee.empDayHours[2].toString())
      this.wed.push(employee.empDayHours[3].toString())
      this.thu.push(employee.empDayHours[4].toString())
      this.fri.push(employee.empDayHours[5].toString())
      this.sat.push(employee.empDayHours[6].toString())
      this.total.push(employee.empWeekHours.toString())
    }
  }
  formatDate(date: Date): string {
    let str = date.toDateString()!;
    return this.datePipe.transform(str, 'MMM d')!;
  }
}
