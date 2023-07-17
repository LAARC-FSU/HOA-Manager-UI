import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  today = Date.now();
  constructor(private router:Router) {
  }
backToDash(){
    debugger
  this.router.navigateByUrl('main-dashboard')
}
}
