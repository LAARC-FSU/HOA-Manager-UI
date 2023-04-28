import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'time-frame',
  templateUrl: './time-frame.component.html',
  styleUrls: ['./time-frame.component.scss']
})
export class TimeFrameComponent implements OnInit{
  yearSelect: Array<number> = [];
  monthSelect: Array<string> = [];
  weekSelect: Array<string> = [];
  date: Date = new  Date();
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  selection = {
    year:'',
    month:'',
    week:''
  }

  ngOnInit() {
    this.populateYear();
    this.populateMonth();
    this.selection.year = this.yearSelect[0].toString();
    this.selection.month = this.months[this.date.getMonth()]
  }
  populateYear(){
    let currYear = this.date.getFullYear();
    this.yearSelect.push(currYear);
    for (let i = 0; i < 3; i++){
      currYear += 1;
      this.yearSelect.push(currYear);
    }
  }
  populateMonth(){
    let currMonth = this.date.getMonth()
    console.log(this.selection.year === this.date.getFullYear().toString())
    if (this.selection.year === this.date.getFullYear().toString()){
      this.monthSelect = this.months.splice(currMonth);
    }else{this.monthSelect = this.months;}
  }
  populateWeek(){
    let day = this.date.getDay();
    let sunday = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - day);
    let saturday = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() - day + 6);

  }
  log(x:any){
    console.log(x);
  }

}
