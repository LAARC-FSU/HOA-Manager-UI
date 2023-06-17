import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';

class Results {
  name1:any;
  name2:any;
  member:any;
  phone:any;
  address:any;
}
@Component({
  selector: 'find-member-result',
  templateUrl: './find-member-result.component.html',
  styleUrls: ['./find-member-result.component.scss'],
})
export class FindMemberResultComponent implements OnInit {
  results: Results[] = [{name1:'Ron',name2:'Robbins',member:'R100-100-100',phone:'843-986-8924',address:'30 Tierra Grande'}]
  constructor() {}
  ngOnInit(): void {}
}
