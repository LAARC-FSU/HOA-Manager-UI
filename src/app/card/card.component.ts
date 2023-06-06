import { Component } from '@angular/core';
import * as child_process from "child_process";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  headerIsVisible= true;
  subheaderIsVisible = true;

}
