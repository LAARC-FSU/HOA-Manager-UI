import {Component, OnInit} from '@angular/core';

interface shift {
  id: string
  start: string;
  end: string;
}

@Component({
  selector: 'make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: ['./make-schedule.component.scss']
})
export class MakeScheduleComponent implements OnInit{
  firstShiftTime: shift = {id: 'first shift', start: '', end: ''};
  secondShiftTime: shift = {id: 'second shift', start: '', end: ''};
  thirdShiftTime: shift = {id: 'third shift', start: '', end: ''};
  timeFrame: Date[] = [];
  shifts: string[] = ['off'];
  schedules: {[key:string]: {}[]} = {};
  employees: string[] = [
    'John Doe',
    'Jane Smith',
    'Michael Johnson',
    'Emily Davis',
    'Robert Wilson',
    'Sarah Thompson',
    'Daniel Anderson',
    'Jennifer Thomas',
    'David Martinez',
    'Jessica Lee',
    'Andrew Taylor',
    'Nicole Clark',
    'Matthew Rodriguez',
    'Olivia Hall',
    'William Walker',
    'Sophia Young',
    'James Lewis',
    'Ava Turner',
    'Christopher Baker',
    'Mia Mitchell'
  ];

  ngOnInit() {
    this.buildingShiftsOptions();
  }
  buildingShiftsOptions(){
    this.shifts = ['off'];

    if (this.firstShiftTime.start !== 'shift is off'){
      this.shifts.push('1st shift');
    }
    if (this.secondShiftTime.start !== 'shift is off'){
      this.shifts.push('2nd shift');
    }
    if (this.thirdShiftTime.start !== 'shift is off'){
      this.shifts.push('3rd shift');
    }
  }

  getSchedules($event:any){
    console.log($event)
  }
  getShiftTime($event: any) {
    switch ($event[0]) {
      case 'first-start':
        this.firstShiftTime.start = $event[1];
        break;
      case 'first-end':
        this.firstShiftTime.end = $event[1];
        break;
      case 'second-start':
        this.secondShiftTime.start = $event[1];
        break;
      case 'second-end':
        this.secondShiftTime.end = $event[1];
        break;
      case 'third-start':
        this.thirdShiftTime.start = $event[1];
        break;
      case 'third-end':
        this.thirdShiftTime.end = $event[1];
        break;
    }
  }
  getTimeFrame($event: any) {
    this.timeFrame = $event.week.weekDays;
  }
}

