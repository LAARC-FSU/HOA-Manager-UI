import { Component } from '@angular/core';

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
  selector: 'schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.scss']
})
export class ScheduleDashboardComponent {
activeSchedule = 'May 14 ~ May 20';
savedSchedules: Schedule[]= [];
}
