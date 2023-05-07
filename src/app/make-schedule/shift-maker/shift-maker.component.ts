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
    this.sendTimeShift();
  }
  get switchToggle(): boolean{
    return this._switchToggle;
  }
  onSwitchToggle(event:Event){
    this._switchToggle = (event.target as HTMLInputElement).checked;
  }
  receiveTime($event:any){
    let timeStamp = $event;
    console.log(timeStamp)
    if (this.shiftTime.length < 2){
      this.shiftTime.push(timeStamp);
    }
    else{
      for (let i = 0; i < this.shiftTime.length; i++){

        if (this.shiftTime[i].id === timeStamp.id){
          this.shiftTime[i] = timeStamp;
        }
      }
    }
    this.timeStamps.emit(this.shiftTime)
  }
  sendTimeShift(){
    this.timeStamps.emit(this.shiftTime);
  }

}
