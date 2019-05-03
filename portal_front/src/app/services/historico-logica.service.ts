import { Injectable } from '@angular/core';
import { AnaliseChamadasService } from './analise-chamadas.service';
import { HttpResponse } from '@angular/common/http';
import { HistoricoService } from './historico.service';
import { Sintese } from '../models/sintese';
import { Fase } from '../models/fase';
import { HistoricoAnalise } from '../models/HistoricoAnalise';
import { Usuario } from '../models/usuario';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricoLogicaService {

  constructor(private chamadaService: AnaliseChamadasService, 
              private historicoService: HistoricoService,
              private sharedService: SharedService) { }

  receberHistorico(data) {
    let dados: HistoricoAnalise[] = data['data'];
    var fase: Fase[];
    var sintese: Sintese[];

    this.chamadaService.getDadosCadastrais('fases').subscribe(event => {
     if (event instanceof HttpResponse) {
       fase = event.body['data'];
       for (let i = 0; i < dados.length; i++) {
         for (let item = 0; item < fase.length; item++) {
           if (dados[i].numfase == fase[item].numfase) {
             dados[i].numfase = fase[item];
           }
         }
       }
       this.sharedService.getFase = true;
       this.sharedService.hiddenLoader();
              
       this.historicoService.getSinteses().subscribe(data => {
         sintese = data['data'];
         for (let i = 0; i < dados.length; i++) {
           for (let item = 0; item < sintese.length; item++) {
             if (dados[i].numfase.numfase == sintese[item].numfase) {
               if(dados[i].numsintese == sintese[item].numsintese) {
                 dados[i].numsintese = sintese[item];
               }
             }
           }
         }
         
       this.sharedService.getSintese = true;
       this.sharedService.hiddenLoader();
       })
      }
    });
    return dados;
  }

  salvarHistorico(data, codcadastro, sinteseSelecionado) {
    let data2: HistoricoAnalise = new HistoricoAnalise();
    data2 = data;
    data2.datahistorico = new Date().toDateString();
    let user: Usuario = this.sharedService.getSessionUsuario();
    data2.codusuario = user.codUsuario;
    data2.codcadastro = codcadastro;
    data2.numsintese = sinteseSelecionado;

    return data2;
  }
}
