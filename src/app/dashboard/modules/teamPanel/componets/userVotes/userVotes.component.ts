import { Component, Input, OnInit } from '@angular/core';
import { VotingSessionService } from '../../../../../services/votes/votingSession/votingSession.service'
import { Vote } from 'src/app/shared/models/vote/vote';

//'src/app/services/votes/voting-session/voting-session.service';

@Component({
  selector: 'df-userVotes',
  templateUrl: 'userVotes.component.html',
  styleUrls: ['userVotes.component.sass']
})
export class UserVotesComponent implements OnInit {
  @Input() vote!: Vote;
  constructor(private votingSessionService: VotingSessionService) { }

  ngOnInit(): void {
  }

}
