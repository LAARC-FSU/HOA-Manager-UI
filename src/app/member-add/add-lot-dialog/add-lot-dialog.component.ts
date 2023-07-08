import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {property} from "../../interfaces";
import {states} from "../../interfaces";
import {fadeAnimation} from "../../animations";


@Component({
  selector: 'add-lot-dialog',
  templateUrl: './add-lot-dialog.component.html',
  styleUrls: ['./add-lot-dialog.component.scss'],
  animations: [ fadeAnimation ]
})
export class AddLotDialogComponent {
  @Input()  viewProperty = true;
  @Output() property = new EventEmitter();
  states: string[] = states;
  formInvalid = false;
  newProperty: property = {
    address: '',
    block: '',
    lot: '',
    area: '',
    unit: ''
  }

  constructor(private fb: FormBuilder) {
  }

  lotForm: FormGroup = this.fb.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    block: [''],
    lot: [''],
    area: [''],
    unit: ['']
  });

  // Getters for form controls
  get address(): AbstractControl | null {
    return this.lotForm.get('address');
  }

  get city(): AbstractControl | null {
    return this.lotForm.get('city');
  }

  get state(): AbstractControl | null {
    return this.lotForm.get('state');
  }

  get zip(): AbstractControl | null {
    return this.lotForm.get('zip');
  }

  get block(): AbstractControl | null {
    return this.lotForm.get('block');
  }

  get lot(): AbstractControl | null {
    return this.lotForm.get('lot');
  }

  get area(): AbstractControl | null {
    return this.lotForm.get('area');
  }

  get unit(): AbstractControl | null {
    return this.lotForm.get('unit');
  }

  cancel() {
    this.lotForm.reset();
    this.lotForm.markAsUntouched();
  }

  submitForm() {
    if (!this.lotForm.invalid) {
      this.newProperty.unit = this.unit?.value;
      this.newProperty.area = this.area?.value;
      this.newProperty.block = this.block?.value;
      this.newProperty.lot = this.lot?.value;
      this.newProperty.address = `${this.address?.value}, ${this.city?.value}, ${this.state?.value}, ${this.zip?.value}`;
      this.property.emit(this.newProperty);
      this.lotForm.reset();
      this.lotForm.markAsUntouched();
    }
  }
}


