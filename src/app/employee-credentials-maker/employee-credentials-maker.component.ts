import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'employee-credentials-maker',
  templateUrl: './employee-credentials-maker.component.html',
  styleUrls: ['./employee-credentials-maker.component.scss']
})
export class EmployeeCredentialsMakerComponent {
  image: any = "assets/employeePhotoPlaceholder.svg";
  emailInitText = 'User Id'
  private apiUrl = 'https://graph.microsoft.com/v1.0';
  private accessToken: any = 'EwCYA8l6BAAUAOyDv0l6PcCVu89kmzvqZmkWABkAAQB9V0QUmlDxSDbVLL6dzLD9acUxxAYC3ZG+0s87m07ar70RJAldmi7aQu2ekGfSxobIQUqr62wyHJzcEB6SPYZaRzQf0lCBcq73KcjCl1AXkoc7bsXqQUj6y6yas4o73w8RcXS4pqSLcd7Zf32m1uq2huQNBXfpE9denkk+9gV7/VAMFH9jVbk2hZodv6rDlGitsq9Q5asKBEiubexHQkLfcsksz6hCQgBWZITzVd1z0soFTODbMdaPNmqyua4yMqOTWKLc9X3SmV+bRMC1Ld8SxHDJjigr8oGcBqdiW0TmXU8eo9BRKjAIXRvWVje+ZN15oGR2YoMQBMxxvRgMc1QDZgAACMzykVG+E44MaALJyIgztz6Ob15zwtOxU1HOHEQof5SuO7xW3/UESW4pIAjObgp1wfvF5GyPuCbTk1h07ZmGcauCVCsDBAO4ow3Bn7Ny+WvuTxmo0i0duU01bc9MFnVuqH3zoC1HB1fNJf9UlRd4oJ7oJWf/JphwOWBuuiyyST8FIfyD8DKZ3KyTVLhXYwCO6RLv5b9zvWKssRIdU4NgGvsiLzuu3DkkOOD2Hhxq/32/krfoQBt3i3KZ1DsKICJa/o4iTqHQQMP8FaR+hoAlMnMzpO2DC/gLMzEt+aUrOXevLgGnVZMMA3cMbncflHluNd1bE2igraPe8hppY5XKgIJE0vNg+xCXrAxs0t5j3kVN+mIaRWltzQaZD8fyxwONYGLhyyCdOMMnIkduzo+eDRTYP5H0SPXZVEKPYu/q/lJBcsEb15M68oXqeHERjpoZItcDEJLE2kt6qO/+5vjydRBSJ/+bO+EDJQn45sdnexhMDqsKleLVyA9WsZ0a1JMQpJ9E3a+tiH2I6LIqZ2nK+X/gdimRWKwwfQ/zolYNBYubA1tmnK6HL4RBL8giwFOtiDNxOEnXiCgC5ZlBWiBphULEF1KwkISb2/S/UfhkzLh+y4S5PXszKvEU44hh+0AgcgUwBFunC/DqKbdRlHrJTpzNw3LA/CWL/KLrfgCmQLk2K7GdjCmfhuCVakvQ6//L9gtR6Fjxv+lyb6jkRZIoa6FQz15XEs0AExn8rVtd7EfTK3tW1omvsET4uMiR6kRcl1wCti1m3iHnSThYrhu12/l9nuJ4l2tmkUmPzfFyaqf1KOzypkOb31NOtLlfYvvgbXVsoAI=';
  empInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cellPhone: '',
    homePhone: '',
    email: this.emailInitText,
    role: 'memberAdmin',
    active: false
  };
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],
    cell: ['', Validators.required],
    homePhone: [''],
    email: ['', [Validators.required, Validators.email]],
    state: ['', Validators.required]
  });


  // Getters for form controls
  get firstName(): AbstractControl | null {
    return this.form.get('firstName');
  }

  get middleName(): AbstractControl | null {
    return this.form.get('middleName');
  }

  get lastName(): AbstractControl | null {
    return this.form.get('lastName');
  }

  get address(): AbstractControl | null {
    return this.form.get('address');
  }

  get city(): AbstractControl | null {
    return this.form.get('city');
  }

  get zipCode(): AbstractControl | null {
    return this.form.get('zip');
  }

  get cellPhone(): AbstractControl | null {
    return this.form.get('cell');
  }

  get homePhone(): AbstractControl | null {
    return this.form.get('homePhone');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }


  get state(): AbstractControl | null {
    return this.form.get('state');
  }

  submitForm(): void {
    this.requestAccessToken();
    this.sendEmail();
    // if (this.form.invalid) {
    //   alert('Please fill out all required fields.');
    //   return;
    // }
  }

  roleChange(role:string) {
    this.empInfo.role = role;
  }

  onChange() {
    this.empInfo.firstName = this.firstName!.value;
    this.empInfo.middleName = this.middleName!.value;
    this.empInfo.lastName = this.lastName!.value;
    this.empInfo.address = this.address!.value;
    this.empInfo.city = this.city!.value;
    this.empInfo.zipCode = this.zipCode!.value;
    this.empInfo.cellPhone = this.cellPhone!.value;
    this.empInfo.homePhone = this.homePhone!.value;
    this.empInfo.email = this.email!.value;
    this.empInfo.role = '';
    this.empInfo.state = this.state!.value;
  }

  createLogin() {
    if (this.empInfo.email !== this.emailInitText){
      this.sendEmail();
      this.empInfo.active = true;
    }
  }

  resetLogin(){

  }

  deactivateLogin(){
    this.empInfo.active = false;
  }

  activateLogin(){
    this.empInfo.active = true;
  }

  getImage(event: any) {
    this.image = event;
  }

  requestAccessToken(): void {
    const tokenEndpoint = 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token';

    const clientId = 'a2746233-274d-4591-8cf5-bcd480a0fed2';
    const clientSecret = 'kOa8Q~ivicI_3WWKJm-vSrqg3J1-DYrRQxhCTaOP';

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}}`;

    this.http.post(tokenEndpoint, body, { headers }).subscribe(
      (response) => {
        console.log('Access token obtained:', response);
        this.accessToken = response;
      },
      (error) => {
        console.error('Error obtaining access token:', error);
        // Handle the error
      }
    );
  }

  sendEmail() {
    const email = {
      "message": {
      "subject": "Temporary password",
        "body": {
        "contentType": "Text",
          "content": "Here is your temporary password 45et8ec9"
      },
      "toRecipients": [
        {
          "emailAddress": {
            "address": "aborroto1984@gmail.com"
          }
        }
      ],
    },
      "saveToSentItems": "false"
    }

    const url = `${this.apiUrl}/me/sendMail`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`
    });

    this.http.post(url, email, { headers }).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }


}
