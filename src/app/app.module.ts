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
import {MemberInfoForm} from "./member-info-form/member-info-form";

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
        MemberInfoForm,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
