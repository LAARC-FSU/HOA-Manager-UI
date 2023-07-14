import {Component, Input} from '@angular/core';
import {MemberSearchServiceService} from "../../member-search-service.service";
import {userInfo} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'find-member-result',
  templateUrl: './find-member-result.component.html',
  styleUrls: ['./find-member-result.component.scss'],
})
export class FindMemberResultComponent {
  @Input('results') results: userInfo[] = [];
  constructor(private searchService: MemberSearchServiceService, private router:Router) {}

  delete(e:any){
    this.searchService.delete(this.results[e]);
    this.results.splice(e, 1);
  }
  view(e:any){
    const isView = true;
    const memToView = JSON.stringify(this.results[e]);

    this.router.navigate(['add-member'], {
      queryParams:{
        input1: isView,
        input2: memToView
      }
    });
  }
}


