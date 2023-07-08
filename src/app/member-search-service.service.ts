import { Injectable } from '@angular/core';
import { userInfo } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class MemberSearchServiceService {
  members = new Map<string,userInfo>();
  membersTemp = '';
  tempObj:any;
  tempStr:any;

  storeMem(mem: userInfo): any {
    let success = true;
    try{
      this.retrieve();
      this.members.set(mem.id, mem);
      this.store();
      return success;
    }catch (e){
      return !success;
    }

  }

  getMem(target:string): any{
    let result: any[] = [];

    this.retrieve();
      try {
        if (this.members.has(target)){
          result.push(this.members.get(target));
          return result;
        }else {
          this.members.forEach((value) => {
            if (
              value.firstName === target ||
              value.lastName === target ||
              value.cellPhone === target ||
              value.homePhone === target ||
              value.email === target
            ){
              result.push(value);
            }
          });
          return result;
        }
      } catch (e) {
        console.log('ERROR: ', e)
      }

  }

  retrieve(){
    try {
      // if (localStorage.getItem('members') === null){
      //   localStorage.clear()
      // }
      if (localStorage.getItem('members')){
        this.tempStr = localStorage.getItem('members')!;
        this.tempObj = JSON.parse(this.tempStr);
        this.members = new Map(Object.entries(this.tempObj))
      }
    }
    catch (e){
      console.log('ERROR: ', e)
    }
  }
  store(){
    try {
      this.tempObj = Object.fromEntries(this.members.entries());
      this.tempStr = JSON.stringify(this.tempObj);
      localStorage.setItem('members', this.tempStr)
    }
    catch (e){
      console.log('ERROR: ', e)
    }
  }
  getMemCount(){
    this.retrieve();
    return this.members.size
  }
  constructor() { }
}
