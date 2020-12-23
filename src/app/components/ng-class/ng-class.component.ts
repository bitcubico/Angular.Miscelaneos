import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {

  alert = 'alert-info';
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.loading = true;
    setTimeout( () => this.loading = false, 3000 )
  }

}
