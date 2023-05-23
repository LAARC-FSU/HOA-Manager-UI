import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPortalComponent} from './login-portal/login-portal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MakeScheduleComponent} from './make-schedule/make-schedule.component';
import {TimeFrameComponent} from './make-schedule/time-frame/time-frame.component';
import {ShiftMakerComponent} from './make-schedule/shift-maker/shift-maker.component';
import {TimePickerComponent} from './make-schedule/time-picker/time-picker.component';
import {EmployeeScheduleComponent} from './make-schedule/employee-schedule/employee-schedule.component';
import {ScheduleViewComponent} from './schedule-view/schedule-view.component';
import {ScheduleDashboardComponent} from './schedule-dashboard/schedule-dashboard.component';
import {DatePipe} from "@angular/common";
import { FullCalendarModule} from '@fullcalendar/angular';
import { MemberCalendarComponent} from "./member-calendar/member-calendar.component";
import {  MemberTimeGridComponent} from "./member-calendar/member-time-grid/member-time-grid.component";
import {MemberDayGridComponent} from "./member-calendar/member-day-grid/member-day-grid.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    MakeScheduleComponent,
    TimeFrameComponent,
    ShiftMakerComponent,
    TimePickerComponent,
    EmployeeScheduleComponent,
    ScheduleViewComponent,
    ScheduleDashboardComponent,
    MemberCalendarComponent,
    MemberTimeGridComponent,
    MemberDayGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
