import { CalendarioBr } from './../models/calendario-br';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Incorporadoras } from './../models/incorporadoras';
import { EstadoCivil } from 'src/app/models/estado-civil';
import { Originacao } from './../models/originacao';
import { Empreendimento } from './../models/empreendimento';
import { Estadobr } from './../models/estadobr';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { TipoContato } from '../models/tipo-contato';
import { TipoClientes } from '../models/tipo-clientes';
import { environment } from '../../environments/environment';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroChamadasService {

  buscarCadastro = new EventEmitter<any>();

  constructor(
    private http: HttpClient
  ) { }

  getEstados() {
    return this.http.get<Estadobr[]>('./../../../../assets/estados.json');
  }

  getEmpreendimentos() {
    return this.http.get<Empreendimento[]>(environment.urlpath + '/api/empreendimentos');
  }

  getOriginacao() {
    return this.http.get<Originacao[]>(environment.urlpath + '/api/originacoes');
  }

  getEstadoCivil() {
    return this.http.get<EstadoCivil[]>(environment.urlpath + '/api/estadocivil');
  }

  getTipoContato() {
    return this.http.get<TipoContato[]>(environment.urlpath + '/api/tipocontatos');
  }

  getTipoClientes() {
    return this.http.get<TipoClientes[]>(environment.urlpath + '/api/tipoclientes');
  }

  getIncorporadoras() {
    return this.http.get<Incorporadoras[]>(environment.urlpath + '/api/incorporadoras');
  }

  createUser(cadInfo: CadastroInformacao) {
    console.log(JSON.stringify(cadInfo));
    return this.http.post<CadastroInformacao>(environment.urlpath + '/api/cadastro', cadInfo);
  }


  getOrgaoExpedidor() {
    return this.http.get(`./../../assets/orgao-expedidor.json`)
    .toPromise()
    .then(res => <any[]> res)
    .then(data => data);
  }

  getBuscaNomeClienteCadastrado(nome: any) {
    return this.http.get<Cliente[]>(environment.urlpath + '/api/cliente/nome/' + nome)
    .toPromise()
    .then(res => <any[]> res)
    .then(data => data);
  }

  getBuscaCPFClienteCadastrado(cpf: any) {
    return this.http.get<Cliente[]>(environment.urlpath + '/api/cliente/cpf/' + cpf)
    .toPromise()
    .then(res => <any[]> res)
    .then(data => data);
  }


  getCep(cep) {
    // CRIEI UM REDIRECIONAMENTO INTERNO NO BACKEND PARA TRATAR NO SERVIDOR O CEP ANTES DE ENVIAR PARA O FRONT
    // return this.http.get(`//viacep.com.br/ws/${cep}/json`);
    return this.http.get(environment.urlpath + '/api/cep/' + cep);
  }

  getCalendarioBr() {
    return this.http.get<CalendarioBr[]>(`./../../assets/calendario-br.json`);
  }

  getBuscaCadastrado(nome: string, cpf: string) {
  if (nome != null) {
  return this.http.get<CadastroInformacao[]>(environment.urlpath + '/api/cadastro/nome/' + nome).toPromise().then(res => <any[]> res).then(data =>data);
  } else if (cpf != null) {
    return this.http.get<CadastroInformacao[]>(environment.urlpath + '/api/cadastro/cpf/' + cpf).toPromise().then(res => <any[]> res).then(data =>data);
  }
  }

  putCadastro(cadInfo: CadastroInformacao) {
   return this.http.put<CadastroInformacao>(environment.urlpath + '/api/cadastro', cadInfo);
  }

  getDadosCadastrais(chamada) {
    return this.http.request(new HttpRequest('GET', environment.urlpath + '/api/' + chamada, {
      reportProgress: true
    }));
  }
}
