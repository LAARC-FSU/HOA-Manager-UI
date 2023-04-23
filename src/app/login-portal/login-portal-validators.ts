import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class LoginPortalValidators{
   static passwordMatchVerifier: ValidatorFn = (control:AbstractControl): ValidationErrors | null =>
  {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    return newPassword && confirmPassword && newPassword.value === confirmPassword.value ? { dontMatch: true } : null;
  }

  static validMemberId = (control:AbstractControl) => {
    return new Promise((resolve) => {

      if( control.value !== '1111')
        resolve( {inValidMemberId: true});
      resolve(null);
    });
  }
}
