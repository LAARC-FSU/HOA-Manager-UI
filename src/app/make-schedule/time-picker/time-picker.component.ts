import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})

export class TimePickerComponent implements OnInit, OnChanges {
  @Input() isOn: boolean = true;
  @Input() componentId = '';
  @Output() sendTime = new EventEmitter<object>();

  hours=['01','02','03','04','05','06','07','08','09','10','11','12'];
  minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  timeSelected = {
    hour: '',
    minute: '',
    meridian: '',
    str:'',
    id:''
  };
  ngOnInit(){
    this.timeSelected = {
      hour: '09',
      minute: '00',
      meridian: 'am',
      str: '09 : 00 am',
      id: this.componentId
    }
    this.sendTime.emit([this.timeSelected.id, this.timeSelected.str])
    // this.update();
  }
  ngOnChanges(){
    this.update();
  }
  update(){
    this.updateScreen();
    if (this.timeSelected.id && this.timeSelected.str){
      this.sendTime.emit([this.timeSelected.id, this.timeSelected.str])
    }
  }
  updateScreen(){
    if(this.isOn){
      this.buildTimeStr()
    }else{
      this.timeSelected.str = 'shift is off'
    }
  }
  buildTimeStr(){
    this.timeSelected.str = this.timeSelected.hour + ' : ' + this.timeSelected.minute
      + ' ' + this.timeSelected.meridian;
  }
}
