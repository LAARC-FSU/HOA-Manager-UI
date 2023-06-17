import { Component } from '@angular/core';

@Component({
  selector: 'employee-credentials-maker',
  templateUrl: './employee-credentials-maker.component.html',
  styleUrls: ['./employee-credentials-maker.component.scss']
})
export class EmployeeCredentialsMakerComponent {
image: any = "assets/employeePhotoPlaceholder.svg";
getImage(event:any){
  this.image = event;
}
}
