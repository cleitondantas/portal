import { CadastroInformacao } from './../models/cadastro-informacao';
import { InstFinan } from './../models/inst-finan';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modalidades } from '../models/modalidades';
import { TipoAmortizacao } from '../models/tipo-amortizacao';
import { environment } from 'src/environments/environment';
import { StatusSimulacao } from '../models/status-simulacao';
import { Analise } from 'src/app/models/analise';
import { map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AnaliseChamadasService {

  constructor(
    private http: HttpClient
  ) { }

  getModalidades () {
    return this.http.get<Modalidades[]>(environment.urlpath + '/api/modalidadesimulacoes');
  }

  getInstFinan () {
    return this.http.get<InstFinan[]>(environment.urlpath + '/api/instituicoesfinanceiras');
  }

  getTipoAmortizacao () {
    return this.http.get<TipoAmortizacao[]>(environment.urlpath + '/api/tipoamortizacao');
  }

  getStatusSimulacao(){
    console.log("getStatusSimulacao()");
    return this.http.get(environment.urlpath + '/api/statussimulacao');
  }

  getRegistroAnalise (cod:number) {
    console.log("getRegistroAnalise");
    console.log(environment.urlpath + '/api/analises/'+cod)
    return this.http.get<Analise[]>(environment.urlpath + '/api/analises/'+cod);
  }
  postAnaliseSimulacaoContrato(analise: Analise){
   return this.http.post<Analise>(environment.urlpath + '/api/analise', analise);
  }

  getCodCadastro() {
    return this.http.get<CadastroInformacao[]>(environment.urlpath + '/api/cadastros');
  }
}
