import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  private _shiftIsOff = true;
  @Input() componentId = '';
  @Output() time = new EventEmitter<object>();
  @Input()
  set shiftIsOff(value: boolean) {
    this._shiftIsOff = value;
    if (this.componentId){
      this.update();
    }
  }

  get shiftIsOff(): boolean {
    return this._shiftIsOff;
  }

  hours=['01','02','03','04','05','06','07','08','09','10','11','12'];
  minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
  timeStr ='';
  timeSelected = {
    hour: '09',
    minute: '00',
    meridian: 'am',
    str:'09 : 00 am',
    id:this.componentId
  };

  ngOnInit(){
    this.update();
  }
  get displayText(){
    if (!this.shiftIsOff){
      this.timeStr = 'shift is off';
    }else{
      this.timeStr = this.timeSelected.hour + ' : ' + this.timeSelected.minute
        + ' ' + this.timeSelected.meridian;
      this.timeSelected.str = this.timeStr;
    }
    return this.timeStr;
  }
  update(){
    if (this._shiftIsOff){
      if (this.timeSelected.hour === '--'){
        this.timeSelected.hour = '09';
        this.timeSelected.minute = '00';
        this.timeSelected.meridian = 'am';
      }
      this.timePickerReset()
      console.log('reset')
    }
    else {
      console.log('clear')
      this.timePickerClear()
      this.time.emit(this.timeSelected);
    }

  }
  timePickerClear(){
    this.timeStr = '-- : -- --';
    this.timeSelected.str = this.timeStr;
    this.timeSelected.id = this.componentId;
    this.timeSelected.hour = '--';
    this.timeSelected.minute = '--';
    this.timeSelected.meridian = '--';
  }
  timePickerReset(){
    this.timeStr = this.timeSelected.hour + ' : ' + this.timeSelected.minute
      + ' ' + this.timeSelected.meridian;
    this.timeSelected.str = this.timeStr;
    this.timeSelected.id = this.componentId;
    this.time.emit(this.timeSelected);
  }
}
