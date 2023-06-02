import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'photo-import-dialog',
  templateUrl: './photo-import-dialog.component.html',
  styleUrls: ['./photo-import-dialog.component.scss']
})
export class PhotoImportDialogComponent implements AfterViewInit {
  selectedFile: File = new File([], '');
  image = new Image();
  @ViewChild("mainCanvas") canvasBottomRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild("croppedCanvas") canvasTopRef!: ElementRef<HTMLCanvasElement>;
  canvasBack: HTMLCanvasElement | undefined = undefined;
  canvasTop: HTMLCanvasElement | undefined = undefined;
  ctxBack : CanvasRenderingContext2D | null = null;
  ctxTop: CanvasRenderingContext2D | null = null;
  mouseDown = false;
  radius = 10;

  constructor() {
  }

  ngAfterViewInit() {
    this.canvasBack = this.canvasBottomRef.nativeElement;
    this.canvasTop = this.canvasTopRef.nativeElement;
    this.ctxBack = this.canvasBack.getContext('2d')!;
    this.ctxTop = this.canvasTop.getContext('2d')!;
  }

  drawImage(event: any) {
    this.selectedFile = event.target.files[0];
    this.drawSelectedImage();
  }

  setMouseDown(event:any){
    console.log(event);
    switch (event.type){
      case 'mousedown':
        this.mouseDown = true;
        break
      case 'mouseup':
        this.mouseDown = false;
        break
    }
    this.onClick(event);
  }
  drawSelectedImage() {
debugger
    this.image.onload = () => {
      this.canvasTop!.width = 800;
      this.canvasBack!.width = 800;
      this.canvasTop!.height = 800;
      this.canvasBack!.height = 800;

      const scale = Math.min(this.canvasTop!.width / this.image.width, this.canvasTop!.height / this.image.height);
      const width = this.image.width * scale;
      const height = this.image.height * scale;

      // this.canvasBack.width = this.image.width;
      // this.canvasTop.width = this.image.width;
      // this.canvasBack.height = this.image.height;
      // this.canvasTop.height = this.image.height;

      this.ctxTop!.clearRect(0,0, this.canvasTop!.width, this.canvasTop!.height);
      this.ctxBack!.clearRect(0,0, this.canvasBack!.width, this.canvasBack!.height);

      this.ctxTop!.drawImage(this.image, 0,0, width, height, 0, 0, 800, 800);
      this.ctxBack!.drawImage(this.image, 0,0, width, height, 0, 0, 800, 800);
      debugger
    };

    this.image.src = URL.createObjectURL(this.selectedFile!);
  }

  onClick(event: any) {


    // this.ctx.fillStyle = 'blue';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.mouseDown){
      let x = event.x;
      let y = event.y;
      debugger
      this.ctxBack!.filter = 'blur(10px)';
      this.ctxBack!.drawImage(this.image, 0, 0);
      this.ctxTop!.drawImage(this.image, 0, 0);
      this.ctxBack!.filter = 'none';

      this.ctxTop!.globalCompositeOperation = 'source-in';
      this.drawCropShape(x, y, this.radius);
      this.ctxTop!.drawImage(this.image, 0, 0);
      this.ctxTop!.globalCompositeOperation = 'source-over';
      this.drawButton(x, y)
    }



  }

  drawCropShape(x: number, y: number, r: number) {
    this.ctxTop!.fillStyle = 'black'
    this.ctxTop!.beginPath();
    this.ctxTop!.arc(x, y, r, 0, 2 * Math.PI); // Draw a full circle
    this.ctxTop!.fill();
  }

  drawButton(x:number, y:number) {
    const buttonWidth = 50;
    const buttonHeight = 50;


    this.ctxTop!.fillStyle = '#3498db';
    this.ctxTop!.fillRect(x, y, buttonWidth, buttonHeight);

  }

  protected readonly event = event;
}
