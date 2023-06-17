import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPortalComponent} from './login-portal/login-portal.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MakeScheduleComponent} from './make-schedule/make-schedule.component';
import {TimeFrameComponent} from './make-schedule/time-frame/time-frame.component';
import {ShiftMakerComponent} from './make-schedule/shift-maker/shift-maker.component';
import {TimePickerComponent} from './make-schedule/time-picker/time-picker.component';
import {EmployeeScheduleComponent} from './make-schedule/employee-schedule/employee-schedule.component';
import {ScheduleViewComponent} from './schedule-view/schedule-view.component';
import {ScheduleDashboardComponent} from './schedule-dashboard/schedule-dashboard.component';
import {DatePipe} from "@angular/common";
import { ClockInOutDialogComponent } from './clock-in-out-dialog/clock-in-out-dialog.component';
import { ClockComponent } from './clock/clock.component';
import { ReusableListComponent } from './reusable-list/reusable-list.component';
import { WorkedHoursViewComponent } from './worked-hours-view/worked-hours-view.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PhotoImportDialogComponent } from './photo-import-dialog/photo-import-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PropertyInputFormComponent} from "./add-property/input-form/property-input-form.component";
import {TransactionComponent} from "./add-property/transactions/transaction.component";
import {NotesComponents} from "./add-property/notes/notes.components";
import {TransactionInputComponents} from "./transaction-input/transaction-input.components";
import {FindPropertyComponent} from "./find-property/find-property.component";
import {FindMemeberComponent} from "./find-member/find-memeber.component";
import { FullCalendarModule} from "@fullcalendar/angular";
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
    ClockInOutDialogComponent,
    ClockComponent,
    ReusableListComponent,
    WorkedHoursViewComponent,
    CardComponent,
    HeaderComponent,
    MainDashboardComponent,
    PhotoImportDialogComponent,
    AddPropertyComponent,
    PropertyInputFormComponent,
    TransactionComponent,
    NotesComponents,
    TransactionInputComponents,
    FindPropertyComponent,
    FindMemeberComponent,
    MemberCalendarComponent,
    MemberTimeGridComponent,
    MemberDayGridComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}
