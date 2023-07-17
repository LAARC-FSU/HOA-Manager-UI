import { Component } from '@angular/core';
import {CardService} from "../card.service";
import {empWorkTime} from "../interfaces";
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  cards;
  activeEmp: empWorkTime = {
    empName: 'Leandro Yabut',
    empPhotoUrl: 'assets/leandro_pic.jpg',
    empClkIn: new Date(),
    empClkOut: new Date(),
    empLunchOut: new Date(),
    empLunchIn: new Date(),
    empDayHours: [0,0,0,0,0,0,0],
    empWeekHours: 0,
  };
  constructor() {
    let service = new CardService();
    this.cards = service.getCard();
  }

  protected readonly String = String;
}
