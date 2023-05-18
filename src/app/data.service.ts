import { Injectable } from '@angular/core';
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
@Injectable({
  providedIn: 'root'
})
export class DataService {
  schedule: Schedule = {
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };

  private scheduleSource = new BehaviorSubject<Schedule>(this.schedule);
  currSchedule = this.scheduleSource.asObservable();
  constructor() { }

  updateSchedule(newSchedule: Schedule) {
    this.scheduleSource.next(newSchedule);
  }
}
