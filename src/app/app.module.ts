import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MakeScheduleComponent } from './make-schedule/make-schedule.component';
import { TimeFrameComponent } from './make-schedule/time-frame/time-frame.component';
import { ShiftMakerComponent } from './make-schedule/shift-maker/shift-maker.component';
import { TimePickerComponent } from './make-schedule/time-picker/time-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    MakeScheduleComponent,
    TimeFrameComponent,
    ShiftMakerComponent,
    TimePickerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
