import { Component } from '@angular/core';
import {CardService} from "../card.service";
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent {
  cards;

  constructor() {
    let service = new CardService();
    this.cards = service.getCard();
  }

  protected readonly String = String;
}
