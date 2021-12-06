import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { LoginModule } from './login/login.module';
import { DashboardModule} from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ErrorsModule,
    DashboardModule,
    LoginModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
