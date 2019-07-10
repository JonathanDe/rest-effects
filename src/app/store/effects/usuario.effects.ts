import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()

export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    public usuariosService: UsuarioService
  ){}

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType(usuarioActions.CARGAR_USUARIO),
    switchMap((action)=>{
      const id = action['id'];
      return this.usuariosService.getUserById(id).pipe(
        map((user) => {
          return new usuarioActions.CargarUsuarioSuccessAction(user);
        }),
        catchError( (error) => {
          return of (new usuarioActions.CargarUsuarioFailAction(error));
        })
      );

    })
  )
}
