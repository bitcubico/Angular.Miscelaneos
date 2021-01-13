import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: '<h2>Detalle del usuario: {{ UserId }}</h2>'
})
export class UsuarioDetalleComponent implements OnInit {

  UserId: number;

  constructor(private _activateRoute: ActivatedRoute) { 
    this._activateRoute.parent.params.subscribe(
      parametros => {
        this.UserId = parametros['id'];
      }
    )
  }

  ngOnInit(): void {
  }

}
