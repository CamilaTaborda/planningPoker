import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-modal',
  templateUrl: './dash-modal.component.html',
  styleUrls: ['./dash-modal.component.css']
})
export class DashModalComponent implements OnInit {
  mostrar: boolean = false;
  toggle () {
    this.mostrar = !this.mostrar;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
