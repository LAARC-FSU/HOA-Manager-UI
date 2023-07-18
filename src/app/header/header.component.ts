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
  this.router.navigateByUrl('main-dashboard')
}
clearEmpTime(){
    localStorage.removeItem('currEmp');
    localStorage.removeItem('clockInOutState');
    localStorage.removeItem('timeStamps');
}
}
