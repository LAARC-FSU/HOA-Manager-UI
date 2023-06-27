import {Component } from "@angular/core";

@Component({
  selector: 'member-info-form',
  templateUrl: 'member-info-form.html'

})

export class MemberInfoForm {
  isDisabled: boolean = true;
  change(){
    this.isDisabled = !this.isDisabled;

  }
}
