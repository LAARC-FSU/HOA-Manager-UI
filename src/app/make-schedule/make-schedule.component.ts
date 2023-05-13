import {Component, OnChanges} from '@angular/core';

interface shift {
  id: string
  start: string;
  end: string;
}

@Component({
  selector: 'make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: ['./make-schedule.component.scss']
})
export class MakeScheduleComponent implements OnChanges{
  firstShiftTime: shift = {id: 'first', start: '', end: ''};
  secondShiftTime: shift = {id: 'second', start: '', end: ''};
  thirdShiftTime: shift = {id: 'third', start: '', end: ''};
  timeFrame: Date[] = [];

  ngOnChanges() {

  }

  getShiftTime($event: any) {
    switch ($event[0]) {
      case 'first-start':
        this.firstShiftTime.start = $event[1];
        break;
      case 'first-end':
        this.firstShiftTime.end = $event[1];
        break;
      case 'second-start':
        this.secondShiftTime.start = $event[1];
        break;
      case 'second-end':
        this.secondShiftTime.end = $event[1];
        break;
      case 'third-start':
        this.thirdShiftTime.start = $event[1];
        break;
      case 'third-end':
        this.thirdShiftTime.end = $event[1];
        break;
    }
  }
  getTimeFrame($event: any) {
    this.timeFrame = $event.week.weekDays;
  }
}

