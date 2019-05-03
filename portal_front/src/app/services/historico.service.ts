import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Fase } from '../models/fase';
import { Sintese } from '../models/sintese';
import { HistoricoAnalise } from '../models/HistoricoAnalise';

@Injectable({
  providedIn: 'root'
})


export class HistoricoService {

  constructor(private http: HttpClient) { }

  getFasePorNumero(numfase:number){
    return this.http.get<Fase[]>(environment.urlpath + '/api/fase/'+numfase);
  }

  getFases(){
    return this.http.get<Fase[]>(environment.urlpath + '/api/fases');
  }

  getSinteses(){
    return this.http.get<Sintese[]>(environment.urlpath + '/api/sinteses');
  }
  
  getSintesePorFase(numfase:number){
    return this.http.get<Sintese[]>(environment.urlpath + '/api/sintese/'+numfase);
  }

  getSintesePorFaseSintese(numfase:number ,numsintese:number){
    return this.http.get<Sintese[]>(environment.urlpath + '/api/sintese/'+numfase+"/"+numsintese);
  }

  getHistorico(codcadastro:number){
    return this.http.get<any[]>(environment.urlpath + '/api/historico/'+codcadastro);
  }

  postHistorico(hist: HistoricoAnalise){
     let data2: HistoricoAnalise = new HistoricoAnalise();
     data2.datahistorico = hist.datahistorico;
     data2.codcadastro = hist.codcadastro;
     data2.descricao = hist.descricao;
     data2.numsintese =  hist.numsintese.numsintese; 
     data2.numfase = hist.numfase.numfase;
     console.log(data2);
     return this.http.post<HistoricoAnalise>(environment.urlpath +'/api/historico', data2);
  }

  getSintesePorFaseRequest(numfase) {
    return this.http.request(new HttpRequest('GET', environment.urlpath + '/api/sintese/' + numfase, {
      reportProgress: true
    }));
  }



}
