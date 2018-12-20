import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historico } from '../../../models/historico';
import { environment } from '../../../../environments/environment';
let historico: string = '/api/cad/historico';
let historicocontrato: string = '/api/cad/historicocontrato';
let historicodocumento: string = '/api/cad/historicodocumento';

@Injectable({
  providedIn: 'root'
})

export class RelatorioListaService {
  constructor(private http: HttpClient) { }

  item: any[];
  historicos: Historico[];
  buscarHistoricoPorProposta(numProposta:string){
   return this.http.post((environment.urlpath+historico),{"numProposta":numProposta});
 }

 buscarHistoricoPorContrato(nContrato:string){
  return this.http.post((environment.urlpath+historicocontrato),{"nContrato":nContrato});
}

buscarHistoricoPorDocumento(numDocumento:string){
  return this.http.post((environment.urlpath+historicodocumento),{"cliente": {"numDocumento":numDocumento}});
}

}
