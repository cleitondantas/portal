import { InstFinan } from './../models/inst-finan';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modalidades } from '../models/modalidades';
import { TipoAmortizacao } from '../models/tipo-amortizacao';
import { environment } from 'src/environments/environment';
import { StatusSimulacao } from '../models/status-simulacao';

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

  getStatusSimulacao () {
    return this.http.get<StatusSimulacao[]>(environment.urlpath + '/api/statussimulacao');
  }
}
