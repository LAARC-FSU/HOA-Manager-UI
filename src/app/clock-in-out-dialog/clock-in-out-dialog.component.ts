import {Component, EventEmitter, OnInit, Output, Input, OnDestroy} from '@angular/core';
import {DatePipe} from "@angular/common";
import {empWorkTime} from "../interfaces";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ClockInOutServiceService} from "../clock-in-out-service.service";

@Component({
  selector: 'clock-in-out-dialog',
  templateUrl: './clock-in-out-dialog.component.html',
  styleUrls: ['./clock-in-out-dialog.component.scss']
})

export class ClockInOutDialogComponent implements OnInit, OnDestroy {
  clockInStr = '';
  clockOutStr = '';
  lunchOutStr = '';
  lunchInStr = '';
  timeWorked = '';
  currState: State = -1;
  clockColor: string = '';
  currDate: Date = new Date();
  currDateStr: string = '';
  imgPlaceHolderUrl: string = 'assets/employeePhotoPlaceholder.svg';
  startActive: boolean = true;
  endActive: boolean = false;
  lunchOutActive: boolean = false;
  lunchInActive: boolean = false;
  @Output() sendWorkTime: EventEmitter<empWorkTime> = new EventEmitter();

  empWorkTime: empWorkTime = {
    empName: 'Leandro Yabut',
    empPhotoUrl: 'assets/leandro_pic.jpg',
    empClkIn: new Date(),
    empClkOut: new Date(),
    empLunchOut: new Date(),
    empLunchIn: new Date(),
    empDayHours: [0,0,0,0,0,0,0],
    empWeekHours: 0,
  };
  empName: string = this.empWorkTime.empName;

  constructor(private datePipe: DatePipe, private http: HttpClient, private service: ClockInOutServiceService) {
  }

  ngOnInit() {
    let test1 = this.service.getState();
    let test2 = this.service.getCurrEmp();

    this.currState = this.service.getState();
    this.empWorkTime = this.service.getCurrEmp();
    switch (this.currState) {
      case State.clockedIn:
        this.startActive = false;
        this.endActive = true;
        this.lunchOutActive = true;
        this.lunchInActive = false;
        this.clockInStr = this.formatTime(this.empWorkTime.empClkIn)
        break
      case State.lunchOut:
        this.startActive = false;
        this.endActive = true;
        this.lunchOutActive = false;
        this.lunchInActive = true;
        this.lunchOutStr = this.formatTime(this.empWorkTime.empLunchOut)
        break
      case State.lunchIn:
        this.startActive = false;
        this.endActive = true;
        this.lunchOutActive = false;
        this.lunchInActive = false;
        this.lunchInStr = this.formatTime(this.empWorkTime.empLunchIn)
        break
      case State.clockedOut:
        this.startActive = true;
        this.endActive = false;
        this.lunchOutActive = false;
        this.lunchInActive = false;
        this.clockOutStr = this.formatTime(this.empWorkTime.empClkOut)
        break
    }
    this.currDateStr = this.formatDate(this.currDate)!;
  }

  ngOnDestroy(){
    this.service.saveState(this.currState, this.empWorkTime)
  }
  formatDate(date: Date) {
    return this.datePipe.transform(date, 'EEEE, MMMM d, y')
  }

  clockIn() {
    this.empWorkTime.empClkIn = new Date();
    this.clockInStr = this.formatTime(this.empWorkTime.empClkIn)

    this.startActive = false;
    this.endActive = true;
    this.lunchOutActive = true;
    this.currState = State.clockedIn;
    this.service.saveState(this.currState, this.empWorkTime)

    // let token = localStorage.getItem("token")
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + token
    //   })
    // };
    //
    // const data = {
    //   time: (new Date()).toISOString(),
    //   activityType: 'CLOCK_IN'
    // }
    //
    // const url = 'http://3.136.16.135:8080/employee-clock';
    // this.http.post(url,data,httpOptions).subscribe(response => {console.log(response);
    // })
  }

  lunchOut() {
    this.empWorkTime.empLunchOut = new Date();
    this.lunchOutStr = this.formatTime(this.empWorkTime.empLunchOut)
    this.lunchOutActive = false;
    this.lunchInActive = true;
    this.currState = State.lunchOut;
    this.service.saveState(this.currState, this.empWorkTime)
  }

  lunchIn() {
    this.empWorkTime.empLunchIn = new Date();
    this.lunchInStr = this.formatTime(this.empWorkTime.empLunchIn)
    this.lunchInActive = false;
    this.currState = State.lunchIn;
    this.service.saveState(this.currState, this.empWorkTime)
  }

  clockOut() {
    if (this.lunchInActive) {
      this.lunchInActive = false;
      this.lunchIn();
    }
    if (this.lunchOutActive) {
      this.lunchOutActive = false;
    }

    this.empWorkTime.empClkOut = new Date();
    this.clockOutStr = this.formatTime(this.empWorkTime.empClkOut)
    this.calculateHours();
    this.endActive = false;

    this.startActive = true;
    this.currState = State.clockedOut;
    this.service.saveState(this.currState, this.empWorkTime)
  }

  calculateHours() {
    let lIn = new Date(this.empWorkTime.empLunchIn);
    let lOut = new Date(this.empWorkTime.empLunchOut)

    const lunchTime = lIn.getTime() - lOut.getTime();

    let cOut = new Date(this.empWorkTime.empClkOut);
    let cIn = new Date(this.empWorkTime.empClkIn);

    const workedTime = cOut.getTime() - cIn.getTime();

    let totalTime;
    if (lunchTime > 0) {
      totalTime = workedTime - lunchTime;
    } else {
      totalTime = workedTime;
    }

    switch (cIn.getDay()) {
      case 0:
        this.empWorkTime.empDayHours[0] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[0].toFixed(2).toString()
        break
      case 1:
        this.empWorkTime.empDayHours[1] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[1].toFixed(2).toString()
        break
      case 2:
        this.empWorkTime.empDayHours[2] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[2].toFixed(2).toString()
        break
      case 3:
        this.empWorkTime.empDayHours[3] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[3].toFixed(2).toString()
        break
      case 4:
        this.empWorkTime.empDayHours[4] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[4].toFixed(2).toString()
        break
      case 5:
        this.empWorkTime.empDayHours[5] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[5].toFixed(2).toString()
        break
      case 6:
        this.empWorkTime.empDayHours[6] = totalTime / (1000 * 3600);
        this.timeWorked = this.empWorkTime.empDayHours[6].toFixed(2).toString()
        break
    }
    for (let day of this.empWorkTime.empDayHours) {
      this.empWorkTime.empWeekHours += day;
    }
  }

  formatTime(date: Date): string {
    return this.datePipe.transform(date, 'hh:mm a')!;
  }
}

enum State { clockedIn, lunchOut, lunchIn, clockedOut}
