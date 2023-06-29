import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {fadeInOutAnimation} from "./animations";
import {LoginPortalValidators} from "./login-portal-validators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JWT} from "../interfaces";
import jwtDecode from "jwt-decode";
import {Router} from "@angular/router";


@Component({
  animations: [fadeInOutAnimation],
  selector: 'login-portal',
  styleUrls: ['./login-portal.component.scss'],
  templateUrl: './login-portal.component.html'
})
export class LoginPortalComponent {
  // Testing elements----------------------------------------------------------------------------------------
  validIds: string[] = ['1111','2222','3333','44444']
  private emailFound = null;
  private userFound = false;
  private users: any[] = [];

  user = {
    memberId: '',
    email: '',
    password: ''
  };

  jwtAccess = {
    iat: '',
    role: '',
    subject: ''
  };

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    password: new FormControl('', [Validators.required])
  })
  get email() { return this.login.get('email');}
  get password() {return this.login.get('password');}


  public postJsonValue: any;
  constructor(private http: HttpClient, private router: Router){

  }



  postUser(){
    const user = this.login.value;

    let body = {
      username: user.email,
      password: user.password
    }

    //let formObj = JSON.stringify(this.login);
    //let serializedForm = JSON.stringify((formObj));


    console.log("It works");

    this.http.post<JWT>('http://3.136.16.135:8080/login', body).subscribe((data) => {
      console.log(data);

      localStorage.setItem("token", data.token);

        if(localStorage.getItem("token")){
          this.jwtAccess = jwtDecode(data.token);
          localStorage.setItem("username", this.jwtAccess.subject);
          if(this.jwtAccess.role == "ADMINISTRATOR" || this.jwtAccess.role == "EMPLOYEE"){
            this.router.navigate(["/main-dashboard"]);
          }
          else if(this.jwtAccess.role == "MEMBER"){
            this.router.navigate(["/member-dashboard"]);
          }
        }


    }
    );


  }

  signUp = new FormGroup({
    memberId: new FormControl('', [Validators.required], [LoginPortalValidators.validMemberId(this.validIds)]),
    newEmail: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, LoginPortalValidators.passwordMatchVerifier('newPassword', 'confirmPassword'));

  get memberId(){return this.signUp.get('memberId');}
  get newEmail(){return this.signUp.get('newEmail');}
  get newPassword(){return this.signUp.get('newPassword');}
  get confirmPassword(){return this.signUp.get('confirmPassword');}


  forgotEmail = new FormGroup({
    memberIdForgotEmail: new FormControl('', [Validators.required], [LoginPortalValidators.validMemberId(this.validIds)]),
  })
  get memberIdForgotEmail() { return this.forgotEmail.get('memberIdForgotEmail');}

  forgotPassword = new FormGroup({
    memberIdForgotPass: new FormControl('', [Validators.required], [LoginPortalValidators.validMemberId(this.validIds)]),
    emailForgotPass: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    newPasswordForgotPass: new FormControl('', [Validators.required]),
    confirmPasswordForgotPass: new FormControl('', [Validators.required])
  }, LoginPortalValidators.passwordMatchVerifier('newPasswordForgotPass', 'confirmPasswordForgotPass'));

  get memberIdForgotPass(){return this.forgotPassword.get('memberIdForgotPass');}
  get emailForgotPass(){return this.forgotPassword.get('emailForgotPass');}
  get newPasswordForgotPass(){return this.forgotPassword.get('newPasswordForgotPass');}
  get confirmPasswordForgotPass(){return this.forgotPassword.get('confirmPasswordForgotPass');}







  private mode = Mode.login;
  private dontMatch: boolean = false;


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
  back(){
    this.clearUser()
    this.mode = Mode.login;
    this.formReset(this.forgotEmail);
    this.formReset(this.forgotPassword);
    this.formReset(this.signUp);
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

  // testing functions
  findEmail(){
    for( let user of this.users) {
      if (user.id == this.user.memberId) {
        this.emailFound = user.email;
      }
    }
  }
  signUpUser(){
    // this.user.email = this.newEmail!?.value;
    // this.user.memberId = <string>this.memberId?.value;
    // this.user.password = <string>this.newPassword?.value;
    // this.users.push(this.user);
    // this.clearUser();
    // this.log(this.users[0]);
    this.mode = Mode.login;
  }
  clearUser(){
    this.user.memberId = '';
    this.user.email = '';
    this.user.password = '';
  }

  protected readonly Mode = Mode;
}

enum Mode { login, signup, forgotEmail, forgotPassword}
