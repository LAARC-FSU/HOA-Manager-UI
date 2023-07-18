import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import type { OnInit } from '@angular/core';
import {note, property, propertyInfo, states, userInfo} from "../interfaces";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MemberSearchServiceService} from "../member-search-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertySearchService} from "../property-search.service";
@Component({
  selector: 'add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})


export class AddPropertyComponent implements OnInit {

  @ViewChild('successModal') successModal!: ElementRef;
  image: any = 'assets/location_color.png';
  success = true;
  emailInitText = 'User Id';
  unitsArea = ['Acres', 'SqrFt']
  unitsLength = ['Miles', 'Feet']
  index: any = null;
  noteToViewIndex = 0;
  noteToView: note = {
    title: '',
    date: '',
    body: ''
  };

  @Input('isView') isView = false;
  editing = false;
  @Input('propertyToView') propertyToView: propertyInfo = {
    id: 0,
    address: '',
    lotArea: '',
    lotFrontage: '',
    lotDepth: '',
    subdivision: '',
    block: '',
    zoning: '',
    zoningMap: '',
    numOfBuildings: '',
    numOfFloors: '',
    unit: '',
    lot: '',
    notes: [],
    photo: this.image
  };

  ngOnInit() {
    this.route.queryParams.subscribe(inputs => {
      this.isView = inputs['input1'];
      if (inputs['input2']) {
        this.propertyToView = JSON.parse(inputs['input2']);
      }
    })
  }

  propertyInfo: propertyInfo = {
    id: this.addProperty.getPropertyCount() + 1,
    address: '',
    lotArea: '',
    lotFrontage: '',
    lotDepth: '',
    subdivision: '',
    block: '',
    zoning: '',
    zoningMap: '',
    numOfBuildings: '',
    numOfFloors: '',
    unit: '',
    lot: '',
    notes: [],
    photo: this.image
  };
  states: string[] = states;

  constructor(private fb: FormBuilder, private addProperty: PropertySearchService, private router: Router, private route: ActivatedRoute) {

  }

  form: FormGroup = this.fb.group({
    address: ['', Validators.required],
    lotArea: [''],
    lotAreaUnit: [''],
    lotFrontage: [''],
    lotFrontageUnit: [''],
    lotDepth: [''],
    lotDepthUnit: [''],
    subdivision: [''],
    block: [''],
    zoning: [''],
    zoningMap: [''],
    numOfBuildings: [''],
    numOfFloors: [''],
    unit: [''],
    lot: [''],

  });


  // Getters for form controls
  get address(): AbstractControl | null {
    return this.form.get('address');
  }

  get lotArea(): AbstractControl | null {
    return this.form.get('lotArea');
  }
  get lotAreaUnit(): AbstractControl | null {
    return this.form.get('lotAreaUnit');
  }

  get lotFrontage(): AbstractControl | null {
    return this.form.get('lotFrontage');
  }
  get lotFrontageUnit(): AbstractControl | null {
    return this.form.get('lotFrontageUnit');
  }
  get lotDepth(): AbstractControl | null {
    return this.form.get('lotDepth');
  }
  get lotDepthUnit(): AbstractControl | null {
    return this.form.get('lotDepthUnit');
  }
  get subdivision(): AbstractControl | null {
    return this.form.get('subdivision');
  }
  get block(): AbstractControl | null {
    return this.form.get('block');
  }
  get zoning(): AbstractControl | null {
    return this.form.get('zoning');
  }
  get zoningMap(): AbstractControl | null {
    return this.form.get('zoningMap');
  }
  get numOfBuildings(): AbstractControl | null {
    return this.form.get('numOfBuildings');
  }
  get numOfFloors(): AbstractControl | null {
    return this.form.get('numOfFloors');
  }
  get unit(): AbstractControl | null {
    return this.form.get('unit');
  }
  get lot(): AbstractControl | null {
    return this.form.get('lot');
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
        if (this.addProperty.storeProperty(this.propertyInfo)) {
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
        this.propertyToView.address = this.address!.value;
        this.propertyToView.lotArea = `${this.lotArea!.value} ${this.lotAreaUnit!.value}`;
        this.propertyToView.lotFrontage = `${this.lotFrontage!.value} ${this.lotFrontageUnit!.value}`;
        this.propertyToView.lotDepth = `${this.lotDepth!.value} ${this.lotDepth!.value}`;
        this.propertyToView.subdivision = this.subdivision!.value;
        this.propertyToView.block = this.block!.value;
        this.propertyToView.zoning = this.zoning!.value;
        this.propertyToView.zoningMap = this.zoningMap!.value;
        this.propertyToView.numOfBuildings = this.numOfBuildings!.value;
        this.propertyToView.numOfFloors = this.numOfFloors!.value;
        this.propertyToView.unit = this.unit!.value;
        this.propertyToView.lot = this.lot!.value;
        this.propertyToView.photo = this.image;
        this.addProperty.storeProperty(this.propertyToView);
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
    this.propertyInfo.address = this.address!.value;
    this.propertyInfo.lotArea = `${this.lotArea!.value} ${this.lotAreaUnit!.value}`;
    this.propertyInfo.lotFrontage = `${this.lotFrontage!.value} ${this.lotFrontageUnit!.value}`;
    this.propertyInfo.lotDepth = `${this.lotDepth!.value} ${this.lotDepth!.value}`;
    this.propertyInfo.subdivision = this.subdivision!.value;
    this.propertyInfo.block = this.block!.value;
    this.propertyInfo.zoning = this.zoning!.value;
    this.propertyInfo.zoningMap = this.zoningMap!.value;
    this.propertyInfo.numOfBuildings = this.numOfBuildings!.value;
    this.propertyInfo.numOfFloors = this.numOfFloors!.value;
    this.propertyInfo.unit = this.unit!.value;
    this.propertyInfo.lot = this.lot!.value;
  }


  deleteNote(i: any) {
    debugger
    if (!this.isView) {
      if (this.index !== -1) {
        this.propertyInfo.notes.splice(i, 1);
      }
    } else {
      if (this.index !== -1) {
        this.propertyToView.notes.splice(i, 1);
      }
    }

  }

  viewNote(i: any) {
    if (!this.isView) {
      if (this.index !== -1) {
        this.noteToViewIndex = i;
        this.noteToView = this.propertyInfo.notes[i];
      }
    } else {
      if (this.index !== -1) {
        this.noteToViewIndex = i;
        this.noteToView = this.propertyToView.notes[i];
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
        this.propertyToView.notes[this.noteToViewIndex] = this.noteToView;
        this.eraseNoteView();

      } else {
        let noteClone: note = {...e};
        this.propertyToView.notes.push(noteClone);
      }
    } else {
      if (this.noteToViewIndex !== 0) {
        this.propertyInfo.notes[this.noteToViewIndex] = this.noteToView;
        this.eraseNoteView();

      } else {
        let noteClone: note = {...e};
        this.propertyInfo.notes.push(noteClone);
      }

    }

  }

  updateImg() {
    this.propertyInfo.photo = this.image;
  }

  getImage(event: any) {
    if (!this.isView) {
      this.image = event;
    } else {
      this.propertyToView.photo = event;
    }

  }

  isEditing() {
    this.isView = !this.isView;
    this.editing = !this.editing;

    if (this.editing) {
      this.address!.setValue(this.propertyToView.address);
      this.lotArea!.setValue(this.propertyToView.lotArea);
      this.lotAreaUnit!.setValue(this.propertyToView.lotArea.split(' ')[1]);
      this.lotFrontage!.setValue(this.propertyToView.lotFrontage);
      this.lotFrontage!.setValue(this.propertyToView.lotFrontage.split(' ')[1]);
      this.lotDepth!.setValue(this.propertyToView.lotDepth);
      this.lotDepth!.setValue(this.propertyToView.lotDepth.split(' ')[1]);
      this.subdivision!.setValue(this.propertyToView.subdivision);
      this.block!.setValue(this.propertyToView.block);
      this.zoning!.setValue(this.propertyToView.zoning);
      this.zoningMap!.setValue(this.propertyToView.zoningMap);
      this.numOfBuildings!.setValue(this.propertyToView.numOfBuildings);
      this.numOfFloors!.setValue(this.propertyToView.numOfFloors);
      this.unit!.setValue(this.propertyToView.unit);
      this.lot!.setValue(this.propertyToView.lot);
      this.image = this.propertyToView.photo;
    }


  }

}
