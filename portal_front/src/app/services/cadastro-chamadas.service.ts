import { Incorporadoras } from './../models/incorporadoras';
import { EstadoCivil } from 'src/app/models/estado-civil';
import { Originacao } from './../models/originacao';
import { Empreendimento } from './../models/empreendimento';
import { Estadobr } from './../models/estadobr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoContato } from '../models/tipo-contato';
import { TipoClientes } from '../models/tipo-clientes';

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
    return this.http.get<Empreendimento[]>(`http://10.6.5.99:8100/api/empreendimentos`);
  }

  getOriginacao() {
    return this.http.get<Originacao[]>(`http://10.6.5.99:8100/api/originacoes`)
  }

  getEstadoCivil() {
    return this.http.get<EstadoCivil[]>(`http://10.6.5.99:8100/api/estadocivil`);
  }

  getTipoContato() {
    return this.http.get<TipoContato[]>(`http://10.6.5.99:8100/api/tipocontatos`);
  }

  getTipoClientes() {
    return this.http.get<TipoClientes[]>(`http://10.6.5.99:8100/api/tipoclientes`);
  }

  getIncorporadoras() {
    return this.http.get<Incorporadoras[]>(`http://10.6.5.99:8100/api/incorporadoras`)
  }
}
