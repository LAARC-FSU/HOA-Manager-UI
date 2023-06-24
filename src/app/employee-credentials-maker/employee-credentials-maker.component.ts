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
  private accessToken: any = "EwCYA8l6BAAUAOyDv0l6PcCVu89kmzvqZmkWABkAATWa2wWCZKX36ew7lgLZN0FLC+0A9JpRnzvYz+lbFvWn/dewwHlgwFqX0bANI/AWpGdr8kmhJmiIzjRt18lTQAuSQtRuwoLbnsk7ZDbZUq7Pqmli00rR3t0zL6JNHXxVuygojQSc7phBTk1Qf6Fd0eu4HDVnp5EcH3f+jOCrgDNr8vTlEpb9XLvzMkxdY1ZwK4s3Zb5NmVQ5mVEW3WQ+37YZTADgfR3ALeheKe9cthrkRWRbgxuSI1lTr2WwLEI9/hVwATbSzGSf3QaAYrQoMoOX9z6iA9bOfnPXaOEr1Ahf0PRa1nOuBzM+5BgZahUV2QpBr4fQ75DuETq4LqPNllsDZgAACNexTkC0le5QaAIb43BysoEARtrBmcFWdT8EGqgjMyzBvQXvKt0dhRBcU0nM91pQwfBpKc7cmu4ccegyUXs19NBAPpDueIZ1ia9B65F1al/UCqh/c1At3CKSAWl3Yuo6blBD4NIo2kDmpkFB/kDvfF28+0+muKLgujm5MMB97BbVlqtDupv1oFcw6ixHZ5aL7Grl9Gy+M68PHYR1NHoUsJqc6uk0Yt2HmcrwRLXIP3qcKrNMnl8Kdivx5bEcH9s4y0eNOYxgBtvzYcN67/5McxhrnU6O477HQQ+syKc7rL4Yg2h5XeD5syKPndkdgMJp8Fp59gRvTPbbSl6Qk4bh9S9vLHy0/cBt5ds/s2cwWCZH61TxtQiESMhS2Y9gHgiLGDJjtLJI0iEMMEaN/YDK24VYnpkgEVEvyZSlGRougpH5XSr6V7sLXjbg9B0N9/BLyOzep2OcJcQHdR/H4heiQOUwdWFNNF0MlJe3VXkJooi8VB0WPzIPrbopMMeIH3+9TGFijo+f6CLi33/itRVH/Py0JKT592W2p9qInJWGou6eOhTJbpfepnB4p8c1GZfPDuufd/D/+bpOM091FAeLcn3Ak7BtSuD5m5DlgmW+NiYRLVUBMRhSdkfQzTxdqr7C3Q5btjJizLb3pwzvXQMt1C9Vt3uQJi5DR27SMBKoiO8BeSHb+7p6RFSOPgtqzawSAcSZecJlMVWMb8x0RillZrtwPVfo7HT8gAHsMeL25HAV959XTavkxLB84s8MtQXr+uVGlPGVRhrk1xv5vKU4K6IGNIr+vwbwE5Pc2CVhPPb2dSZJteLoS5DkUg6u2qME35W2oAI="
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
      ]
    },
      "saveToSentItems": "false"
    }


    const url = `https://graph.microsoft.com/v1.0/me/sendMail`;
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
