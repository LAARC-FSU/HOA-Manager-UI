import { Injectable } from '@angular/core';
import {empWorkTime, timeStamps} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class ClockInOutServiceService {
  currEmpInit: empWorkTime = {
    empName: 'Leandro Yabut',
    empPhotoUrl: 'assets/leandro_pic.jpg',
    empClkIn: new Date(),
    empClkOut: new Date(),
    empLunchOut: new Date(),
    empLunchIn: new Date(),
    empDayHours: [0,0,0,0,0,0,0],
    empWeekHours: 0,
  };
  timeStamps = {
    clockInStr : '',
    clockOutStr : '',
    lunchOutStr : '',
    lunchInStr : ''
  }

  saveState(currState:State, currEmp: empWorkTime, timeStamps: timeStamps){
    localStorage.setItem('clockInOutState', JSON.stringify(currState) )
    localStorage.setItem('currEmp', JSON.stringify(currEmp))
    localStorage.setItem('timeStamps', JSON.stringify(timeStamps))
  }
  getState(){
    if (localStorage.getItem('clockInOutState')){
      return JSON.parse(localStorage.getItem('clockInOutState')!)
    }else{
      return -1;
    }
  }
  getCurrEmp(){
    if (localStorage.getItem('currEmp')){
      return JSON.parse(localStorage.getItem('currEmp')!)
    }else{
      return this.currEmpInit;
    }
  }
  getTimeStamps(){
    if (localStorage.getItem('timeStamps')){
      return JSON.parse(localStorage.getItem('timeStamps')!)
    }else{
      return this.timeStamps;
    }
  }
  constructor() { }
}
enum State { clockedIn, lunchOut, lunchIn, clockedOut}
