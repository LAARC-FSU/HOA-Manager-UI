import { Component } from '@angular/core';
import {CardService} from "../member-card.service";
@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.scss']
})
export class MemberDashboardComponent {
  cards;

  constructor() {
    let service = new CardService();
    this.cards = service.getCard();
  }

  protected readonly String = String;
}
