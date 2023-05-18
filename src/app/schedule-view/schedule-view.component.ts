import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";

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

enum state { view, make}

@Component({
  selector: 'schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent {
  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  schedule: Schedule = {
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };
  private scheduleSource = new BehaviorSubject<Schedule>(this.schedule);
  currSchedule = this.scheduleSource.asObservable();

  updateSchedule(newSchedule: Schedule) {
    this.scheduleSource.next(newSchedule);
  }
}
