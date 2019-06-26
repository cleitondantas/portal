import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../models/user';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';
import onlyNumbers from '@brazilian-utils/helper-only-numbers';

@Injectable({
  providedIn: 'root'
})
export class FormcadastroService {

  constructor(private http: HttpClient) { }

  createOrUpdate(user: User) {
    if (user.id != null && user.id != '') {
      return this.http.put(environment.urlpath + '/api/user', user);
    } else {
      user.id = null;
      return this.http.post(environment.urlpath + '/api/user', user);
    }
  }

  createOrUpdateUsuer(user: Usuario) {
    console.log(JSON.stringify(user));
    user.isAtivo = true;
    user.cpf = onlyNumbers(user.cpf);
    if (user.id != null ) {
      return this.http.put<Usuario>(environment.urlpath + '/api/user/usuario', user);
    } else {
      user.id = null;
      return this.http.post<Usuario>(environment.urlpath + '/api/user/usuario', user);
    }
  }


  salvaresetUserPassword(user: Usuario) {
    console.log(JSON.stringify(user));
    user.isAtivo = true;
    user.cpf = onlyNumbers(user.cpf);
    if (user.id != null ) {
      return this.http.put<Usuario>(environment.urlpath + '/api/user/usuario/reset', user);
    } else {
      user.id = null;
      return this.http.post<Usuario>(environment.urlpath + '/api/user/usuario', user);
    }
  }

  salvarTrocarSenha(user: Usuario) {
    console.log(JSON.stringify(user));
      return this.http.put<Usuario>(environment.urlpath + '/api/user/usuario/trocarsenha', user);
  }


  makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  deleteUpdate(user: Usuario) {
    return this.http.delete<Usuario>(environment.urlpath + '/api/user/usuario/' + user.codUsuario);
  }

  getRoles() {
    return this.http.get(environment.urlpath + '/api/user/roles');
  }

  getNome(nome: string) {
    return this.http.request(new HttpRequest('GET', environment.urlpath + '/api/usuario/nome/' + nome, {
      reportProgress: true
    }));
  }

  getLogin(login: string) {
    return this.http.request(new HttpRequest('GET', environment.urlpath + '/api/usuario/login/' + login, {
      reportProgress: true
    }));
  }


  getUsers(nome) {
    return this.http.get(environment.urlpath + '/api/usuario/nome/' + nome)
      .toPromise()
      .then(res => <any[]> res)
      .then(data => data);
  }

  getNick(login) {
    return this.http.get(environment.urlpath + '/api/usuario/login/' + login)
    .toPromise()
    .then(res => <any[]> res)
    .then(data => data);
  }
}
