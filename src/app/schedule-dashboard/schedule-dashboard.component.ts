import {Component, OnInit} from '@angular/core';
import {ScheduleService} from "../schedule.service";
import {Schedule, ScheduleAdapter} from "../interfaces";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'schedule-dashboard',
  templateUrl: './schedule-dashboard.component.html',
  styleUrls: ['./schedule-dashboard.component.scss']
})
export class ScheduleDashboardComponent implements OnInit {
  activeSchedule: Schedule = {
    timeFrameStr: '',
    timeFrame: [],
    firstShiftTime: {id: 'first shift', start: '', end: ''},
    secondShiftTime: {id: 'second shift', start: '', end: ''},
    thirdShiftTime: {id: 'third shift', start: '', end: ''},
    schedules: {}
  };
  activeScheduleStr = 'No Active Schedule';
  activeScheduleId = "";
  savedSchedules: Schedule[] = [];

  savedSchedulesStr: ScheduleAdapter[] = [];

  constructor(private router:Router, private currSchedule: ScheduleService, private http:HttpClient) {

  }

  ngOnInit() {
    let token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    this.currSchedule.currSchedule.subscribe(currSchedule => this.activeSchedule = currSchedule);
    const url = 'http://3.136.16.135:8080/schedule/get-schedule';
    this.http.get(url,httpOptions).subscribe(response => {
      let data = Object.values(response);
      this.savedSchedulesStr = data[0];
      this.savedSchedules = data[0];
      if (this.savedSchedules.length === 0){
        this.activeScheduleStr = 'No Active Schedule';
      }else{
        for(let i = 0; i < this.savedSchedulesStr.length;i++){
          let obj = this.savedSchedulesStr[i];
          if(obj.posted){
            this.activeScheduleStr = obj.timeFrameStr;
            this.activeScheduleId = obj.id;
          }
        }
      }
    })
  }

  toView(){
    this.router.navigateByUrl('view-schedule');
  }
  toMake(){
    this.router.navigateByUrl('make-schedule');
  }
  exit(){
    // TODO
  }
  deleteSchedule(index:number){
    let variable = this.savedSchedulesStr[index].id.toString();
    if (this.savedSchedules[index].timeFrameStr === this.activeSchedule.timeFrameStr){
      this.activeSchedule = this.savedSchedules[0];
      this.currSchedule.updateSchedule(this.activeSchedule);
      this.activeScheduleStr = this.activeSchedule.timeFrameStr;
    }
    this.savedSchedules.splice(index, 1);
    this.currSchedule.deleteSchedule(index);

    let token = localStorage.getItem("token")
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    const url = 'http://3.136.16.135:8080/schedule/delete/' + variable;
    this.http.delete(url, httpOptions).subscribe(response => console.log(response));
    if (this.savedSchedules.length === 0){
      this.activeScheduleStr = 'No Active Schedule';
    }
  }

  postSchedule(index:number){
    {
      this.activeSchedule = this.savedSchedules[index];
      this.activeScheduleStr = this.activeSchedule.timeFrameStr;
      this.currSchedule.updateSchedule(this.savedSchedules[index])

      let token = localStorage.getItem("token")
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      };
      let variable = this.savedSchedulesStr[index].id.toString();
      if(this.activeScheduleId !== ""){
        variable = variable + "/" + this.activeScheduleId;
      }else{
        variable = variable + "/0"
      }
      const url = 'http://3.136.16.135:8080/schedule/update/' + variable;
      this.http.put(url,{}, httpOptions).subscribe(response => console.log(response));
      this.activeScheduleId = this.savedSchedulesStr[index].id;
    }
  }
}
