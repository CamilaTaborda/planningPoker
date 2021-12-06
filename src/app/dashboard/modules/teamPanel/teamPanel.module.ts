import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamPanelComponent } from './teamPanel.component';
import { ConnectedUserComponent } from './componets/connectUser/connectUser.component';
import { UserVotesComponent } from './componets/userVotes/userVotes.component';



@NgModule({
  declarations: [
    TeamPanelComponent,
    ConnectedUserComponent,
    UserVotesComponent,
    ConnectedUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamPanelComponent
  ]
})
export class TeamPanelModule { }
