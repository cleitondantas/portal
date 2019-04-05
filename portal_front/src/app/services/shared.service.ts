import { Injectable, EventEmitter, Output } from '@angular/core';

import { Usuario } from '../models/usuario';
import { MessageService } from 'primeng/api';
import { Role } from '../models/role';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  private user : Usuario;
  role : Role;
  temporario: any[] = [];
  
  @Output() messengerService = new MessageService();
  @Output() showError = new EventEmitter<string>();
  showTemplate = new EventEmitter<boolean>();
  
  constructor() { 
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }



  public setToken(token){
    sessionStorage.setItem('token',token);
  }
  public getToken():string{
    return sessionStorage.getItem('token');
  }

 public setSessionUsuario(user : Usuario){
  sessionStorage.setItem('codUsuario',user.codUsuario);
  sessionStorage.setItem('login',user.login);
  sessionStorage.setItem('nome',user.nome);
  sessionStorage.setItem('sobrenome',user.sobrenome);
  sessionStorage.setItem('telefone',user.telefone);
  sessionStorage.setItem('cpf',user.cpf);
  sessionStorage.setItem('email',user.email);
  sessionStorage.setItem('perfis',user.perfis[0].profile);
  this.user = user;
}

public getSessionUsuario():Usuario{
  if(this.user == null){
    this.user = new Usuario();
    this.user.codUsuario = sessionStorage.getItem('codUsuario')==null ? null:sessionStorage.getItem('codUsuario');
    this.user.login = sessionStorage.getItem('login') ==null ? null:sessionStorage.getItem('login');
    this.user.nome = sessionStorage.getItem('nome') ==null ? null:sessionStorage.getItem('nome');
    this.user.sobrenome = sessionStorage.getItem('sobrenome') ==null ? null:sessionStorage.getItem('sobrenome');
    this.user.telefone = sessionStorage.getItem('telefone') ==null ? null:sessionStorage.getItem('telefone');
    this.user.cpf = sessionStorage.getItem('cpf') ==null ? null:sessionStorage.getItem('cpf');
    this.user.email = sessionStorage.getItem('email') ==null ? null:sessionStorage.getItem('email');
    this.role = new Role();
    this.role.profile = sessionStorage.getItem('perfis');
    console.log('getSessionUsuario() RECRIADO')
  }
  return this.user;
}

public removeSessionUsuario(){
  sessionStorage.removeItem('codUsuario');
  sessionStorage.removeItem('login');
  sessionStorage.removeItem('nome');
  sessionStorage.removeItem('sobrenome');
  sessionStorage.removeItem('telefone');
  sessionStorage.removeItem('cpf');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('perfis');
  sessionStorage.removeItem('token');
}

isLoggedIn():boolean {
 if(sessionStorage.getItem('token')==null){
    return false;
  }
  return true;
}

calendarioBr() {
  return {
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: "Hoje",
    firstDayOfWeek: 1,
    clear: "Limpar",
    dateFormat: "dd/mm/yy"
  };
}
}
