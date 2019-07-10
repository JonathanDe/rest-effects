import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuarioActions from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario
  loading: boolean;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params.id;
      this.store.dispatch(new usuarioActions.CargarUsuarioAction(id));
    });

    this.store.select('usuario').pipe(
      filter(user => user.user != null)
    ).subscribe((user)=>{
      this.usuario = user.user;
      this.loading = user.loading;
    })
  }
}
