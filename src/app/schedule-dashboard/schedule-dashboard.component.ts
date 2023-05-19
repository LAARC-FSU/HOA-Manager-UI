import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../schedule.service";
import {Schedule} from "../interfaces";

// interface Shift {
//   id: string
//   start: string;
//   end: string;
// }
// interface Schedule {
//   timeFrame: Date[];
//   firstShiftTime: Shift;
//   secondShiftTime: Shift;
//   thirdShiftTime: Shift;
//   schedules: {[key:string]: {}[]};
// }

@Component({
  selector: 'schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.scss']
})
export class ScheduleDashboardComponent implements OnInit{
activeSchedule: Schedule = {
  timeFrameStr: '',
  timeFrame: [],
  firstShiftTime: {id: 'first shift', start: '', end: ''},
  secondShiftTime: {id: 'second shift', start: '', end: ''},
  thirdShiftTime: {id: 'third shift', start: '', end: ''},
  schedules: {}
};
activeScheduleStr = '';
savedSchedules: Schedule[]= [];
constructor(private currSchedule: ScheduleService) {
  if (localStorage.getItem('saved')){
    this.savedSchedules = JSON.parse(localStorage.getItem('saved')!)
  }
  if (localStorage.getItem('active')){
    this.activeScheduleStr = JSON.parse(localStorage.getItem('active')!).timeFrameStr
  }
}
ngOnInit(){
  this.currSchedule.currSchedule.subscribe( currSchedule => this.activeSchedule = currSchedule)
  // if (this.activeSchedule.timeFrame[0]){
  //   this.activeScheduleStr = JSON.parse(localStorage.getItem('active')!).activeScheduleStr;
  // }
  // this.activeScheduleStr = JSON.parse(localStorage.getItem('active')!).activeScheduleStr;
  // if (localStorage.getItem('active')){
  //   this.activeScheduleStr = JSON.parse(localStorage.getItem('active')!).activeScheduleStr
  // }
}
}
