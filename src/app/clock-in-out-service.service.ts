import { Injectable } from '@angular/core';
import {empWorkTime} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class ClockInOutServiceService {
  saveState(currState:State, currEmp: empWorkTime){
    localStorage.setItem('clockInOutState', JSON.stringify(currState) )
    localStorage.setItem('currEmp', JSON.stringify(currEmp))
  }
  getState(){
    if (localStorage.getItem('clockInOutState')){
      return JSON.parse(localStorage.getItem('clockInOutState')!)
    }
  }
  getCurrEmp(){
    if (localStorage.getItem('currEmp')){
      return JSON.parse(localStorage.getItem('currEmp')!)
    }
  }
  constructor() { }
}
enum State { clockedIn, lunchOut, lunchIn, clockedOut}
