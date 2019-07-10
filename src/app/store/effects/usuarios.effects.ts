import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()

export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    public usuariosService: UsuarioService
  ){}

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIOS),
    switchMap(()=>{
      return this.usuariosService.getUsers().pipe(
        map((users) => {
          return new usuariosActions.CargarUsuariosSuccessAction(users);
        }),
        catchError( (error) => {
          return of (new usuariosActions.CargarUsuariosFailAction(error));
        })
      );

    })
  )
}
