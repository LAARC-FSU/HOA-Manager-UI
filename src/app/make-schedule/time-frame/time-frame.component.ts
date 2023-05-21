import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface Week {
  weekNum: number;
  weekText: string;
  weekDays: Date[];
}

@Component({
  selector: 'time-frame',
  templateUrl: './time-frame.component.html',
  styleUrls: ['./time-frame.component.scss']
})

export class TimeFrameComponent implements OnInit{
  get weekSelected(): string {
    return this._weekSelected;
  }

  set weekSelected(value: string) {
    this._weekSelected = value;
  }
  get monthSelected(): string {
    return this._monthSelected;
  }

  set monthSelected(value: string) {
    this._monthSelected = value;
  }
  get yearSelected(): string {
    return this._yearSelected;
  }

  set yearSelected(value: string) {
    this._yearSelected = value;
  }
  years: Array<string> = [];
  months: Array<string> = [];
  weeks: Array<Week> = []
  date: Date = new  Date();
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthNameShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


  selection:{ year: string, month: string, week: Week } = {
    year: '',
    month: '',
    week: {
      weekNum: 0,
      weekText: '',
      weekDays: []
    }
  }


  private _yearSelected =  '';
  private _monthSelected = '';
  private _weekSelected = '';



  ngOnInit() {
    this.populateYear();
    this.populateMonth();
    this.populateWeek();
    this.timeFrame.emit(this.selection)
  }

  @Output() timeFrame = new EventEmitter<object>();


  sendTimeFrame(){
    this.selection.year = this.yearSelected;
    this.selection.month = this.monthSelected;

   this.timeFrame.emit(this.selection)
  }
  populateYear(){
    let currYear = this.date.getFullYear();
    this.years.push(currYear.toString());
    for (let i = 0; i < 3; i++){
      currYear += 1;
      this.years.push(currYear.toString());
    }
    if (!this.selection.year){
      this.yearSelected =  this.years[0];
      this.selection.year = this.yearSelected;
    }
  }
  populateMonth(){

    let currMonth = this.date.getMonth()
    if (this.yearSelected === this.date.getFullYear().toString() && (this.monthNames.indexOf(this.monthSelected) < this.date.getMonth() || !this.yearSelected)){
      this.months = this.monthNames.slice(currMonth);
      this.monthSelected = this.months[0];

    }
    else if (this.yearSelected !== this.date.getFullYear().toString()){
      this.months = this.monthNames;
    }

    if (!this.selection.month){
      this.monthSelected =  this.months[0];
      this.selection.month = this.monthSelected;
    }
  }
  populateWeek(){
    if (this.weeks.length > 0){
      this.weeks = [];
    }
    // Variables to set date
    let year: number;
    let month: number;
    // Default values
    if (!this.yearSelected && !this.monthSelected ||
      this.yearSelected === this.date.getFullYear().toString() && this.monthNames.indexOf(this.monthSelected) < this.date.getMonth()){
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

      let weekString = this.monthNameShort[sunday.getMonth()] + ', ' + sunday.getDate() +
        ' ~ ' + this.monthNameShort[saturday.getMonth()] + ', ' + saturday.getDate()

      let week: Week = {
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

      // this.weeks.push(week)
      if (today < week.weekDays[0]) {
          this.weeks.push(week)
      }

      let tempSunday = new Date(sunday.getTime());
      let tempSaturday = new Date(saturday.getTime());

      sunday = new Date(tempSunday.setDate(tempSunday.getDate() + 7));
      saturday = new Date(tempSaturday.setDate(tempSaturday.getDate() + 7));

    }

    if (!this.weekSelected || this.yearSelected !== this.selection.year || this.monthSelected !== this.selection.month){
      this.weekSelected = this.weeks[0].weekText;
      this.selection.week = this.weeks[0];
    }
    else{
      for (let week of this.weeks){
        if (week.weekText === this.weekSelected){
          this.selection.week = week;
        }
      }
    }
  }
  onYearChange(){this.populateMonth();
    this.populateWeek()

  }
  identifyWeek(index: number, item: Week) {
    return item.weekText;
  }

}
