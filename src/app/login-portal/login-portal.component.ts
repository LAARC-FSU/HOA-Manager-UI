import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {fadeInOutAnimation} from "./animations";
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
    memberId: new FormControl('', [Validators.required, LoginPortalValidators.validMemberId(['1111', '2222', '3333', '4444'])]),
    newEmail: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, LoginPortalValidators.passwordMatchVerifier);

  get memberId(){return this.signUp.get('memberId');}
  get newEmail(){return this.signUp.get('newEmail');}
  get newPassword(){return this.signUp.get('newPassword');}
  get confirmPassword(){return this.signUp.get('confirmPassword');}


  forgotEmail = new FormGroup({
    memberIdForgotEmail: new  FormControl('',Validators.required),
  })
  get memberIdForgotEmail() { return this.forgotEmail.get('memberId');}

  forgotPassword = new FormGroup({
    memberIdForgotPass: new FormControl('', [Validators.required, LoginPortalValidators.validMemberId(['1111', '2222', '3333', '4444'])]),
    emailForgotPass: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    newPasswordForgotPass: new FormControl('', [Validators.required]),
    confirmPasswordForgotPass: new FormControl('', [Validators.required])
  }, LoginPortalValidators.passwordMatchVerifier);

  get memberIdForgotPass(){return this.forgotPassword.get('memberIdForgotPass');}
  get emailForgotPass(){return this.forgotPassword.get('emailForgotPass');}
  get newPasswordForgotPass(){return this.forgotPassword.get('newPasswordForgotPass');}
  get confirmPasswordForgotPass(){return this.forgotPassword.get('confirmPasswordForgotPass');}







  private mode = Mode.login;
  private dontMatch: boolean = false;

  // Testing elements----------------------------------------------------------------------------------------
  private emailFound = null;
  private userFound = false;
  private users: any[] = [];

  user= {
    memberId: '',
    email: '',
    password: ''
  };

  passwordMissmatch(){
    this.dontMatch = this.signUp.get('newPassword')?.value !== this.signUp.get('confirmPassword')?.value ||
      this.forgotPassword.get('newPasswordForgotPass')?.value !== this.forgotPassword.get('confirmPasswordForgotPass')?.value;
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
    this.formReset(this.forgotEmail);
    this.formReset(this.forgotPassword);
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
