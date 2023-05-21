import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindMemberInputComponent} from "./find-member/find-member-input/find-member-input.component";
import {FindMemberResultComponent} from "./find-member/find-member-result/find-member-result.component";
import {NgForOf} from "@angular/common";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgForOf],
  declarations: [
    FindMemberInputComponent,
    FindMemberResultComponent
  ],
  exports: [RouterModule, FindMemberInputComponent, FindMemberResultComponent]
})
export class AppRoutingModule { }
