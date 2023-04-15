import { Component } from '@angular/core';
import {fadeInOutAnimation} from "./animations";

@Component({
  animations: [fadeInOutAnimation],
  selector: 'login-portal',
  styleUrls: ['./login-portal.component.scss'],
  templateUrl: './login-portal.component.html'
})
export class LoginPortalComponent {
  private mode = Mode.login;
  private emailFound = '';
  private signedupUsers: any[] = [];

  user= {
    type: 'employee',
    email: '',
    password: ''
  };
  getMode(){
    return this.mode
  }
  getEmailFound(){
    return  this.emailFound;
  }
  toSignUp(){
    this.mode = Mode.signup;
  }
  logIn(){
    //ToDo
  }
  exit(){
  //ToDo
  }
  signUp(){
    this.mode = Mode.login
  }
  back(){
    this.mode = Mode.login
  }

  protected readonly Mode = Mode;
}

enum Mode { login, signup, forgotEmail, forgotPassword}
