import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
  usuarios: reducers.UsuarioState;
  usuario: reducers.SingleUserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer
}
