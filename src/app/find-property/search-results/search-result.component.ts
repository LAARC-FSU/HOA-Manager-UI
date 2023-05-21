import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';

class Results {
  name:any;
  address:any;
  unit:any;
  block:any;
  lot:any;
}
@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  results: Results[] = [{name:'Ron Robbins', address:'30 Tierra Grande', unit:'22', block:'2', lot:'17'}];
  constructor() {}
  ngOnInit(): void {}
}
