import {Injectable} from '@angular/core';
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
export class ScheduleService{
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

  saveSchedule(newSchedule: Schedule){
    debugger
    let savedSchedule = [];
    if (localStorage.getItem('saved')){
      savedSchedule = JSON.parse(localStorage.getItem('saved')!);
      savedSchedule.push(newSchedule);
      localStorage.setItem('saved', JSON.stringify(savedSchedule))
    }
    else{
      localStorage.setItem('saved', JSON.stringify([newSchedule]));
    }

  }
}
