import { Injectable } from '@angular/core';
import {MEMBERHOAMODULES, MemberHOAModule} from "./MemberHOAModules";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {
  }
  getCard(){
    return MEMBERHOAMODULES;
  }
}
