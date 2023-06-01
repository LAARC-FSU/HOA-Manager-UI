import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'photo-import-dialog',
  templateUrl: './photo-import-dialog.component.html',
  styleUrls: ['./photo-import-dialog.component.scss']
})
export class PhotoImportDialogComponent implements AfterViewInit {
  selectedFile: File = new File([], '');
  image = new Image();
  @ViewChild("mainCanvas") canvasRef!: ElementRef<HTMLCanvasElement>;
  canvas: any = null;
  ctx: any = null;
  imgUrl: string = '';

  constructor() {
  }

  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    // this.canvas.width = window.innerWidth;
    // this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d')!;
  }

  drawImage(event: any) {
    this.selectedFile = event.target.files[0];
    this.drawSelectedImage();
  }

  drawSelectedImage() {

    this.image.onload = () => {
      this.canvas.width = this.image.width;
      this.canvas.height = this.image.height;
      this.ctx.drawImage(this.image, 0, 0);
    };

    this.image.src = URL.createObjectURL(this.selectedFile!);
  }

  onClick(event: any) {
    const radius = 200;


    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.ctx.filter = 'blur(10px)';
    // this.ctx.drawImage(this.image, 0, 0);
    // this.ctx.filter = 'none';

    this.ctx.globalCompositeOperation = 'source-in';
    this.drawCropShape(event.x, event.y, radius);
    this.ctx.drawImage(this.image, 0, 0);
    this.ctx.globalCompositeOperation = 'source-over';


  }

  drawCropShape(x: number, y: number, r: number) {
    this.ctx.fillStyle = 'black'
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI); // Draw a full circle
    this.ctx.fill();
  }
}
