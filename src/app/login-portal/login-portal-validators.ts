import {AbstractControl} from "@angular/forms";

export class LoginPortalValidators{
  static passwordMatchVerifier(control: AbstractControl){
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('newPassword');
    if (newPassword?.value != confirmPassword?.value)
      return { 'noMatch': true};

    return null;
  }
}
