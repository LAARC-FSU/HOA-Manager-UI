import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDashboardComponent} from "./schedule-dashboard/schedule-dashboard.component";
import { MakeScheduleComponent} from "./make-schedule/make-schedule.component";
import { ScheduleViewComponent} from "./schedule-view/schedule-view.component";
import {LoginPortalComponent} from "./login-portal/login-portal.component";
import {MainDashboardComponent} from "./main-dashboard/main-dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: '/log-in', pathMatch:'full'},
  {path: 'make-schedule', component: MakeScheduleComponent},
  {path: 'view-schedule', component: ScheduleViewComponent},
  {path: 'schedule-dashboard', component: ScheduleDashboardComponent},
  {path: 'log-in', component: LoginPortalComponent},
  {path: 'main-dashboard', component: MainDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
