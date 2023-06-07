import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'shift-maker',
  templateUrl: './shift-maker.component.html',
  styleUrls: ['./shift-maker.component.scss']
})
export class ShiftMakerComponent implements OnInit{
  @Input() title ='';
  @Input() id = '';
  @Output() timeStamps = new EventEmitter();

  _switchToggle = true;
  shiftTime:any[]=[];

  ngOnInit() {
    this.sendTimeShift(this.shiftTime);
  }
  get switchToggle(): boolean{
    return this._switchToggle;
  }
  onSwitchToggle($event: any){
    this._switchToggle = ($event.target as HTMLInputElement).checked;
    this.sendSwitchToggle();
  }
  sendSwitchToggle(){
    return this._switchToggle;
  }

  receiveTime($event:any){
    this.sendTimeShift($event);
  }
  sendTimeShift(value: any){
    this.timeStamps.emit(value);
  }

}
