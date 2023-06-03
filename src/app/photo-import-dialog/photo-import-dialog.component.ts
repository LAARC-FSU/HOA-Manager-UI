import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
@Component({
  selector: 'photo-import-dialog',
  templateUrl: './photo-import-dialog.component.html',
  styleUrls: ['./photo-import-dialog.component.scss']
})
export class PhotoImportDialogComponent{
  imageChangedEvent: any = '';
  preview:any = null;
  @Output() croppedImg = new EventEmitter();
  @Input() circleCropper = false;

  importImage(event:any){
    this.imageChangedEvent = event;
  }
  onImageCropped(event: ImageCroppedEvent) {
    this.preview = event.base64;
  }

  onImageLoaded() {
  }

  onCropperReady() {

  }

  onLoadImageFailed() {
    // Handle the load image failed event
  }
  saveImg(){
    if (this.preview){
      this.croppedImg.emit(this.preview);
    }
  }
}
