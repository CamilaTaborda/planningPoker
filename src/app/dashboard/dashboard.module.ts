import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../shared/shared.module';
import { VotingPanelModule } from './modules/votePanel/votePanel.module' ;
import { TeamPanelModule } from './modules/teamPanel/teamPanel.module';




@NgModule({
  declarations: [
    DashboardComponent,
  
    
      ],
  imports: [
    
    CommonModule,
    AppRoutingModule,
    SharedModule,
    VotingPanelModule,
    TeamPanelModule
  ],
})
export class DashboardModule { }
