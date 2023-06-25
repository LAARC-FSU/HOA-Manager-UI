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
import {PropertyInputFormComponent} from "./add-property/input-form/property-input-form.component";
import {TransactionComponent} from "./add-property/transactions/transaction.component";
import {NotesComponents} from "./add-property/notes/notes.components";
import {TransactionInputComponents} from "./transaction-input/transaction-input.components";
import {FindPropertyComponent} from "./find-property/find-property.component";
import {FindMemeberComponent} from "./find-member/find-memeber.component";
import { FullCalendarModule} from "@fullcalendar/angular";
import { MemberCalendarComponent} from "./member-calendar/member-calendar.component";
import { MemberTimeGridComponent} from "./member-calendar/member-time-grid/member-time-grid.component";
import {MemberDayGridComponent} from "./member-calendar/member-day-grid/member-day-grid.component";
import {BillingPaymentHistoryComponent} from "./billing-payment-history/billing-payment-history.component";
import {TransactionHistoryComponent} from "./billing-payment-history/transaction-history/transaction-history.component";
import {NextPaymentComponent} from "./billing-payment-history/next-payment/next-payment.component";
import {MemberInfoForm} from "./member-info-form/member-info-form";
import {MemberViewPropertyComponent} from "./member-view-property/member-view-property.component";
import {FindEmployeeComponent} from "./find-employee/find-employee.component";
import {FindMemberInputComponent} from "./find-member/find-member-input/find-member-input.component";
import {FindEmployeeResultComponent} from "./find-employee/find-employee-result/find-employee-result.component";
import {FindEmployeeInputComponent} from "./find-employee/find-employee-input/find-employee-input.component";
import {ModuleFrame} from "./module-fram/module-frame";
import { EmployeeCredentialsMakerComponent } from './employee-credentials-maker/employee-credentials-maker.component';
import {HttpClientModule} from "@angular/common/http";
import {MemberDashboardComponent} from "./member-dashboard/member-dashboard.component";


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
    EmployeeCredentialsMakerComponent,
    AddPropertyComponent,
    PropertyInputFormComponent,
    TransactionComponent,
    NotesComponents,
    TransactionInputComponents,
    FindPropertyComponent,
    FindMemeberComponent,
    FindMemberInputComponent,
    MemberCalendarComponent,
    MemberTimeGridComponent,
    MemberDayGridComponent,
    BillingPaymentHistoryComponent,
    TransactionHistoryComponent,
    NextPaymentComponent,
    MemberInfoForm,
    MemberViewPropertyComponent,
    FindEmployeeComponent,
    FindEmployeeResultComponent,
    FindEmployeeInputComponent,
    ModuleFrame,
    MemberDashboardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    HttpClientModule,
    ImageCropperModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {
}
