import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDashboardComponent} from "./schedule-dashboard/schedule-dashboard.component";
import { MakeScheduleComponent} from "./make-schedule/make-schedule.component";
import { ScheduleViewComponent} from "./schedule-view/schedule-view.component";
import {LoginPortalComponent} from "./login-portal/login-portal.component";
import {MainDashboardComponent} from "./main-dashboard/main-dashboard.component";
import {SearchBoxComponent} from "./find-property/search-box/search-box.component";
import {SearchResultComponent} from "./find-property/search-results/search-result.component";
import {FindMemberResultComponent} from "./find-member/find-member-result/find-member-result.component";
import {NgForOf} from "@angular/common";
import {ClockInOutDialogComponent} from "./clock-in-out-dialog/clock-in-out-dialog.component";
import {AddPropertyComponent} from "./add-property/add-property.component";
import {FindPropertyComponent} from "./find-property/find-property.component";
import {FindMemeberComponent} from "./find-member/find-memeber.component";
import {FindEmployeeComponent} from "./find-employee/find-employee.component";
import {MemberAddComponent} from "./member-add/member-add.component";


const routes: Routes = [
  //{path: '', redirectTo: '/log-in', pathMatch:'full'},
  {path: '', redirectTo: '/main-dashboard', pathMatch:'full'},
  {path: 'make-schedule', component: MakeScheduleComponent},
  {path: 'view-schedule', component: ScheduleViewComponent},
  {path: 'schedule-dashboard', component: ScheduleDashboardComponent},
  {path: 'log-in', component: LoginPortalComponent},
  {path: 'main-dashboard', component: MainDashboardComponent},
  {path: 'clock-in-out-dialog', component: ClockInOutDialogComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'find-property', component: FindPropertyComponent},
  {path: 'view-update-members', component: FindMemeberComponent},
  {path: 'employees', component: FindEmployeeComponent},
  {path: 'add-member', component: MemberAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgForOf],
  declarations: [
    SearchBoxComponent,
    SearchResultComponent,
    FindMemberResultComponent,
  ],
  exports: [RouterModule, SearchBoxComponent, SearchResultComponent, FindMemberResultComponent]
})
export class AppRoutingModule { }
