import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'reusable-list-member-add',
  templateUrl: './reusable-list-member-add.component.html',
  styleUrls: ['./reusable-list-member-add.component.scss']
})
export class ReusableListMemberAddComponent {
  @Input() height = 0; // optional
  @Input() width = 0; // optional
  @Input() items: any[] = [];
  @Input() itemsPerPage = 0; // after the first page, the number of items you can fit on a page
  @Input() initialPgBrk = 0; // the first number of items you can fit in the first page
  @Input() isDeleteBtn = false; // it adds a delete button to the list row
  @Input() objectMem: number = -1;
  @Input()  isNotes = false;
  @Output() index = new EventEmitter();
  @Output() isNotesType = new EventEmitter();

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

  delete(e:any){
    this.index.emit(e);
    this.isNotesType.emit(this.isNotes);
  }
}
