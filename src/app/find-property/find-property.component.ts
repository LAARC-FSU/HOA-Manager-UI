import {Component, Input} from '@angular/core';
import type { OnInit } from '@angular/core';
import {propertyInfo, searchQuery, searchQueryProperty, userInfo} from "../interfaces";
import {MemberSearchServiceService} from "../member-search-service.service";
import {Router} from "@angular/router";
import {PropertySearchService} from "../property-search.service";

/* @figmaId 167:5669 */
@Component({
  selector: 'find-property',
  templateUrl: './find-property.component.html',
  styleUrls: ['./find-property.component.scss'],
})
export class FindPropertyComponent {
  query: searchQueryProperty = {
    address: "",
    lot: "",
    unit: '',
    block: "",
    numOfBuildings: ""
  }
  result: propertyInfo[]=[];
  constructor(private searchProperty: PropertySearchService) {}
  ngOnInit(): void {}

  getQuery(e:any){
    this.result = [];
    this.query = e;
    this.result = this.searchProperty.getMem(this.query)

  }
  sendResult(){
    return this.result;
  }
}
