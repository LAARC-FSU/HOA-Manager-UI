import { Component } from '@angular/core';
import type { OnInit } from '@angular/core';
@Component({
  selector: 'add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})


export class AddPropertyComponent implements OnInit {

  image: any = 'assets/location_color.png'
  getImage(event: any){
    this.image = event
  }
  constructor() {}
  ngOnInit(): void {}
}
