import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {states} from "../interfaces";

@Component({
  selector: 'employee-credentials-maker',
  templateUrl: './employee-credentials-maker.component.html',
  styleUrls: ['./employee-credentials-maker.component.scss']
})
export class EmployeeCredentialsMakerComponent {
  image: any = "assets/employeePhotoPlaceholder.svg";
  emailInitText = 'User Id'
  // private apiUrl = 'https://graph.microsoft.com/v1.0';
  private accessToken: any = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6InBPMVllRkxrNkwxeDZKaHB5LTR4NHNzcTI3MkJhbmZCNi1MbVB0S3lwQ0UiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQvIiwiaWF0IjoxNjg4MDgwNDMxLCJuYmYiOjE2ODgwODA0MzEsImV4cCI6MTY4ODA4NDMzMSwiYWlvIjoiRTJaZ1lFZzZkSEJid0FFcFB6L3UvR3ZCamZXWEFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJIT0FfTWFuYWdlciIsImFwcGlkIjoiYTI3NDYyMzMtMjc0ZC00NTkxLThjZjUtYmNkNDgwYTBmZWQyIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDRjZWU5MmY1IiwicmgiOiIwLkFTY0NEUVNJa1dkc1cweXhFamFqQkxadHJRTUFBQUFBQUFBQXdBQUFBQUFBQUFBekFBQS4iLCJzdWIiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwNGNlZTkyZjUiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiU0EiLCJ0aWQiOiI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJ1dGkiOiJlUVpzWDFmeTdVYWg1NEtnM0NZU0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyIwOTk3YTFkMC0wZDFkLTRhY2ItYjQwOC1kNWNhNzMxMjFlOTAiXSwieG1zX3RjZHQiOjE0MzE2NDE0OTh9.RJWFfc87F8Rlgx80ANvWMdg67HJllZ5K59cNNS_jXK_kY9Zj8sW8k0UVVg-Kb9ce0Nw35p5eJ9zTG5p3foMAUQazfXFWtQ3kGVrNnWz4ihre6mzn7i_LGBXAmmgmfKN2aTcfkSxDmIBcwHlnQqpXhRM_lEaWd8c-oDoN0Avh3jVpRJBUj_MjrimRK24vQj872m7pQertQwIK9fN9Fq_Sd86dh_B0gSLJyL-Me1IJw1OJR6OS5FSTXhv1Y-6Wlh6kl8KyiRE5aBhe6GeA7_-et2OXGB1pZkyflWAEWLEiSxgaLp_oFQJQ4vV2UttvUCoVDixv36n8c-Yhjs4l6nFhMg';
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
  states: string[] = states;

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
      // this.requestAccessToken();
      this.empInfo.active = true;
    }
  }

  resetLogin(){
  //Todo
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
            "address": "aborroto1984@hotmail.com"
          }
        }
      ]
    },
      "saveToSentItems": "false"
    }


    const url = `https://graph.microsoft.com/v1.0/me/sendMail`;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${this.accessToken}`
    // });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.accessToken}`
      })
    };

    this.http.post(url, email, httpOptions).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }


}
