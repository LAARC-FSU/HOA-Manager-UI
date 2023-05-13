import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface empSchObj {
  empName: string;
  empSun: string;
  empMon: string;
  empTue: string;
  empWed: string;
  empThu: string;
  empFri: string;
  empSat: string;
  empVacation: boolean;
}

@Component({
  selector: 'employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrls: ['./employee-schedule.component.scss']
})
export class EmployeeScheduleComponent implements OnInit {
  @Input() shifts: string [] = [];
  @Input() employeeName = 'test';
  @Output() sendSchedule = new EventEmitter();

  // employeeSchedule: FormGroup;
  employeeScheduleObj: empSchObj = {
    empName: this.employeeName,
    empSun: '',
    empMon: '',
    empTue: '',
    empWed: '',
    empThu: '',
    empFri: '',
    empSat: '',
    empVacation: false
  };

  ngOnInit() {
    this.employeeScheduleObj = {
      empName: this.employeeName,
      empSun: 'off',
      empMon: 'off',
      empTue: 'off',
      empWed: 'off',
      empThu: 'off',
      empFri: 'off',
      empSat: 'off',
      empVacation: false
    }
  }

  onChange(){
    this.sendSchedule.emit(this.employeeScheduleObj);
  }
  set name(value: string) {
    this.employeeScheduleObj.empName = value;
  }

  get name(): string {
    return this.employeeScheduleObj.empName
  }

  set sun(value: string) {
    this.employeeScheduleObj.empSun = value;
  }

  get sun(): string {
    return this.employeeScheduleObj.empSun;
  }

  set mon(value: string) {
    this.employeeScheduleObj.empMon = value;
  }

  get mon(): string {
    return this.employeeScheduleObj.empMon;
  }

  set tue(value: string) {
    this.employeeScheduleObj.empTue = value;
  }

  get tue(): string {
    return this.employeeScheduleObj.empTue;
  }

  set wed(value: string) {
    this.employeeScheduleObj.empWed = value;
  }

  get wed(): string {
    return this.employeeScheduleObj.empWed;
  }

  set thu(value: string) {
    this.employeeScheduleObj.empThu = value;
  }

  get thu(): string {
    return this.employeeScheduleObj.empThu;
  }

  set fri(value: string) {
    this.employeeScheduleObj.empFri = value;
  }

  get fri(): string {
    return this.employeeScheduleObj.empFri;
  }

  set sat(value: string) {
    this.employeeScheduleObj.empSat = value;
  }

  get sat(): string {
    return this.employeeScheduleObj.empSat;
  }

  set vacation(value: boolean) {
    this.employeeScheduleObj.empVacation = value;
  }

  get vacation(): boolean {
    return this.employeeScheduleObj.empVacation;
  }


}
