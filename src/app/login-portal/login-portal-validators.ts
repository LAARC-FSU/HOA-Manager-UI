import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

export class LoginPortalValidators{

   static passwordMatchVerifier(field1: string, field2: string): ValidatorFn{
     return(form:AbstractControl): ValidationErrors | null =>{

       const newPassword = form.get(field1)
       const confirmPassword = form.get(field2)

       if (newPassword?.value !== confirmPassword?.value){
         const err = {noMatch: true};
         form.setErrors(err);
         return err;
       }else{
         const noMatchError = form.hasError('noMatch');
         if(noMatchError && form.errors){
           delete form.errors['noMatch'];
           form.updateValueAndValidity();
         }
       }
       return null;
     }
   }

  static validMemberId(array: string[]): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors  | null> => {

      return new Promise((resolve) => {
        setTimeout(() => {
          const id = control.value;
          if (!array.includes(id) && id !== '') {
            const err = { idNotFound: true };
            control.setErrors(err);
            resolve(err);
          } else {
            const noMatchError = control.hasError('idNotFound');
            if (control.errors) {
              delete control.errors['idNotFound'];
              control.updateValueAndValidity();
            }
            resolve(null);
          }
        }, 2000);
      });
    }
  }

}
