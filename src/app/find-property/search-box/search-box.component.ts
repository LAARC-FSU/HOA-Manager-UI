import {Component, EventEmitter, Output} from '@angular/core';
import type { OnInit } from '@angular/core';
import {searchQuery, searchQueryProperty} from "../../interfaces";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {fadeAnimation} from "../../animations";

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  animations: [ fadeAnimation ]
})
export class SearchBoxComponent implements OnInit {
  @Output('searchTarget') searchTarget = new EventEmitter<searchQueryProperty>
  invalidSearch = false;

  query: searchQueryProperty = {
    address: '',
    lot: '',
    block: '',
    unit: '',
    numOfBuildings: ''
  }
  constructor(private fb: FormBuilder) {}

  propertySearch: FormGroup = this.fb.group({
    lot: [''],
    block: [''],
    unit: [''],
    numberOfBuildings: [''],
    address: ['']
  });

  get address(): AbstractControl | null {
    return this.propertySearch.get('address');
  }
  get lot(): AbstractControl | null {
    return this.propertySearch.get('lot');
  }
  get block(): AbstractControl | null {
    return this.propertySearch.get('block');
  }
  get unit(): AbstractControl | null {
    return this.propertySearch.get('unit');
  }
  get numberOfBuildings(): AbstractControl | null {
    return this.propertySearch.get('numberOfBuildings');
  }
  search(){
    debugger
    if (
      this.lot?.value === '' &&
      this.block?.value === '' &&
      this.unit?.value === '' &&
      this.numberOfBuildings?.value === '' &&
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
    this.query.lot = this.lot!.value;
    this.query.unit = this.unit!.value;
    this.query.address = this.address!.value;
    this.query.block = this.block!.value;
    this.query.numOfBuildings = this.numberOfBuildings!.value;
  }
  ngOnInit(): void {}
}
