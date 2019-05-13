import { Message, MessageService } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { CadastroLogicaService } from 'src/app/services/cadastro-logica.service';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { Fase } from 'src/app/models/fase';
import { Sintese } from 'src/app/models/sintese';
import { HistoricoAnalise } from 'src/app/models/HistoricoAnalise';
import { HttpResponse } from '@angular/common/http';
import { HistoricoLogicaService } from 'src/app/services/historico-logica.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
  providers: [MessageService]

})
export class HistoricoComponent implements OnInit {
  @ViewChild('formHistorico', { read: NgForm }) form: any;

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
     private messageService: MessageService,
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
      this.form.reset();
      this.visualizarCadInfo();
      this.historicoAnalises = [];
      this.getHistorico();
      this.msgs = [];
      }
    });

    this.historicoLogicaService.load.subscribe(dado => {
      setTimeout(() => {
        this.loadTable = !dado;
      }, 500);
    })

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

  salvar(data, formHistorico){
    this.loadTable = true;
    this.msgs = [];
    if (this.validaForm(formHistorico) == true) {
      let data2: HistoricoAnalise = new HistoricoAnalise();
      data2 = this.historicoLogicaService.salvarHistorico(data, this.cadInfo.codcadastro, this.sinteseSelecionado);
      this.historicoService.postHistorico(data2).subscribe(event => {
        if (event instanceof HttpResponse) {
          let evento: any = event.body['data'];
          evento = this.historicoLogicaService.receberData(evento);
          this.historicoAnalises.unshift(evento);
          formHistorico.reset();
          this.disabledSintese = true;
          this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Adicionado com sucesso!'});
        }
      });
    } else {
      const camposInvalidos: any[] = [];

      for (const _i in formHistorico.controls) {
        if (formHistorico.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formHistorico.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao salvar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` +
             camposInvalidos + `</strong>.`
          });
        }
      }
      this.loadTable = false;
    }
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

  limpar(form) {
    form.reset();
    this.msgs = [];
    this.disabledSintese = true;
    this.messageService.add({key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Formulário limpo!'});
  }

  validaForm(form) {
    if (form.valid == false ) {
      return false;
    } else {
      return true;
    } 
  }
}