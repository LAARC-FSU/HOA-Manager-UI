import {Component} from '@angular/core';
@Component({
  selector: 'photo-import-dialog',
  templateUrl: './photo-import-dialog.component.html',
  styleUrls: ['./photo-import-dialog.component.scss']
})
export class PhotoImportDialogComponent {
  selectedFile: any;
  constructor() {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = event.target.files[0];
    }
  }

}
