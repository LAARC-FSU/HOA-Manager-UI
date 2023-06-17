import {Component } from "@angular/core";

@Component({
  selector: 'member-info-form',
  templateUrl: 'member-info-form.component.html',
  styleUrls: ['member-info-form.scss']
})

export class MemberInfoForm {

  isDisabled: boolean = true;
  change(){
    this.isDisabled = !this.isDisabled;

  }
}
