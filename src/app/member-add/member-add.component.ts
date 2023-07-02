import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {note, property, userInfo} from "../interfaces";
import {states} from "../interfaces";

@Component({
  selector: 'member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent {
  image: any = "assets/memberPhotoPlaceholder.svg";
  emailInitText = 'User Id';
  index: any = null;
  noteToViewIndex = 0;
  noteToView: note = {
    title: '',
    date: '',
    body: ''
  };
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
    properties: [],
    notes: []
  };
  states: string[] = states;

  constructor(private fb: FormBuilder) {
  }

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    cell: ['', Validators.required],
    homePhone: [''],
    email: ['', [Validators.required, Validators.email]]
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
  addLot(e:property){
    let propertyClone: property = {...e};
    this.memInfo.properties.push(propertyClone);
  }
  deleteNote(i:any) {
    if (this.index !== -1) {
      this.memInfo.notes.splice(i, 1);
    }
  }

  viewNote(i:any){
    if (this.index !== -1) {
      this.noteToViewIndex = i;
      this.noteToView =  this.memInfo.notes[i];
    }
  }

  eraseNoteView(){
    debugger
    this.noteToView = {
      title: '',
      date: '',
      body: ''
    }
    this.noteToViewIndex = 0;
  }

  addNote(e:note){
    if (this.noteToViewIndex !== 0){
      this.memInfo.notes[this.noteToViewIndex] = this.noteToView;
      this.eraseNoteView();

    }else{
      let noteClone: note = {...e};
      this.memInfo.notes.push(noteClone);
    }
  }

  getImage(event: any) {
    this.image = event;
  }

}
