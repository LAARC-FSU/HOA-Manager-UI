import {Component, Input} from '@angular/core';
import { empWorkTime } from "../interfaces";

@Component({
  selector: 'worked-hours-view',
  templateUrl: './worked-hours-view.component.html',
  styleUrls: ['./worked-hours-view.component.scss']
})
export class WorkedHoursViewComponent {
  @Input()
  weekDaysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: string [] = [];
  names: string [] = [];
  sun: string [] = [];
  mon: string [] = [];
  tue: string [] = [];
  wed: string [] = [];
  thu: string [] = [];
  fri: string [] = [];
  sat: string [] = [];
  toMainDash(){

  }
  print(){

  }
}
