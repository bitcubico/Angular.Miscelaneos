import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {
  alert: string;

  constructor() { this.alert = 'info' }

  ngOnInit(): void {
  }

}
