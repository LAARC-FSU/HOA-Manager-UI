import { Component } from '@angular/core';

@Component({
  selector: 'make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: ['./make-schedule.component.scss']
})
export class MakeScheduleComponent {
  shiftTime:any[]=[];
  allShiftsTime:any=[];
  numberOfShifts = 3;
  getShiftTime($event:any){
    this.shiftTime = $event;

    if (this.allShiftsTime.length < this.numberOfShifts){
      this.allShiftsTime.push(this.shiftTime);
    }
    console.log(this.allShiftsTime)
  }
}

