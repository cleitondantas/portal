import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(    private http: HttpClient) { }


  getUsuario(codusuario:number){
    return this.http.get<Usuario>(environment.urlpath + '/api/usuario/'+codusuario)
  }

}
