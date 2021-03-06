import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingPanelComponent } from './votePanel.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    VotingPanelComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VotingPanelComponent
  ]
})
export class VotingPanelModule { }
