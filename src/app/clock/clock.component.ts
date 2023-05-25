import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  currTime: string = '';
  @Input() color: string = '';

  constructor(private timePipe: DatePipe) {
  }
  ngOnInit() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  updateTime() {
    const date = new Date();
    this.currTime = this.formatTime(date)!
  }

  formatTime(date:Date) {
    return this.timePipe.transform(date, 'h:mm:ss a');
  }
}
