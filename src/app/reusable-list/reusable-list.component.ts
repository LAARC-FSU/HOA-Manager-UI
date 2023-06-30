import {Component, Input} from '@angular/core';

@Component({
  selector: 'reusable-list',
  templateUrl: './reusable-list.component.html',
  styleUrls: ['./reusable-list.component.scss']
})
export class ReusableListComponent {
  @Input() height = 0; // optional
  @Input() width = 0; // optional
  @Input() isMarkup = false; //optional
  @Input() items: any[] = [];
  @Input() itemsPerPage = 0; // after the first page, the number of items you can fit on a page
  @Input() initialPgBrk = 0; // the first number of items you can fit in the first page
  @Input() hasDeleteBtn = false; // it adds a delete button to the list row
  setHeight() {
    if (this.height > 0) {
      return this.height + 'px';
    } else {
      return '';
    }
  }

  setWidth() {
    if (this.width > 0) {
      return this.width + 'px';
    } else {
      return '';
    }
  }
}
