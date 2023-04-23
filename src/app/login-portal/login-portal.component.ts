import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  AsyncValidatorFn
} from '@angular/forms';
import {fadeInOutAnimation} from "./animations";
import {Observable, of} from "rxjs";
import {LoginPortalValidators} from "./login-portal-validators";


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
    memberId: new FormControl('', [Validators.required, LoginPortalValidators.validMemberId]),
    newEmail: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, LoginPortalValidators.passwordMatchVerifier);

  get memberId(){return this.signUp.get('memberId');}
  get newEmail(){return this.signUp.get('newEmail');}
  get newPassword(){return this.signUp.get('newPassword');}
  get confirmPassword(){return this.signUp.get('confirmPassword');}

  private mode = Mode.login;
  private dontMatch: boolean = false;

  // Testing elements----------------------------------------------------------------------------------------
  private emailFound = '';
  private userFound = false;
  private users: any[] = [];

  user= {
    memberId: '',
    email: '',
    password: ''
  };

  passwordMissmatch(){
    this.dontMatch = this.signUp.get('newPassword')?.value !== this.signUp.get('confirmPassword')?.value;
  }
  getMatchingValidator(){
    return this.dontMatch
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
    this.formReset(this.signUp);
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
    this.dontMatch = false;
  }
  log(x:any){
    console.log(x);
  }

  protected readonly Mode = Mode;
}

enum Mode { login, signup, forgotEmail, forgotPassword}
