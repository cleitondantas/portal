import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';
import { CurrentUser } from '../models/currentUser';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
const url = '/api/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usuarioAutenticado = false;
  mostrarsistema = new EventEmitter<boolean>();
  shared: SharedService;
  constructor(private http: HttpClient, private router: Router) {
    this.shared = SharedService.getInstance();

   }

  fazerLogin(form: NgForm, usuario: Usuario) {
    console.log('URL origin:' + environment.urlpath);
    this.http.post((environment.urlpath + url), usuario).subscribe((userAuthentication: CurrentUser) => {
      this.shared.setToken(userAuthentication.token);
      this.shared.setSessionUsuario(userAuthentication.usuario);
      this.usuarioAutenticado = true;
      this.mostrarsistema.emit(true);
      localStorage.setItem('nome_usuario', userAuthentication.usuario.nome + ' ' + userAuthentication.usuario.sobrenome);
      console.log(userAuthentication.usuario.nome + ' ' + userAuthentication.usuario.sobrenome);
      this.router.navigate(['/home']);
    }, err => {
      this.shared.setToken(null);
      this.shared.showTemplate.emit(false);
      localStorage.removeItem('nome_usuario');
      this.shared.removeSessionUsuario();
      this.usuarioAutenticado = false;
      console.log('ERRO AO TENTAR LOGAR');
    });
  }

  fazerLogout() {
  this.shared.removeSessionUsuario();
  this.usuarioAutenticado = false;
  this.shared.showTemplate.emit(false);
  console.log('logout');
  window.location.reload();
  }

  isUsuarioAutenticado() {
    if (this.shared.isLoggedIn()) {
      this.mostrarsistema.emit(true);
      return true;
    }
    return false;
  }
}
