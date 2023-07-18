import { Injectable } from '@angular/core';
import {propertyInfo, searchQuery, searchQueryProperty, userInfo} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class PropertySearchService {
  properties = new Map<string,propertyInfo>();
  membersTemp = '';
  tempObj:any;
  tempStr:any;

  storeProperty(property: propertyInfo): any {
    let success = true;
    try{
      this.retrieve();
      this.properties.set(property.id.toString(), property);
      this.store();
      return success;
    }catch (e){
      return !success;
    }

  }

  getMem(target:searchQueryProperty){
    let result: propertyInfo[] = [];

    this.retrieve();
    try
    {
      if (this.properties.size > 0){
        this.properties.forEach((value) => {
          if (
            target.address !== undefined && target.address !== '' && value.address.toLowerCase()?.includes(target.address.toLowerCase()) ||
            target.lot !== undefined && target.lot !== '' && value.lot.toLowerCase()?.includes(target.lot.toLowerCase())||
            target.block !== undefined && target.block !== '' && value.block.toLowerCase()?.includes(target.block.toLowerCase()) ||
            target.unit !== undefined && target.unit !== '' && value.unit.toLowerCase()?.includes(target.unit.toLowerCase()) ||
            target.numOfBuildings !== undefined && target.numOfBuildings !== '' && value.numOfBuildings.toLowerCase()?.includes(target.numOfBuildings.toLowerCase())
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
      if (localStorage.getItem('properties')){
        this.tempStr = localStorage.getItem('properties')!;
        this.tempObj = JSON.parse(this.tempStr);
        this.properties = new Map(Object.entries(this.tempObj))
      }
    }
    catch (e){
      console.log('ERROR: ', e)
    }
  }
  store(){
    try {
      this.tempObj = Object.fromEntries(this.properties.entries());
      this.tempStr = JSON.stringify(this.tempObj);
      localStorage.setItem('properties', this.tempStr)
    }
    catch (e){
      console.log('ERROR: ', e)
    }
  }
  getPropertyCount(){
    this.retrieve();
    return this.properties.size
  }

  delete(target:propertyInfo){
    this.retrieve();
    if (this.properties.has(target.id.toString())){
      this.properties.delete(target.id.toString())
      this.store();
    }

  }
  constructor() { }
}
