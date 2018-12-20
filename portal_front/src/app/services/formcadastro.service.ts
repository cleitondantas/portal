import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormcadastroService {

  constructor(private http: HttpClient) { }

  createOrUpdate(user: User){
    if(user.id != null && user.id != ''){
      return this.http.put(environment.urlpath+'/api/user',user);
    } else {
      user.id = null;
      return this.http.post(environment.urlpath+'/api/user',user);
    }
  }

  createOrUpdateUsuer(user: Usuario){
    user.isAtivo=true;
    if(user.id != null ){
      return this.http.put<Usuario>(environment.urlpath+'/api/user/usuario',user);
    } else {
      user.id = null;
      return this.http.post<Usuario>(environment.urlpath+'/api/user/usuario',user);
    }
  }

  getRoles(){
    return this.http.get(environment.urlpath+'/api/user/roles');
  }



  

}
