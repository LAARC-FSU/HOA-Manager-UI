import {Component } from "@angular/core";

@Component({
  selector: 'input-form-mem',
  templateUrl: 'member-info-form.component.html',
  styleUrls: ['member-info-form.component.scss']
})

export class MemberInfoFormComponent {

  isDisabled: boolean = true;
  change(){
    this.isDisabled = !this.isDisabled;

  }
}
