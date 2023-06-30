import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {userInfo} from "../interfaces";

@Component({
  selector: 'member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent {
  image: any = "assets/memberPhotoPlaceholder.svg";
  emailInitText = 'User Id'
  index: any = null;
  memInfo: userInfo = {
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
    active: false,
    id: '000000',
    properties: [{address: 'test', area: '12', lot: '45', block: '45', unit: '2'}, {
      address: 'test2',
      area: '12',
      lot: '45',
      block: '45',
      unit: '2'
    }],
    notes: [{title: 'note1',date:'3/23/2023', body: 'this is note 1'}, {title: 'note2',date:'2/31/2023', body: 'this is note 2'}]
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

  constructor(private fb: FormBuilder) {
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

  onChange() {
    this.memInfo.firstName = this.firstName!.value;
    this.memInfo.middleName = this.middleName!.value;
    this.memInfo.lastName = this.lastName!.value;
    this.memInfo.address = this.address!.value;
    this.memInfo.city = this.city!.value;
    this.memInfo.zipCode = this.zipCode!.value;
    this.memInfo.cellPhone = this.cellPhone!.value;
    this.memInfo.homePhone = this.homePhone!.value;
    this.memInfo.email = this.email!.value;
    this.memInfo.state = this.state!.value;
  }


  deleteProperty(i:any) {
    if (this.index !== -1) {
      this.memInfo.properties.splice(i, 1);
    }
  }
  deleteNote(i:any) {
    if (this.index !== -1) {
      this.memInfo.notes.splice(i, 1);
    }
  }

  getImage(event: any) {
    this.image = event;
  }

}
