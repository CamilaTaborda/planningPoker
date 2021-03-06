import { Injectable, OnInit } from '@angular/core';
import { User } from './../../shared/models/user/user';
import { Vote } from './../../shared/models/vote/vote';

@Injectable({
  providedIn: 'root'
})
export class VotesService{
  votes: Array<Vote> = [];

  constructor() { }

  getVotes(): any{
    if (this.votes.length !== 0) {
      return this.votes;
    }
    const votesSaved = localStorage.getItem('votes');
    if (votesSaved){
      this.votes = (JSON.parse(votesSaved));
      return this.votes;
    }
    return null;
  }

  addVote(user: User, vote: number): void {
    const newVote: Vote = {
      user: (user),
      vote: (vote)
    };
    if (this.votes.length !== 0){
      if (!this.filterUser(user)) {
        this.votes.push(newVote);
      }
    } else {
      this.votes.push(newVote);
    }
    localStorage.setItem('votes', JSON.stringify(this.votes));
  }

  clearVotes(): void {
    this.votes = [];
    localStorage.removeItem('votes');
  }

  getUserVote(user: User): Vote | undefined{
    return this.votes.find(element => element.user.userName === user.userName);
  }

  filterUser(user: User): any{
    if (this.getUserVote(user)) {
      return true;
    }
    return false;
  }

  getTotal(): number{
    const total = this.votes.reduce((sum, item) => {
      return sum + item.vote;
    }, 0);

    return total;
  }
}
