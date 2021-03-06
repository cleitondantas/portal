import { Injectable, EventEmitter, Output } from '@angular/core';

import { Usuario } from '../models/usuario';
import { MessageService } from 'primeng/api';
import { Role } from '../models/role';
import { Empreendimento } from '../models/empreendimento';
import { Compradores } from '../models/compradores';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static instance: SharedService = null;
  static emitirevento  = new EventEmitter<any>();
  private user: Usuario;
  role: Role;
  roles: Role[];

  temporario: any[] = [];
  @Output() messengerService = new MessageService();
  @Output() showError = new EventEmitter<string>();
  showTemplate = new EventEmitter<boolean>();
  getTipoCliente = false;
  getTipoContato = false;
  getEstadoCivil = false;
  getBanco = false;
  getModalidade = false;
  getAmortizacao = false;
  getEmpreendimento = false;
  getFase = false;
  getSintese = false;
  showLoader = new EventEmitter<boolean>();
  empreendimentos: Empreendimento[] = [];
  cadastrosrecentes: Compradores[] = [];
  infosTable: any[] = [];

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }



  public setToken(token) {
    sessionStorage.setItem('token', token);
  }
  public getToken(): string {
    return sessionStorage.getItem('token');
  }

 public setSessionUsuario(user: Usuario) {
  sessionStorage.setItem('codUsuario', user.codUsuario);
  sessionStorage.setItem('login', user.login);
  sessionStorage.setItem('nome', user.nome);
  sessionStorage.setItem('sobrenome', user.sobrenome);
  sessionStorage.setItem('telefone', user.telefone);
  sessionStorage.setItem('cpf', user.cpf);
  sessionStorage.setItem('email', user.email);
  sessionStorage.setItem('perfis', user.perfis[0].profile);
  sessionStorage.setItem('perfisJson', JSON.stringify(user.perfis));
  this.user = user;
}

public getSessionUsuario(): Usuario {
  if (this.user == null) {
    this.user = new Usuario();
    this.user.codUsuario = sessionStorage.getItem('codUsuario') == null ? null : sessionStorage.getItem('codUsuario');
    this.user.login = sessionStorage.getItem('login') == null ? null : sessionStorage.getItem('login');
    this.user.nome = sessionStorage.getItem('nome') == null ? null : sessionStorage.getItem('nome');
    this.user.sobrenome = sessionStorage.getItem('sobrenome') == null ? null : sessionStorage.getItem('sobrenome');
    this.user.telefone = sessionStorage.getItem('telefone') == null ? null : sessionStorage.getItem('telefone');
    this.user.cpf = sessionStorage.getItem('cpf') == null ? null : sessionStorage.getItem('cpf');
    this.user.email = sessionStorage.getItem('email') == null ? null : sessionStorage.getItem('email');
    this.role = new Role();
    this.role.profile = sessionStorage.getItem('perfis');
    this.roles =  JSON.parse(sessionStorage.getItem('perfisJson'));
  }
  return this.user;
}

public isUserAdmin(): boolean {
  this.roles =  JSON.parse(sessionStorage.getItem('perfisJson'));
  for (let i = 0; i < this.roles.length; i++ ) {
    if (this.roles[i].nivel == 1) {
      return true;
    }
  }
  return false;
}

public removeSessionUsuario() {
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

isLoggedIn(): boolean {
 if (sessionStorage.getItem('token') == null) {
    return false;
  }
  return true;
}

calendarioBr() {
  return {
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
    today: 'Hoje',
    firstDayOfWeek: 1,
    clear: 'Limpar',
    dateFormat: 'dd/mm/yy'
  };
}

hiddenLoader() {
  if ((this.getAmortizacao == true) && (this.getBanco == true) && (this.getEstadoCivil == true) &&
      (this.getModalidade == true) && (this.getTipoCliente == true) && (this.getTipoContato == true) &&
      (this.getEmpreendimento == true) && (this.getFase == true) && (this.getSintese == true)) {
        setTimeout(() => {
          this.getTipoCliente = false;
          this.getTipoContato = false;
          this.getEstadoCivil = false;
          this.getBanco = false;
          this.getModalidade = false;
          this.getAmortizacao = false;
          this.getEmpreendimento = false;
          this.getFase = false;
          this.getSintese = false;
          this.showLoader.emit(true);
        }, 500);
  }
}
}
