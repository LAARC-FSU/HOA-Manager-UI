import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {empWorkTime} from "../interfaces";

@Component({
  selector: 'clock-in-out-dialog',
  templateUrl: './clock-in-out-dialog.component.html',
  styleUrls: ['./clock-in-out-dialog.component.scss']
})

export class ClockInOutDialogComponent implements OnInit {
  clockColor: string = '';
  currDate: Date = new Date();
  currDateStr: string = '';
  imgPlaceHolderUrl: string = 'assets/employeePhotoPlaceholder.svg';
  startActive: boolean = true;
  endActive: boolean = false;
  lunchOutActive: boolean = false;
  lunchInActive: boolean = false;
  @Output() sendWorkTime: EventEmitter<empWorkTime> = new EventEmitter();
  @Input() empName: string = '';
  @Input() empWorkTime: empWorkTime = {
    empName: '',
    empPhotoUrl: this.imgPlaceHolderUrl,
    empClkIn: new Date(),
    empClkOut: new Date(),
    empLunchOut: new Date(),
    empLunchIn: new Date(),
    empWeekHours: 0,
    empDayHours: 0
  }

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.currDateStr = this.formatDate(this.currDate)!;
  }

  formatDate(date: Date) {
    return this.datePipe.transform(date, 'EEEE, MMMM d, y')
  }

  clockIn() {
    this.empWorkTime.empClkIn = new Date();
    this.startActive = false;
    this.endActive = true;
    this.lunchOutActive = true;

  }

  lunchOut() {
    this.empWorkTime.empLunchOut = new Date();
    this.lunchOutActive = false;
    this.lunchInActive = true;
  }

  lunchIn() {
    this.empWorkTime.empLunchIn = new Date();
    this.lunchInActive =  false;
  }

  clockOut() {
    this.empWorkTime.empClkOut = new Date();
    this.calculateHours();
    this.endActive =  false;
    this.startActive =  true;
  }

  calculateHours() {
    const lunchTime = this.empWorkTime.empLunchIn.getTime() - this.empWorkTime.empLunchOut.getTime();
    const workedTime = this.empWorkTime.empClkOut.getTime() - this.empWorkTime.empClkIn.getTime();

    // Test
    // const lunchTime = 1920000 // 32min
    // const workedTime = 28800000 // 8 hours

    let totalTime;
    if (lunchTime > 0){
      totalTime = workedTime - lunchTime;
    }else{ totalTime = workedTime;}

    this.empWorkTime.empDayHours = totalTime / (1000 * 3600);
    this.empWorkTime.empWeekHours += this.empWorkTime.empDayHours;
  }
}
