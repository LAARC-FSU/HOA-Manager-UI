import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Observable, of} from "rxjs";

export class LoginPortalValidators{

   static passwordMatchVerifier: ValidatorFn = (control:AbstractControl): ValidationErrors | null =>
  {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    return newPassword && confirmPassword && newPassword.value === confirmPassword.value ? { dontMatch: true } : null;
  }

  // static validMemberId: ValidatorFn = (control:AbstractControl): ValidationErrors | null =>
  // {
  //   let idPool = ['1111', '2222', '3333', '4444'];
  //   const memberId = control.get('memberId');
  //   for (let id in idPool){
  //     if (memberId?.value === id)
  //       return({idFound: true})
  //   }
  //   return(null);
  // }
  // static validMemberId(): ValidatorFn {
  //    return (control: AbstractControl): {[key: string]: any} | null =>{
  //      const value = control.value;
  //      let idPool = ['1111', '2222', '3333', '4444'];
  //      for (let id in idPool){
  //            if (value === id)
  //              console.log('found');
  //              return null;
  //          }
  //          return {invalidId: true};
  //    }
  // }






  static validMemberId(array: string[]): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      const value = control.value;
      if (!value || array.indexOf(value) === -1) {
        return of(null);
      }
      return of({ 'valueInArray': true });
    };
  }

  // idPool = ['1111', '2222', '3333', '4444'];
  // static   = (control: AbstractControl) => {
  //   return new Promise((resolve) => {
  //     setTimeout(()=> {
  //       for (let id in ['1111', '2222', '3333', '4444']){
  //         if (id === control.value)
  //           resolve( null)
  //       }
  //       resolve({invalidId: true})
  //     }, 2000);
  //   });
  // }
}
