import {Component, Input} from '@angular/core';
import type { OnInit } from '@angular/core';
import {propertyInfo, userInfo} from "../../interfaces";
import {MemberSearchServiceService} from "../../member-search-service.service";
import {Router} from "@angular/router";
import {PropertySearchService} from "../../property-search.service";

// class Results {
//   name:any;
//   address:any;
//   unit:any;
//   block:any;
//   lot:any;
// }
@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input('results') results: propertyInfo[] = [];
  constructor(private searchService: PropertySearchService, private router:Router) {}

  delete(e:any){
    this.searchService.delete(this.results[e]);
    this.results.splice(e, 1);
  }
  view(e:any){
    const isView = true;
    const propertyToView = JSON.stringify(this.results[e]);

    this.router.navigate(['add-property'], {
      queryParams:{
        input1: isView,
        input2: propertyToView
      }
    });
  }
}
