import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './../app.routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
