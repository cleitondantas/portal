import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Incorporadoras } from './../models/incorporadoras';
import { EstadoCivil } from 'src/app/models/estado-civil';
import { Originacao } from './../models/originacao';
import { Empreendimento } from './../models/empreendimento';
import { Estadobr } from './../models/estadobr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoContato } from '../models/tipo-contato';
import { TipoClientes } from '../models/tipo-clientes';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroChamadasService {

  constructor(
    private http: HttpClient
  ) { }

  getEstados() {
    return this.http.get<Estadobr[]>('./../../../../assets/estados.json');
  }

  getEmpreendimentos() {
    return this.http.get<Empreendimento[]>(`http://localhost:8100/api/empreendimentos`);
  }

  getOriginacao() {
    return this.http.get<Originacao[]>(`http://localhost:8100/api/originacoes`)
  }

  getEstadoCivil() {
    return this.http.get<EstadoCivil[]>(`http://localhost:8100/api/estadocivil`);
  }

  getTipoContato() {
    return this.http.get<TipoContato[]>(`http://localhost:8100/api/tipocontatos`);
  }

  getTipoClientes() {
    return this.http.get<TipoClientes[]>(`http://localhost:8100/api/tipoclientes`);
  }

  getIncorporadoras() {
    return this.http.get<Incorporadoras[]>(`http://localhost:8100/api/incorporadoras`)
  }

  createUser(cadInfo: CadastroInformacao) {
    return this.http.post<CadastroInformacao>(environment.urlpath + '/api/cadastro', cadInfo)
  }
}
