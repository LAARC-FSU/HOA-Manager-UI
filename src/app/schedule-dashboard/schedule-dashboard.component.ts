import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../schedule.service";
import {Schedule} from "../interfaces";
import {Router} from "@angular/router";

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
export class ScheduleDashboardComponent implements OnInit {
  activeSchedule: Schedule = {
    timeFrameStr: '',
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };
  activeScheduleStr = 'No Active Schedule';
  savedSchedules: Schedule[] = [];

  constructor(private router:Router, private currSchedule: ScheduleService) {
    if (localStorage.getItem('saved')) {
      this.savedSchedules = JSON.parse(localStorage.getItem('saved')!)
    }
    if (localStorage.getItem('active')) {
      this.activeScheduleStr = JSON.parse(localStorage.getItem('active')!).timeFrameStr
    }
    if (this.savedSchedules.length === 0){
      this.activeScheduleStr = 'No Active Schedule';
    }
  }

  ngOnInit() {
    this.currSchedule.currSchedule.subscribe(currSchedule => this.activeSchedule = currSchedule);
  }

  toView(){
    this.router.navigateByUrl('view-schedule');
  }
  toMake(){
    this.router.navigateByUrl('make-schedule');
  }
  exit(){
    // TODO
  }
  deleteSchedule(index:number){
    if (this.savedSchedules[index].timeFrameStr === this.activeSchedule.timeFrameStr){
      this.activeSchedule = this.savedSchedules[0];
      this.currSchedule.updateSchedule(this.activeSchedule);
      this.activeScheduleStr = this.activeSchedule.timeFrameStr;
    }
    this.savedSchedules.splice(index, 1);
    this.currSchedule.deleteSchedule(index);
    if (this.savedSchedules.length === 0){
      this.activeScheduleStr = 'No Active Schedule';
    }
  }

  postSchedule(index:number){
    {
      this.activeSchedule = this.savedSchedules[index];
      this.activeScheduleStr = this.activeSchedule.timeFrameStr;
      this.currSchedule.updateSchedule(this.savedSchedules[index])
    }
  }
}
