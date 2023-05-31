import { Component} from "@angular/core";

class Results {
  unit:any;
  block:any;
  lot:any;
  acres:any;
}
@Component({
  selector: 'member-view-property',
  templateUrl: 'member-view-property.component.html',
  styleUrls: ['member-view-property.component.scss']
})

export class MemberViewPropertyComponent {
  results: Results[] = [{unit:'22', block:'2', lot:'17', acres:'23.4'}];
}
