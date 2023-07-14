import {Component, Input} from '@angular/core';
import {MemberSearchServiceService} from "../../member-search-service.service";
import {userInfo} from "../../interfaces";

@Component({
  selector: 'find-member-result',
  templateUrl: './find-member-result.component.html',
  styleUrls: ['./find-member-result.component.scss'],
})
export class FindMemberResultComponent {
  @Input('results') results: userInfo[] = [];
  constructor(private searchService: MemberSearchServiceService) {}

  delete(e:any){
    this.searchService.delete(this.results[e]);
    this.results.splice(e, 1);
  }

}


