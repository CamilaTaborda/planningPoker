import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
import { VotesService } from 'src/app/services/votes/votes.service';
import { VotingSessionService } from 'src/app/services/votes/votingSession/votingSession.service';
import { User } from 'src/app/shared/models/user/user';
import { Vote } from 'src/app/shared/models/vote/vote';

@Component({
  selector: 'df-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  votes!: Array<Vote>;
  showVotes = false;
  total = 0;
  owner = false;
  user !: User;
  subscribeTimer!: number;
  timeLeft!: number;


  constructor(
  private votesService: VotesService,
  private votingSessionService: VotingSessionService,
  private authService: AuthService  ) { }

  ngOnInit(): void {
    this.votingSessionService.alreadyVoted()
    .subscribe(

      (response: any) => this.onStopVoting(response),
      
      (error: any) => this.onErrorVote(error)
    );
    
    this.owner = (this.authService.getUser()).owner;
  }

  

  onStartVoting(): void{
    this.votesService.clearVotes();  
    this.votingSessionService.notVoted();
  }

  onStopVoting(stop: boolean): void{   
    this.total = this.votesService.getTotal();
    this.showVotes = stop;
  }

  onErrorVote(error: string): void {
    console.log('Algo deu errado na votação', error);
  }

  clear(): void{
    this.onStartVoting();
  }

 

  /*
  oberserableTimer() {
      const source = timer(1000, 2000);
      const abc = source.subscribe(val => {
        console.log(val, '-');
        this.subscribeTimer = this.timeLeft - val;
      });
    }
  */


}
