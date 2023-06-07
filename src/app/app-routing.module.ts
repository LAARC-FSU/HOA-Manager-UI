import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDashboardComponent} from "./schedule-dashboard/schedule-dashboard.component";
import { MakeScheduleComponent} from "./make-schedule/make-schedule.component";
import { ScheduleViewComponent} from "./schedule-view/schedule-view.component";

const routes: Routes = [
  {path: '', redirectTo: '/schedule-dashboard', pathMatch:'full'},
  {path: 'make-schedule', component: MakeScheduleComponent},
  {path: 'view-schedule', component: ScheduleViewComponent},
  {path: 'schedule-dashboard', component: ScheduleDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
