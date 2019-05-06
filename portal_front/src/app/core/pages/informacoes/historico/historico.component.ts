import { Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { CadastroLogicaService } from 'src/app/services/cadastro-logica.service';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { Fase } from 'src/app/models/fase';
import { Sintese } from 'src/app/models/sintese';
import { HistoricoAnalise } from 'src/app/models/HistoricoAnalise';
import { HttpResponse } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { Usuario } from 'src/app/models/usuario';
import { HistoricoLogicaService } from 'src/app/services/historico-logica.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  disabledSintese: boolean = true;
  loadSpin: boolean = false;
  loadTable: boolean = false;
  fid: any;
  msgs: Message[] = [];
  fases: Fase[];
  sinteses: Sintese[];
  historicoAnalises: HistoricoAnalise[] = [];
  historicoAnalise: HistoricoAnalise = new HistoricoAnalise();
  sinteseSelecionado: Sintese;

  constructor(
     private cadastroLogicaService: CadastroLogicaService,
     private chamadaService: AnaliseChamadasService,
     private historicoService: HistoricoService,
     private sharedService: SharedService,
     private historicoLogicaService: HistoricoLogicaService) { }
     
  ngOnInit() {
    this.chamadaService.getDadosCadastrais('fases').subscribe(event => {
      if (event instanceof HttpResponse) {
        this.fases = event.body['data'];
      }
    })
    this.visualizarCadInfo();

    this.chamadaService.buscarInformacoes.subscribe(dado => {
      if (dado == true) {
      this.visualizarCadInfo();
      this.historicoAnalises = [];
      this.getHistorico();
      }
    });
    this.getHistorico();  
  }

  changeFases(event){
    this.loadSpin = true;   
    const numfase: Fase = event.value;
    this.historicoService.getSintesePorFaseRequest(numfase.numfase).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.sinteses = event.body['data'];
        setTimeout(() => {
          this.loadSpin = false;
        }, 300);
      }
    })
    this.disabledSintese = false;
  }

  changeSintese(event){
    const sinsete: Sintese = event.value;
    this.sinteseSelecionado = sinsete;
  }

  getHistorico(){
   this.historicoService.getHistorico(this.cadInfo.codcadastro).subscribe(data => {
     this.historicoAnalises = this.historicoLogicaService.receberHistorico(data)
   });
  }

  salvar(data){
    this.loadTable = true;
    this.msgs = [];
    let data2: HistoricoAnalise = new HistoricoAnalise();
    data2 = this.historicoLogicaService.salvarHistorico(data, this.cadInfo.codcadastro, this.sinteseSelecionado);
    this.historicoService.postHistorico(data2).subscribe(event => {
      if (event instanceof HttpResponse) {
        let evento: any = event.body['data'];
        this.historicoAnalises.unshift(data2);
        this.historicoAnalise = new HistoricoAnalise();
        setTimeout(() => {
          this.loadTable = false;
        }, 500);
        this.disabledSintese = true;
      }
    }, err => {
      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao salvar!',
        detail: 'Tente novamente!'
      })
      this.loadTable = false;
    });
  }

  visualizarCadInfo() {
    const cadastroSelecionado = sessionStorage.getItem('CADASTRODADOS');
    const cadInfoSelecionado = sessionStorage.getItem('CADASTROINFO');
    if (cadastroSelecionado != 'undefined' && cadastroSelecionado != null) {
      const comprador: Compradores = this.cadastroLogicaService.getDadosCadastrais(cadastroSelecionado);
      this.comprador = comprador;
      this.fid = JSON.parse(sessionStorage.getItem('fid'));
    }

    if (cadInfoSelecionado != 'undefined' && cadastroSelecionado != null) {
      const cadInfo: CadastroInformacao = this.cadastroLogicaService.getCadInfo(cadInfoSelecionado);
      this.cadInfo = cadInfo;
    }
  }
}