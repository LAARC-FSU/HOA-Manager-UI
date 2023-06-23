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

  sendEmail(): void {
    const accessToken = '94733815-c0ae-4adf-bb73-47013f135a88'
    const url = 'https://graph.microsoft.com/v1.0/me/sendMail';

    const email = {
      message: {
        subject: 'Hello from Angular',
        body: {
          content: 'This is the email body',
          contentType: 'Text'
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'aborroto1984@gmail.com'
            }
          }
        ]
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    });

    this.http.post(url, email, { headers }).subscribe(
      () => {
        console.log('Email sent successfully!');
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }
}
