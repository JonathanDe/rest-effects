import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios Fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios Success';

export class CargarUsuariosAction implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFailAction implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor(public payload: any) {}
}

export class CargarUsuariosSuccessAction implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;
  constructor(public usuarios: Usuario[]) {}
}

export type acciones =
  | CargarUsuariosAction
  | CargarUsuariosFailAction
  | CargarUsuariosSuccessAction;
