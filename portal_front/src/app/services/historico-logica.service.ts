import { Injectable, EventEmitter } from '@angular/core';
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
  getSintese = false;
  getFase = false;
  load = new EventEmitter<boolean>();


  constructor(private chamadaService: AnaliseChamadasService,
              private historicoService: HistoricoService,
              private sharedService: SharedService) { }

  receberHistorico(data) {
    const dados: HistoricoAnalise[] = data['data'];
    let fase: Fase[];
    let sintese: Sintese[];
    const codUsuarios: any[] = [];

    for (let i = 0; i < dados.length; i++) {
      if (codUsuarios.includes(dados[i].codusuario) == false) {
        codUsuarios.push(dados[i].codusuario);
      }
    }

    for (let i = 0; i < codUsuarios.length; i++) {
      this.historicoService.getUsuario(codUsuarios[i]).subscribe(event => {
        if (event instanceof HttpResponse) {
          const user: Usuario = event.body['data'];

          for (let item = 0; item < dados.length; item++) {
            if (user.codUsuario == dados[item].codusuario) {
              dados[item].codusuario = user.nome + ' ' + user.sobrenome;
            }
          }
        }
      });
    }

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
                if (dados[i].numsintese == sintese[item].numsintese) {
                  dados[i].numsintese = sintese[item];
                }
              }
            }
          }

        this.sharedService.getSintese = true;
        this.sharedService.hiddenLoader();
        });
      }
    });

    return dados;
  }

  salvarHistorico(data, codcadastro, sinteseSelecionado) {
    let data2: HistoricoAnalise = new HistoricoAnalise();
    data2 = data;
    data2.datahistorico = new Date().toDateString();
    const user: Usuario = this.sharedService.getSessionUsuario();
    data2.codusuario = user.codUsuario;
    data2.codcadastro = codcadastro;
    data2.numsintese = sinteseSelecionado;

    return data2;
  }

  receberData(dado: HistoricoAnalise) {
    let dado2: HistoricoAnalise = new HistoricoAnalise();
    const user: Usuario = this.sharedService.getSessionUsuario();

    dado2 = dado;
    this.historicoService.getFasePorNumero(dado.numfase).subscribe(data => {
      data = data['data'];

      dado2.numfase = data[0];
      this.getFase = true;
      this.loadTable();
    });

    this.historicoService.getSintesePorFaseSintese(dado.numfase, dado.numsintese).subscribe(data => {
      data = data['data'];

      dado2.numsintese = data[0];
      this.getSintese = true;
      this.loadTable();
    });

    dado2.codusuario = user.nome + ' ' + user.sobrenome;

    return dado2;
  }

  loadTable() {
    if (this.getFase == true && this.getSintese == true) {
      this.getFase = false;
      this.getSintese = false;
      this.load.emit(true);
    }
  }
}
