import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'employee-credentials-maker',
  templateUrl: './employee-credentials-maker.component.html',
  styleUrls: ['./employee-credentials-maker.component.scss']
})
export class EmployeeCredentialsMakerComponent {
  image: any = "assets/employeePhotoPlaceholder.svg";
  emInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cellPhone: '',
    homePhone: '',
    email: '',
    role: ''
  };
  constructor(private fb: FormBuilder) {
  }

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
    cellPhone: ['', Validators.required],
    homePhone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    memberAdminRole: ['', Validators.required],
    propertyAdminRole: ['', Validators.required],
    state: ['', Validators.required]
  });


  // Getters for form controls
  get firstName(): AbstractControl | null{
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
    return this.form.get('zipCode');
  }

  get cellPhone(): AbstractControl | null {
    return this.form.get('cellPhone');
  }

  get homePhone(): AbstractControl | null {
    return this.form.get('homePhone');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get memberAdminRole(): AbstractControl | null {
    return this.form.get('memberAdminRole');
  }

  get propertyAdminRole(): AbstractControl | null {
    return this.form.get('propertyAdminRole');
  }

  get state(): AbstractControl | null {
    return this.form.get('state');
  }

  submitForm(): void {
    if (this.form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }
    else{
      this.emInfo.firstName = this.firstName!.value;
      this.emInfo.middleName = this.middleName!.value;
      this.emInfo.lastName = this.lastName!.value;
      this.emInfo.address = this.address!.value;
      this.emInfo.city = this.city!.value;
      this.emInfo.zipCode = this.zipCode!.value;
      this.emInfo.cellPhone = this.cellPhone!.value;
      this.emInfo.homePhone = this.homePhone!.value;
      this.emInfo.email = this.email!.value;

      // this.emInfo.memberAdminRole = this.memberAdminRole!.value;
      // this.emInfo.propertyAdminRole = this.propertyAdminRole!.value;
      this.emInfo.state = this.state!.value;
    }
  }



  getImage(event: any) {
    this.image = event;
  }
}
