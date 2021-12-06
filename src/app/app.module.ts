import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { LoginModule } from './login/login.module';
import { DashboardModule} from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [   
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ErrorsModule,
    DashboardModule,
    LoginModule,
    MatDialogModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
