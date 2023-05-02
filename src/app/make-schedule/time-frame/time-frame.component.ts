import { Component, OnInit } from '@angular/core';
import {formatDate} from "@angular/common";

@Component({
  selector: 'time-frame',
  templateUrl: './time-frame.component.html',
  styleUrls: ['./time-frame.component.scss']
})
export class TimeFrameComponent implements OnInit{
  years: Array<string> = [];
  months: Array<string> = [];
  weeks: Array<any> = [];
  date: Date = new  Date();
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthNameShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  yearSelected =  '';
  monthSelected = '';
  weekSelected = '';

  selection = {
    year:'',
    month:'',
    week:''
  }

  ngOnInit() {
    this.populateYear();
    this.populateMonth();
    this.populateWeek();
    this.yearSelected =  this.years[0];
    this.monthSelected = this.monthNames[this.date.getMonth()];
    this.weekSelected = this.weeks[0].weekText;
  }
  populateYear(){
    let currYear = this.date.getFullYear();
    this.years.push(currYear.toString());
    for (let i = 0; i < 3; i++){
      currYear += 1;
      this.years.push(currYear.toString());
    }
  }
  populateMonth(){
    let currMonth = this.date.getMonth()
    if (this.yearSelected === this.date.getFullYear().toString() || !this.yearSelected){
      this.months = this.monthNames.slice(currMonth);
    }else{this.months = this.monthNames;}
  }
  populateWeek(){
    // Cleaning array
    this.weeks = [];
    // Variables to set date
    let year: number;
    let month: number;
    // Default values
    if (!this.yearSelected && !this.monthSelected){
      year = this.date.getFullYear();
      month = this.date.getMonth();
    }
    // User input values
    else{
      year = parseInt(this.yearSelected);
      month = this.monthNames.indexOf(this.monthSelected);
    }
    // Variables needed to calculate sunday and saturday
    let today= new Date();
    let firstDayOfTheMonth = new Date(year,month);
    let dayOfWeek = firstDayOfTheMonth.getDay();
    // Calculating sunday
    let sunday = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate()-dayOfWeek))
    // Resetting
    firstDayOfTheMonth = new Date(year,month);

    let saturday = new Date(firstDayOfTheMonth.setDate(firstDayOfTheMonth.getDate() + 6 - dayOfWeek))

    for (let i = 0; i < 5; i++) {
      let weekString = this.monthNameShort[sunday.getMonth()] + ', ' + sunday.getDate() + ' ~ ' + this.monthNameShort[saturday.getMonth()] + ', ' + saturday.getDate()
      let week: { weekNum: number, weekText: string, weekDays: Date[] } = {
        weekNum: i + 1,
        weekText: weekString,
        weekDays: []
      };
      week.weekDays.push(sunday);
      let temp = new Date(sunday);
      for (let j = 0; j < 5; j++) {
        let day = new Date(temp.setDate(temp.getDate() + 1));
        week.weekDays.push(day);
      }
      week.weekDays.push(saturday);

      sunday = new Date(sunday.setDate(sunday.getDate() + 7));
      saturday = new Date(saturday.setDate(saturday.getDate() + 7));

      this.log(week.weekDays[0])
      this.log(today)
      if (today < week.weekDays[0]) {
        this.weeks.push(week)
      }
    }
  }
  onYearChange(){
    this.populateMonth();
    this.populateWeek()
  }

  log(x:any){
    console.log(x);
  }

  protected readonly console = console;
}
