import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Analise } from 'src/app/models/analise';
import { AnaliseCreditoComponent } from '../analise-credito.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { InstiruicaoFinanceiras } from 'src/app/models/instituicaoFinanceira';
import { TipoAmortizacao } from 'src/app/models/tipo-amortizacao';
import { StatusSimulacao } from 'src/app/models/status-simulacao';
import { async } from '@angular/core/testing';
import { pipe } from '@angular/core/src/render3';
import {map, filter, catchError, mergeMap, tap} from 'rxjs/operators';
import { Modalidades } from 'src/app/models/modalidades';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  numfid: any;
  codcadastro: any;
  simulacaoLista: any[] = [];
  statusSimulEvent = new EventEmitter<any>();
  instFinanEvent = new EventEmitter<any>();
  salvarAlteracoesButton: boolean = true;
  
  instFinan: InstiruicaoFinanceiras[];
  modalidade: Modalidades[];
  tipoAmortizacao: TipoAmortizacao[];
  simul: any;
  br: any;
  statussimulacao: StatusSimulacao[] = [];
  statussimulacaoTemp: StatusSimulacao[];

  simulacoes: Simulacoes = new Simulacoes();
  analise: Analise  = new Analise();
  
  constructor( 
    private confirmationService: ConfirmationService,private service: AnaliseChamadasService, private router: Router, private analiseCred: AnaliseCreditoComponent

  ) { }
    items:any[];

  ngOnInit() {
    this.br = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/yy'
    }

    this.service.getInstFinan().subscribe(dados => {
      this.instFinan = dados['data']
      this.instFinanEvent.emit(true)
    });

    this.service.getModalidades().subscribe(dados => this.modalidade = dados['data']);
    this.service.getTipoAmortizacao().subscribe(dados => this.tipoAmortizacao = dados['data']);

    this.service.getStatusSimulacao().subscribe(data => {
      this.statussimulacaoTemp =  data['data'] 
        for (var _i = 0; _i < this.statussimulacaoTemp.length; _i++) {
          //(data['data'][_i] as StatusSimulacao).descstatussimulacao
          let item: StatusSimulacao = new StatusSimulacao();
          item.codstatussimulacao =   this.statussimulacaoTemp[_i].codstatussimulacao;
          item.descstatussimulacao = this.statussimulacaoTemp[_i].descstatussimulacao;
          this.statussimulacao[_i] = item;
        }
      this.statusSimulEvent.emit(true);
     });

    let AnaliseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');    

    if (AnaliseSelecionada !== null || undefined) {
      let jsonObj: any = JSON.parse(AnaliseSelecionada);// Recebe os dados enviados pela busca de cadastro
      let analise: Analise = <Analise>jsonObj;

      analise.datapastamae = new Date(analise.datapastamae);
      analise.dataemissao = new Date(analise.dataemissao);
      analise.dataassinatura = new Date(analise.dataassinatura);
      analise.datasimulacao = new Date(analise.datasimulacao);

      this.analise = analise;
      this.codcadastro = analise.codcadastro;
      this.simulacoes.codcadastro = this.codcadastro;

      this.statusSimulEvent.subscribe(dado => {
        if (dado == true) {
          for (var _i = 0; _i  < analise.simulacoes.length; _i++) {
            for(var item = 0; item < this.statussimulacao.length; item++){
              if(analise.simulacoes[_i].codstatussimulacao === this.statussimulacao[item].codstatussimulacao){
                  analise.simulacoes[_i].codstatussimulacao = {
                  codstatussimulacao: this.statussimulacao[item].codstatussimulacao,
                  descstatussimulacao: this.statussimulacao[item].descstatussimulacao              
                };
              }
            }
          }
        }
      })

      this.instFinanEvent.subscribe(dado => {
        if (dado == true) {
          for (var _i = 0; _i < analise.simulacoes.length; _i++) {
            for (var item = 0; item < this.instFinan.length; item++) {
              if (analise.simulacoes[_i].codinstituicaofinanceira == this.instFinan[item].codInstituicaoFinanceira) {
                analise.simulacoes[_i].codinstituicaofinanceira = {
                  codInstituicaoFinanceira: this.instFinan[item].codInstituicaoFinanceira,
                  descInstituicaoFinanceira: this.instFinan[item].descInstituicaoFinanceira
                }
              }
            }
          }
        }
      })
   
      for (var _i = 0; _i < analise.simulacoes.length; _i++) {
        analise.simulacoes[_i].datasimulacao = new Date(analise.simulacoes[_i].datasimulacao);
        analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);

        this.simulacaoLista.push(analise.simulacoes[_i]);
      }
    } else {
    this.codcadastro = SharedService.getInstance().temporario[0];
    this.numfid = SharedService.getInstance().temporario[1];
    }

    sessionStorage.removeItem('ANALISESELECIONADA');
    if (SharedService.getInstance().temporario != null) {
      SharedService.getInstance().temporario = null;
    }
  }

  addItemStatusSimulacao(items:StatusSimulacao[]){
    this.statussimulacao = items;
  }

  adicionarSimulacao(simulacao: Simulacoes) {
    var simulacao2: Simulacoes = new Simulacoes();

    simulacao2.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    simulacao2.codcadastro = this.codcadastro;
    simulacao2.valoravaliacao = simulacao.valoravaliacao;
    simulacao2.valorcompravenda = simulacao.valorcompravenda;
    simulacao2.valorcredito = simulacao.valorcredito;
    simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao.codModalidadeSimulacao;
    simulacao2.dataenviobanco = simulacao.dataenviobanco;
    simulacao2.codsicaq = simulacao.codsicaq;
    simulacao2.correspondente = simulacao.correspondente;
    simulacao2.prazofinanciamento = simulacao.prazofinanciamento;
    simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao.codtipoamortizacao;
    simulacao2.valorsubsidio = simulacao.valorsubsidio;
    simulacao2.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
    simulacao2.valorfinanciamento = simulacao.valorfinanciamento;
    simulacao2.valorfgts = simulacao.valorfgts;
    simulacao2.valorrecursosproprios = simulacao.valorrecursosproprios;
    simulacao2.saldodevedor = simulacao.saldodevedor;
    simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;
    simulacao2.codstatussimulacao = simulacao.codstatussimulacao;
    simulacao2.valoravaliacaoinstfinanc = simulacao.valoravaliacaoinstfinanc;
    simulacao2.taxadejuros = simulacao.taxadejuros;
    simulacao2.valorprimeiraparcela = simulacao.taxadejuros;

    this.simulacaoLista.push(simulacao2);
  }

  removerSimulacao(simul) {
    let index = this.simulacaoLista.indexOf(simul);
    this.simulacaoLista.splice(index, 1);
  }

  salvar() {
    this.analise.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    this.analise.codcadastro  = this.codcadastro;
    for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
      var item = this.simulacaoLista[_i];
      this.simulacaoLista[_i].codinstituicaofinanceira = item.codinstituicaofinanceira ?  Number(item.codinstituicaofinanceira.codInstituicaoFinanceira):null;
      console.log(this.simulacaoLista[_i].codinstituicaofinanceira)
      this.simulacaoLista[_i].codstatussimulacao = item.codstatussimulacao? Number(item.codstatussimulacao.codstatussimulacao) :null;
    }
    this.analise.simulacoes= this.simulacaoLista;
    
    this.service.postAnaliseSimulacaoContrato(this.analise).subscribe(data => console.log(data = data['data']));
    console.log("PERSISTINDO NA BASE");
    console.log(JSON.stringify(this.analise));
   // this.analiseCred.selected = 1;
  }

  focusDropDown(input) {
    input.click();
  }

  recursoProprio() {
    var calc = this.simulacoes.valoravaliacao - this.simulacoes.valordespesasfinanciadas - this.simulacoes.valorfgts;
    this.simulacoes.valorrecursosproprios = calc;
  }

  salvarAnalise(analise: Analise){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja salvar essas informações?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.salvar();
      },
      reject: () => {
        console.log("NAO PERSISTINDO NA BASE")
      }
    });
  }

  buscarFid() {
    let fid = this.numfid;
    let codCadastro: CadastroInformacao[];
    this.service.getCodCadastro().subscribe(dados => {
      codCadastro = dados['data'];
      for (let _i = 0; _i < codCadastro.length; _i++) {
        if (fid == codCadastro[_i].numerocadastroincorporadorafid) {
          this.codcadastro = codCadastro[_i].codcadastro;
        }
      }
    });
  }

  visualizarSimulacao(simulacao: Simulacoes) {
    this.salvarAlteracoesButton = false;

    this.simulacoes.codsimulacao = simulacao.codsimulacao;
    this.simulacoes.valoravaliacao = simulacao.valoravaliacao;
    this.simulacoes.valorcompravenda = simulacao.valorcompravenda;
    this.simulacoes.valorcredito = simulacao.valorcredito;
    for (let item = 0; item < this.modalidade.length; item++) {
      if(simulacao.codmodalidadesimulacao == this.modalidade[item].codModalidadeSimulacao){
        simulacao.codmodalidadesimulacao = {
          codModalidadeSimulacao: this.modalidade[item].codModalidadeSimulacao,
          descModalidadeSimulacao: this.modalidade[item].descModalidadeSimulacao  
        };
      }
    }
    this.simulacoes.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;

    this.simulacoes.dataenviobanco = simulacao.dataenviobanco;
    this.simulacoes.codsicaq = simulacao.codsicaq;
    this.simulacoes.correspondente = simulacao.correspondente;
    this.simulacoes.prazofinanciamento = simulacao.prazofinanciamento;

    for (let item = 0; item < this.tipoAmortizacao.length; item++) {
      if(simulacao.codtipoamortizacao == this.tipoAmortizacao[item].codtipoamortizacao){
        simulacao.codtipoamortizacao = {
          codtipoamortizacao: this.tipoAmortizacao[item].codtipoamortizacao,
          desctipoamortizacao: this.tipoAmortizacao[item].desctipoamortizacao  
        };
      }
    }
    this.simulacoes.codtipoamortizacao = simulacao.codtipoamortizacao;

    this.simulacoes.valorsubsidio = simulacao.valorsubsidio;
    this.simulacoes.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
    this.simulacoes.valorfinanciamento = simulacao.valorfinanciamento;
    this.simulacoes.valorfgts = simulacao.valorfgts;
    this.simulacoes.valorrecursosproprios = simulacao.valorrecursosproprios;
    this.simulacoes.saldodevedor = simulacao.saldodevedor;
    this.simulacoes.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;
    this.simulacoes.codstatussimulacao = simulacao.codstatussimulacao;
    this.simulacoes.valoravaliacaoinstfinanc = simulacao.valoravaliacaoinstfinanc;
    this.simulacoes.taxadejuros = simulacao.taxadejuros;
    this.simulacoes.valorprimeiraparcela = simulacao.valorprimeiraparcela;
  }

  salvarAlteracoes() {
    for (let item = 0; item < this.simulacaoLista.length; item++) {
      if (this.simulacaoLista[item].codsimulacao == this.simulacoes.codsimulacao) {
          this.simulacaoLista[item].codcadastro = this.simulacoes.codcadastro;
          this.simulacaoLista[item].valoravaliacao = this.simulacoes.valoravaliacao;
          this.simulacaoLista[item].valorcompravenda = this.simulacoes.valorcompravenda;
          this.simulacaoLista[item].valorcredito = this.simulacoes.valorcredito;
          this.simulacaoLista[item].codmodalidadesimulacao = this.simulacoes.codmodalidadesimulacao.codModalidadeSimulacao
          this.simulacaoLista[item].dataenviobanco = this.simulacoes.dataenviobanco;
          this.simulacaoLista[item].codsicaq = this.simulacoes.codsicaq;
          this.simulacaoLista[item].correspondente = this.simulacoes.correspondente;
          this.simulacaoLista[item].prazofinanciamento = this.simulacoes.prazofinanciamento;
          this.simulacaoLista[item].codtipoamortizacao = this.simulacoes.codtipoamortizacao.codtipoamortizacao
          this.simulacaoLista[item].valorsubsidio = this.simulacoes.valorsubsidio;
          this.simulacaoLista[item].valordespesasfinanciadas = this.simulacoes.valordespesasfinanciadas;
          this.simulacaoLista[item].valorfinanciamento = this.simulacoes.valorfinanciamento;
          this.simulacaoLista[item].valorfgts = this.simulacoes.valorfgts;
          this.simulacaoLista[item].valorrecursosproprios = this.simulacoes.valorrecursosproprios;
          this.simulacaoLista[item].saldodevedor = this.simulacoes.saldodevedor;
          this.simulacaoLista[item].codinstituicaofinanceira = this.simulacoes.codinstituicaofinanceira;
          this.simulacaoLista[item].codstatussimulacao = this.simulacoes.codstatussimulacao;
          this.simulacaoLista[item].valoravaliacaoinstfinanc = this.simulacoes.valoravaliacaoinstfinanc;
          this.simulacaoLista[item].taxadejuros = this.simulacoes.taxadejuros;
          this.simulacaoLista[item].valorprimeiraparcela = this.simulacoes.taxadejuros;
      }
    }
  }
}
