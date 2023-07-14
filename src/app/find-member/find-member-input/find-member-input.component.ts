import {Component, EventEmitter, Output} from '@angular/core';
import type { OnInit } from '@angular/core';
import { searchQuery } from "../../interfaces";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {fadeAnimation} from "../../animations";

@Component({
  selector: 'find-member-input',
  templateUrl: './find-member-input.component.html',
  styleUrls: [ './find-member-input.component.scss'],
  animations: [ fadeAnimation ]
})
export class FindMemberInputComponent implements OnInit {
@Output('searchTarget') searchTarget = new EventEmitter<searchQuery>
 invalidSearch = false;

  query: searchQuery = {
    firstName: "",
    lastName: "",
    id: 0,
    phone: "",
    address: ""
    }
  constructor(private fb: FormBuilder) {}

  memSearch: FormGroup = this.fb.group({
    firstName: ['', Validators.required, Validators.name],
    lastName: ['', Validators.required, Validators.name],
    id: ['', Validators.required, Validators.min(1)],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  });

  get firstName(): AbstractControl | null {
    return this.memSearch.get('firstName');
  }
  get lastName(): AbstractControl | null {
    return this.memSearch.get('lastName');
  }
  get id(): AbstractControl | null {
    return this.memSearch.get('id');
  }
  get phone(): AbstractControl | null {
    return this.memSearch.get('phone');
  }
  get address(): AbstractControl | null {
    return this.memSearch.get('address');
  }
  search(){
    if (
      this.firstName?.value === '' &&
      this.lastName?.value === '' &&
      this.id?.value === 0 &&
      this.phone?.value === '' &&
      this.address?.value === ''

    ){
      this.invalidSearch = true;
      setTimeout(()=> {
        this.invalidSearch = false;
      }, 4000)

    }else{
      this.searchTarget.emit(this.query)
    }
  }
  onChange() {
    this.query.firstName = this.firstName!.value;
    this.query.lastName = this.lastName!.value;
    this.query.address = this.address!.value;
    this.query.phone = this.phone!.value;
    this.query.id = this.id!.value;
  }
  ngOnInit(): void {}
}
