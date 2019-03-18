import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Analise } from 'src/app/models/analise';
import { AnaliseCreditoComponent } from '../analise-credito.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { InstiruicaoFinanceiras } from 'src/app/models/instituicaoFinanceira';
import { Modalidade } from 'src/app/models/modalidade';
import { TipoAmortizacao } from 'src/app/models/tipo-amortizacao';
import { StatusSimulacao } from 'src/app/models/status-simulacao';
import { async } from '@angular/core/testing';
import { pipe } from '@angular/core/src/render3';
import {map, filter, catchError, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  numfid: any;
  codcadastro: any;
  simulacaoLista: any[] = [];
  
  instFinan: InstiruicaoFinanceiras[];
  modalidade: Modalidade[];
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
    this.service.getInstFinan().subscribe(dados => this.instFinan = dados['data'])
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
     });

    console.log(this.statussimulacao);
    console.log(this.statussimulacao.length);
    console.log("this.statussimulacao");
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

    if(sessionStorage.getItem('ANALISESELECIONADA') != null || sessionStorage.getItem('ANALISESELECIONADA') !== undefined){
      let jsonObj: any = JSON.parse(sessionStorage.getItem('ANALISESELECIONADA'));// Recebe os dados enviados pela busca de cadastro
      let analise: Analise = <Analise>jsonObj;

      if(analise==null){
        return;
      }

      analise.datapastamae = new Date(analise.datapastamae);
      analise.dataemissao = new Date(analise.dataemissao);
      analise.dataassinatura = new Date(analise.dataassinatura);
      analise.datasimulacao = new Date(analise.datasimulacao);
      this.analise = analise;
      this.codcadastro =   analise.codcadastro;
      this.simulacoes.codcadastro = this.codcadastro;


      console.log(this.statussimulacao);
      console.log(this.statussimulacao.length)


    for(var item = 0; item < this.statussimulacao.length; item++){
        console.log(item);
    }
     for (var _i = 0; _i  < analise.simulacoes.length; _i++) {

      /*
      for(var item = 0; item < this.statussimulacao.length; item++){
        if(analise.simulacoes[_i].codstatussimulacao === this.statussimulacao[item].codstatussimulacao){
            analise.simulacoes[_i].codstatussimulacao = {
            codstatussimulacao: this.statussimulacao[item].codstatussimulacao,
            descstatussimulacao: this.statussimulacao[item].descstatussimulacao              
          };
          
        }
      }
*/

    }    

      for (var _i = 0; _i < analise.simulacoes.length; _i++) {
        analise.simulacoes[_i].datasimulacao = new Date(analise.simulacoes[_i].datasimulacao);
        analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
        this.simulacaoLista.push(analise.simulacoes[_i]);
      }
     
      this.simulacoes.codinstituicaofinanceira =  analise.simulacoes[0].codinstituicaofinanceira
      this.simulacoes.codmodalidadesimulacao = analise.simulacoes[0].codmodalidadesimulacao;
      this.simulacoes.codsicaq = analise.simulacoes[0].codsicaq;
      this.simulacoes.codsimulacao = analise.simulacoes[0].codsimulacao;
      this.simulacoes.codstatussimulacao = analise.simulacoes[0].codmodalidadesimulacao;
      this.simulacoes.codtipoamortizacao = analise.simulacoes[0].codtipoamortizacao;
      this.simulacoes.codusuario= analise.simulacoes[0].codusuario;
      this.simulacoes.correspondente = analise.simulacoes[0].correspondente;
      this.simulacoes.dataenviobanco= analise.simulacoes[0].dataenviobanco;
      this.simulacoes.datasimulacao = analise.simulacoes[0].datasimulacao;
   
    }else{
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

    console.log(this.simulacaoLista);
    console.log(JSON.stringify(this.simulacaoLista));

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
    
    this.service.postAnaliseSimulacaoContrato(this.analise);
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
}
