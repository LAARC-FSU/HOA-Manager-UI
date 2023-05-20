import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PropertyInputFormComponent} from "./add-property/input-form/property-input-form.component";
import {TransactionComponent} from "./add-property/transactions/transaction.component";
import {NotesComponents} from "./add-property/notes/notes.components";



@NgModule({
  declarations: [
    AppComponent,
    LoginPortalComponent,
    AddPropertyComponent,
    PropertyInputFormComponent,
    TransactionComponent,
    NotesComponents,
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
