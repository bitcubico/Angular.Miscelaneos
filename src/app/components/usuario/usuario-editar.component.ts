import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: '<h2>Edición del usuario: {{UserId}}</h2>'
})
export class UsuarioEditarComponent implements OnInit {

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
