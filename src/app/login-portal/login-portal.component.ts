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
  private userFound = false;
  private users: any[] = [];

  user= {
    memberId: '',
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
    this.clearUser();
    this.mode = Mode.signup;
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
    for( let user of this.users) {
      if (user.email == this.user.email && user.password == this.user.password) {
        this.userFound = true;
      }
    }
  }
  exit(){
  //ToDo
  }
  signUp(){
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
  protected readonly Mode = Mode;
}

enum Mode { login, signup, forgotEmail, forgotPassword}
