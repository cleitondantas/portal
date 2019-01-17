import { InstFinan } from './../models/inst-finan';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modalidades } from '../models/modalidades';
import { TipoAmortizacao } from '../models/tipo-amortizacao';

@Injectable({
  providedIn: 'root'
})
export class AnaliseChamadasService {

  constructor(
    private http: HttpClient
  ) { }

  getModalidades () {
    return this.http.get<Modalidades[]>(`http://localhost:8100/api/modalidadesimulacoes`);
  }

  getInstFinan () {
    return this.http.get<InstFinan[]>(`http://localhost:8100/api/instituicoesfinanceiras`);
  }

  getTipoAmortizacao () {
    return this.http.get<TipoAmortizacao[]>(`http://localhost:8100/api/tipoamortizacao`);
  }
}
