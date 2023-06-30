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
  @Input() isDeleteProperty = false; // it adds a delete button to the property list row
  @Input() isDeleteNote = false; // it adds a delete button to the notes list row
  @Input()  isView = false; // it adds view link to view the stored notes
  @Input() objectMem: number = -1; // initial value of the object member to be displayed in the list
  @Input()  isNotes = false;  // it asserts the object array being passed into items is of type notes
  @Output() indexProperty = new EventEmitter();
  @Output() indexNote = new EventEmitter();
  @Output() indexViewNote = new EventEmitter();

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

  deleteProperty(e:any){
    this.indexProperty.emit(e);
  }
  deleteNote(e:any){
    this.indexNote.emit(e);
  }
  viewNote(e:any){
    this.indexViewNote.emit(e);
  }
}
