import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user';

@Component({
  selector: 'df-connectUser',//app-connected-user
  templateUrl: 'connectUser.component.html',
  styleUrls: ['connectUser.component.sass']
})
export class ConnectedUserComponent implements OnInit {

  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
