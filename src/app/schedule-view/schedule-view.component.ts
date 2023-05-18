import {Component, OnInit} from '@angular/core';
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
  schedules: { [key: string]: {}[] };
}

@Component({
  selector: 'schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit{
  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  schedule: Schedule = {
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };

  constructor(private data: ScheduleService) {
  }
  ngOnInit() {
    this.data.currSchedule.subscribe( schedule => this.schedule = schedule)
  }
}
