import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  simulacaoLista: any[] = [];
  instFinan: any[] = [];
  simul: any;

  currencyMask1: any;
  currencyMask2: any;
  currencyMask3: any;
  currencyMask4: any;
  currencyMask5: any;

  simulacoes: Simulacoes = new Simulacoes();

  constructor( private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(`http://localhost:8100/api/instituicoesfinanceiras`).subscribe(dados => this.instFinan = dados['data'])

    var a = sessionStorage.getItem('cadastro');
    if(a !== null) {
      this.simul = JSON.parse(a);
    }

    console.log(this.simul);
  }

  adicionarSimulacao(simulacao: Simulacoes) {
    var simulacao2: Simulacoes = new Simulacoes();

    simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;
    simulacao2.codsicaq = simulacao.codsicaq;
    simulacao2.prazofinanciamento = simulacao.prazofinanciamento;
    simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao;
    simulacao2.valorsubsidio = simulacao.valorsubsidio;
    simulacao2.valorfgts = simulacao.valorfgts;
    simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;
    simulacao2.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
    simulacao2.valorrecursosproprios = simulacao.valorrecursosproprios;
    simulacao2.valorfinanciamento = simulacao.valorfinanciamento;

    this.simulacaoLista.push(simulacao2);

    console.log(this.simulacaoLista);
  }

  removerSimulacao(simul) {
    let index = this.simulacaoLista.indexOf(simul);
    
    this.simulacaoLista.splice(index, 1);
  }
}
