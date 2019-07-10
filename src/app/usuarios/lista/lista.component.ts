import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  users: Usuario[] = [];

  constructor(public usuarioService: UsuarioService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe((usuarios)=>{
      this.users = usuarios.users;
    })
    this.store.dispatch(new usuariosActions.CargarUsuariosAction());
  }

}
