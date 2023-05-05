import {Component, OnInit, Input} from '@angular/core';
import { Time} from "@angular/common";

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  @Input() componentId = '';
  hours=['01','02','03','04','05','06','07','08','09','10','11','12'];
  minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
  timeStr ='';

  timeSelected = {
    hour: '09',
    minute: '00',
    meridian: 'am'
  };
  ngOnInit(){
    this.update();
  }

  update(){
    this.timeStr = this.timeSelected.hour + ' : ' + this.timeSelected.minute
      + ' ' + this.timeSelected.meridian;
  }

  log(x:any){
    console.log(x);
    console.log(this.timeSelected.hour);
  }
}
