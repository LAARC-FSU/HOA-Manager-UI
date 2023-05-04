import { Component } from '@angular/core';
import { Time} from "@angular/common";

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent {
  panelOpen = false;
  hours=['01','02','03','04','05','06','07','08','09','10','11','12'];
  minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  timeSelected = {
    hour: '',
    minute: '',
    meridian: ''
  };

  timeStr = this.timeSelected.hour + ' : ' + this.timeSelected.minute
    + ' ' + this.timeSelected.meridian;

  setHour(hour:string){
    this.timeSelected.hour = hour;
  }
  setMinute(hour:string){
    this.timeSelected.minute = hour;
  }
  setMeridian(hour:string){
    this.timeSelected.meridian = hour;
  }
}
