import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Analise } from 'src/app/models/analise';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  numfid: any;
  codcadastro: any;
  simulacaoLista: any[] = [];
  
  instFinan: any[] = [];
  modalidade: any[] = [];
  tipoAmortizacao: any[] = [];
  simul: any;
  br: any;

  simulacoes: Simulacoes = new Simulacoes();
  analise: Analise  = new Analise();
  constructor( 
    private http: HttpClient,
    private service: AnaliseChamadasService
  ) { }

  ngOnInit() {
    this.service.getInstFinan().subscribe(dados => this.instFinan = dados['data'])
    this.service.getModalidades().subscribe(dados => this.modalidade = dados['data']);
    this.service.getTipoAmortizacao().subscribe(dados => this.tipoAmortizacao = dados['data']);

    var a = sessionStorage.getItem('cadastro');
    this.numfid  = sessionStorage.getItem('FID');
    this.codcadastro = sessionStorage.getItem('COD');
    console.log('ANALISE FID'+this.numfid);
    console.log('ANALISE COD'+this.codcadastro);
    if(a !== null) {
      this.simul = JSON.parse(a);
    }

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

    console.log(this.simul);
  }

  adicionarSimulacao(simulacao: Simulacoes) {
    var simulacao2: Simulacoes = new Simulacoes();
    var analise2: Analise  = new Analise();
    simulacao2.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
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
/*
    this.simulacoes.valoravaliacao = null;
    this.simulacoes.valorcompravenda = null;
    this.simulacoes.valorcredito = null;
    this.simulacoes.codmodalidadesimulacao = null;
    this.simulacoes.dataenviobanco = null;
    this.simulacoes.codsicaq = null;
    this.simulacoes.correspondente = null;
    this.simulacoes.prazofinanciamento = null;
    this.simulacoes.codtipoamortizacao = null;
    this.simulacoes.valorsubsidio = null;
    this.simulacoes.valordespesasfinanciadas = null;
    this.simulacoes.valorfinanciamento = null;
    this.simulacoes.valorfgts = null;
    this.simulacoes.valorrecursosproprios = null;
    this.simulacoes.saldodevedor = null;
    this.simulacoes.codinstituicaofinanceira = null;
    this.simulacoes.codstatussimulacao = null;
    this.simulacoes.valoravaliacaoinstfinanc = null;
    this.simulacoes.taxadejuros = null;
    this.simulacoes.valorprimeiraparcela = null;
  */
  }

  removerSimulacao(simul) {
    let index = this.simulacaoLista.indexOf(simul);
    this.simulacaoLista.splice(index, 1);
  }

  salvar() {
    this.analise.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    this.analise.codcadastro  = this.codcadastro;
    
    console.log(this.simulacaoLista);
    console.log(JSON.stringify(this.simulacaoLista));
  }
}
