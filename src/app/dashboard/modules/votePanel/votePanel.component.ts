import { Component, OnInit, Input, Output , EventEmitter , HostListener} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

import { VotesService } from '../../../services/votes/votes.service';
import { VotingSessionService } from 'src/app/services/votes/votingSession/votingSession.service';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'df-votePanel', //app-voting-panel
  templateUrl: 'votePanel.component.html',
  styleUrls: ['votePanel.component.sass']
})
export class VotingPanelComponent implements OnInit {




 
  listVotes = [1, 2, 3, 5, 8, 13, 21, 34, 55 ];
  vote!: Vote;
  cardSelected = 0;
  cardDisabled!: boolean;

  constructor(
    private votesService: VotesService,
    private authService: AuthService,
    private votingSessionService: VotingSessionService) { }

  ngOnInit(): void {
    this.votingSessionService.startVoting().subscribe(
     
      (response: any) => this.cardDisabled = response,
     
      (error: any) => this.onError()
    );
  }

  cardClicked(valueEmitted: any): void {
    this.cardSelected = valueEmitted;
    this.votesService.addVote(this.authService.getUser(), this.cardSelected);
    this.votingSessionService.vote();
  }

  onError(): void {
    console.log('Algo deu errado');
  }
}
/*
function click(click: any) {
  throw new Error('Function not implemented.');
}
*/

