import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {fadeInOutAnimation} from "./animations";


@Component({
  animations: [fadeInOutAnimation],
  selector: 'login-portal',
  styleUrls: ['./login-portal.component.scss'],
  templateUrl: './login-portal.component.html'
})
export class LoginPortalComponent {


  login = new FormGroup({
    email: new  FormControl('',[Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    password: new FormControl('',[Validators.required])
  })
  get email() { return this.login.get('email');}
  get password() {return this.login.get('password');}





  signUp = new FormGroup({
    memberId: new FormControl('', Validators.required),
    newEmail: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  // passwordMatchVerifier(form: FormGroup){
  //   return form.get('newPassword')?.value === form.get('confirmPassword')?.value ? null : {'missMatch':true};
  // }





  get memberId(){return this.signUp.get('memberId');}
  get newEmail(){return this.signUp.get('newEmail');}
  get newPassword(){return this.signUp.get('newPassword');}
  get confirmPassword(){return this.signUp.get('confirmPassword');}

  private mode = Mode.login;
  private emailFound = '';
  private userFound = false;
  private users: any[] = [];
  dontMatch: boolean = true;

  user= {
    memberId: '',
    email: '',
    password: ''
  };
  passwordMissmatch(){
    if (this.signUp.get('newPassword') !== this.signUp.get('confirmPassword'))
      this.dontMatch = true;
    this.dontMatch = false;
  }
  getMode(){
    return this.mode
  }
  getEmailFound(){
    return  this.emailFound;
  }
  toSignUp(){
    this.mode = Mode.signup;
    this.formReset(this.login);
  }
  toForgotEmail(){
    this.clearUser()
    this.mode = Mode.forgotEmail;
  }
  toForgotPassword(){
    this.clearUser();
    this.mode = Mode.forgotPassword;
  }
  signIn(){
    this.login.setErrors({
      invalidLogin: true
    });
  }
  exit(){
  //ToDo
  }
  signUpUser(){
    this.users.push(this.user);
    this.clearUser();
  }
  back(){
    this.clearUser()
    this.mode = Mode.login;
  }
  clearUser(){
    this.user.memberId = '';
    this.user.email = '';
    this.user.password = '';
  }
  findEmail(){
    for( let user of this.users) {
      if (user.id == this.user.memberId) {
        this.emailFound = user.email;
      }
    }
  }

  formReset(form:FormGroup){
    form.markAsUntouched();
    form.setErrors(null, { emitEvent: false });
    form.reset();
  }
  log(x:any){console.log(x);}

  protected readonly Mode = Mode;
}

enum Mode { login, signup, forgotEmail, forgotPassword}
