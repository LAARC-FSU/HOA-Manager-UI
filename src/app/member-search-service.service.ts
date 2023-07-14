import { Injectable } from '@angular/core';
import {searchQuery, userInfo} from "./interfaces";

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

  getMem(target:searchQuery){
    let result: userInfo[] = [];

    this.retrieve();
      try {
        if (this.members.size > 0){
          this.members.forEach((value) => {
            if (
              target.firstName !== undefined && target.firstName !== '' && value.firstName.toLowerCase()?.includes(target.firstName.toLowerCase()) ||
              target.lastName !== undefined && target.lastName !== '' && value.lastName.toLowerCase()?.includes(target.lastName.toLowerCase()) ||
              target.phone !== undefined && target.phone !== '' && value.phone?.includes(target.phone) ||
              target.address !== undefined && target.address !== '' && value.address.toLowerCase()?.includes(target.address.toLowerCase()) ||
              target.id.toString() !== undefined && target.id.toString() !== '' && value.id?.includes(target.id.toString())
            ){
              result.push(value);
            }
          });
        }
      } catch (e) {
        console.log('ERROR: ', e)

      }
    return result;
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

  delete(target:userInfo){
    this.retrieve();
    if (this.members.has(target.id)){
      this.members.delete(target.id)
      this.store();
    }

  }
  constructor() { }
}
