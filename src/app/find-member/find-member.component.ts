import {Component} from '@angular/core';
import type { OnInit } from '@angular/core';
import {MemberSearchServiceService} from "../member-search-service.service";
import {searchQuery, userInfo} from "../interfaces";

@Component({
  selector: 'find-member',
  templateUrl: './find-member.component.html',
  styleUrls: ['./find-member.component.scss'],
})
export class FindMemberComponent implements OnInit {
  query: searchQuery = {
    firstName: "",
    lastName: "",
    id: 0,
    phone: "",
    address: ""
  }
  result: userInfo[]=[];
  constructor(private searchMember: MemberSearchServiceService) {}
  ngOnInit(): void {}

  getQuery(e:any){
    this.result = [];
    this.query = e;
    this.result = this.searchMember.getMem(this.query)

  }
  sendResult(){
    return this.result;
  }
}
