import { Injectable } from '@angular/core';
import {HOAMODULES, HOAModule} from "./HOAModules";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {
  }
  getCard(){
    return HOAMODULES;
  }
}
