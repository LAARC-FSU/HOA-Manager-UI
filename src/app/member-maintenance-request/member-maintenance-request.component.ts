import {Component} from "@angular/core";

class Results {
  name:any;
  phone:any;
  email:any;
}
@Component({
  selector: 'member-maintenance-request',
  templateUrl: 'member-maintenance-request.component.html',
  styleUrls: ['member-maintenance-request.component.scss']
})

export class MemberMaintenanceRequestComponent{
  checked:boolean = false;
  results: Results[] = [{name:'Alfredo Borroto', phone:'(555) 456-1987', email:'Alfredo1234@test.com'}];
  change() {
    this.checked=!this.checked;
  }
}
