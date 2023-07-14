import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {note, property, userInfo} from "../interfaces";
import {states} from "../interfaces";
import {MemberSearchServiceService} from "../member-search-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit {
  @ViewChild('successModal') successModal!: ElementRef;
  image: any = "assets/memberPhotoPlaceholder.svg";
  success = true;
  emailInitText = 'User Id';
  index: any = null;
  noteToViewIndex = 0;
  noteToView: note = {
    title: '',
    date: '',
    body: ''
  };

  @Input('isView') isView = false;
  editing = false;
  @Input('memToView') memToView: userInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    active: false,
    id: '',
    properties: [],
    notes: [],
    photo: ''
  };

  ngOnInit() {
    this.route.queryParams.subscribe(inputs => {
      this.isView = inputs['input1'];
      if (inputs['input2']) {
        this.memToView = JSON.parse(inputs['input2']);
      }
    })
  }

  memInfo: userInfo = {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: this.emailInitText,
    active: false,
    id: String(this.addMember.getMemCount() + 1),
    properties: [],
    notes: [],
    photo: this.image
  };
  states: string[] = states;

  constructor(private fb: FormBuilder, private addMember: MemberSearchServiceService, private router: Router, private route: ActivatedRoute) {

  }

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    phone: ['', Validators.required],
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

  get phone(): AbstractControl | null {
    return this.form.get('phone');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get state(): AbstractControl | null {
    return this.form.get('state');
  }

  closeModal() {
    const backdrop = document.getElementsByClassName('modal-backdrop')[0];
    backdrop.setAttribute('hidden', 'true')
    this.successModal.nativeElement.style.display = 'none';

    // this.successMessage()
  }

  submitForm(): void {
    if (!this.editing) {
      this.updateImg();
      if (this.form.valid) {
        if (this.addMember.storeMem(this.memInfo)) {
          this.successMessage();
          setTimeout(() => {
            // const modal = this.successModal.nativeElement;
            // console.log(this.successModal?.nativeElement)
            this.closeModal()
            this.router.navigateByUrl('main-dashboard');
          }, 1000);
        }
      }
    } else {
      if (this.form.valid) {
        this.isEditing();
        this.memToView.firstName = this.firstName!.value;
        this.memToView.middleName = this.middleName!.value;
        this.memToView.lastName = this.lastName!.value;
        this.memToView.address = this.address!.value;
        this.memToView.city = this.city!.value;
        this.memToView.zipCode = this.zipCode!.value;
        this.memToView.phone = this.phone!.value;
        this.memToView.email = this.email!.value;
        this.memToView.state = this.state!.value;
        this.memToView.photo = this.image;
        this.addMember.storeMem(this.memToView);
        setTimeout(() => {
          // const modal = this.successModal.nativeElement;
          // console.log(this.successModal?.nativeElement)
          this.closeModal()
        }, 1000);
      }
    }

  }

  successMessage() {
    this.success = !this.success;
  }

  onChange() {
    this.memInfo.firstName = this.firstName!.value;
    this.memInfo.middleName = this.middleName!.value;
    this.memInfo.lastName = this.lastName!.value;
    this.memInfo.address = this.address!.value;
    this.memInfo.city = this.city!.value;
    this.memInfo.zipCode = this.zipCode!.value;
    this.memInfo.phone = this.phone!.value;
    this.memInfo.email = this.email!.value;
    this.memInfo.state = this.state!.value;
  }


  deleteProperty(i: any) {
    if (!this.editing) {
      if (this.index !== -1) {
        this.memInfo.properties.splice(i, 1);
      }
    } else {
      if (this.index !== -1) {
        this.memToView.properties.splice(i, 1);
      }
    }
  }

  addLot(e: property) {
    if (!this.editing) {
      let propertyClone: property = {...e};
      this.memInfo.properties.push(propertyClone);
    } else {
      let propertyClone: property = {...e};
      this.memToView.properties.push(propertyClone);
    }
  }

  deleteNote(i: any) {
    if (!this.isView) {
      if (this.index !== -1) {
        this.memInfo.notes.splice(i, 1);
      }
    } else {
      if (this.index !== -1) {
        this.memToView.notes.splice(i, 1);
      }
    }

  }

  viewNote(i: any) {
    if (!this.isView) {
      if (this.index !== -1) {
        this.noteToViewIndex = i;
        this.noteToView = this.memInfo.notes[i];
      }
    } else {
      if (this.index !== -1) {
        this.noteToViewIndex = i;
        this.noteToView = this.memToView.notes[i];
      }
    }

  }

  eraseNoteView() {
    this.noteToView = {
      title: '',
      date: '',
      body: ''
    }
    this.noteToViewIndex = 0;
  }

  addNote(e: note) {
    if (this.editing || this.isView) {
      if (this.noteToViewIndex !== 0) {
        this.memToView.notes[this.noteToViewIndex] = this.noteToView;
        this.eraseNoteView();

      } else {
        let noteClone: note = {...e};
        this.memToView.notes.push(noteClone);
      }
    } else {
      if (this.noteToViewIndex !== 0) {
        this.memInfo.notes[this.noteToViewIndex] = this.noteToView;
        this.eraseNoteView();

      } else {
        let noteClone: note = {...e};
        this.memInfo.notes.push(noteClone);
      }

    }

  }

  updateImg() {
    this.memInfo.photo = this.image;
  }

  getImage(event: any) {
    if (!this.isView) {
      this.image = event;
    } else {
      this.memToView.photo = event;
    }

  }

  isEditing() {
    this.isView = !this.isView;
    this.editing = !this.editing;

    if (this.editing) {
      this.firstName!.setValue(this.memToView.firstName);
      this.middleName!.setValue(this.memToView.middleName);
      this.lastName!.setValue(this.memToView.lastName);
      this.address!.setValue(this.memToView.address);
      this.city!.setValue(this.memToView.city);
      this.zipCode!.setValue(this.memToView.zipCode);
      this.phone!.setValue(this.memToView.phone);
      this.email!.setValue(this.memToView.email);
      this.state!.setValue(this.memToView.state);
      this.image = this.memToView.photo;
    }


  }

}
