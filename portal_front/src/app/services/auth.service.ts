import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';
import { CurrentUser } from '../models/currentUser';
import { NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
let url: string = '/api/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private usuarioAutenticado: boolean = false;
  mostrarsistema = new EventEmitter<boolean>();
  shared : SharedService;
  constructor(private http: HttpClient,private router: Router) {
    this.shared = SharedService.getInstance();
    
   }

  fazerLogin(form : NgForm, usuario: Usuario){
    console.log('URL origin:'+environment.urlpath);
    this.router.navigate(['/home']);
    this.usuarioAutenticado = true;
    this.mostrarsistema.emit(true);

    /*this.http.post((environment.urlpath+url),usuario).subscribe((userAuthentication : CurrentUser)=>{
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.usuario
      this.usuarioAutenticado = true;
      this.mostrarsistema.emit(true);
      sessionStorage.setItem('token',this.shared.token);
      localStorage.setItem('token',this.shared.token); 
      localStorage.setItem('nome_usuario',this.shared.user.nome + ' '+this.shared.user.sobrenome);
      localStorage.setItem('login',this.shared.user.login); 
      localStorage.setItem('profile',this.shared.user.perfis[0]['profile'])
      console.log(this.shared.user.nome + ' '+this.shared.user.sobrenome);
      this.router.navigate(['/home']);
    },err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
      localStorage.removeItem('nome_usuario');
      localStorage.removeItem('login');
      localStorage.removeItem('profile');
      this.usuarioAutenticado = false;
      console.log('ERRO AO TENTAR LOGAR');
      window.location.reload();
    });*/
  }

  fazerLogout(){
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  localStorage.removeItem('nome_usuario');
  localStorage.removeItem('login');
  this.usuarioAutenticado = false;
  this.shared.token = null;
  this.shared.user = null;
  this.shared.showTemplate.emit(false);
  console.log('logout')
  window.location.reload();
  }

  isUsuarioAutenticado(){
    //if(sessionStorage.getItem('token')!==null){
      //if(localStorage.getItem('token')!==null){
      //this.mostrarsistema.emit(true);
      return true;
    //}
    //console.log('token false')
    //return false;
  }


}
