import { Component } from '@angular/core';

@Component({
  selector: 'login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent {
  mode = Mode.signup;
  signedupUsers: any[] = [];

  user= {
    type: 'employee',
    email: '',
    password: ''
  };
  submit(){

  }
  exit(){

  }

  protected readonly Mode = Mode;
}

enum Mode { login, signup, forgotEmail, forgotPassword};
