import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
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
  msgError = new EventEmitter();
  shared: SharedService;
  constructor(private http: HttpClient, private router: Router) {
    this.shared = SharedService.getInstance();

   }

  fazerLogin(form: NgForm, usuario: Usuario) {
    console.log('URL origin:' + environment.urlpath);
    this.http.request(new HttpRequest('POST', (environment.urlpath + url), usuario, {
      reportProgress: true
    })).subscribe(event => {
      if (event instanceof HttpResponse) {
        let evento: any = event.body;
        this.shared.setToken(evento.token);
        this.shared.setSessionUsuario(evento.usuario);
        this.usuarioAutenticado = true;
        this.mostrarsistema.emit(true);
        localStorage.setItem('nome_usuario', evento.usuario.nome + ' ' + evento.usuario.sobrenome);
        console.log(evento.usuario.nome + ' ' + evento.usuario.sobrenome);
       this.router.navigate(['/home']);
      }
    }, err => {
      this.msgError.emit(false);
      this.shared.setToken(null);
      this.shared.showTemplate.emit(false);
      localStorage.removeItem('nome_usuario');
      this.shared.removeSessionUsuario();
      this.usuarioAutenticado = false;
      console.log('ERRO AO TENTAR LOGAR');
    })
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
