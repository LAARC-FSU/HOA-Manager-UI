import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchBoxComponent} from "./find-property/search-box/search-box.component";
import {SearchResultComponent} from "./find-property/search-results/search-result.component";
import {NgForOf} from "@angular/common";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgForOf],
  declarations: [
    SearchBoxComponent,
    SearchResultComponent
  ],
  exports: [RouterModule, SearchBoxComponent, SearchResultComponent]
})
export class AppRoutingModule { }
