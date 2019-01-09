import { Component, OnInit } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  simulacaoLista: any[] = [];
  simulSelec: any;
  instFinan: any[];

  currencyMask1: any;
  currencyMask2: any;
  currencyMask3: any;
  currencyMask4: any;
  currencyMask5: any;

  simulacoes: Simulacoes = new Simulacoes();

  constructor(
  ) { }

  ngOnInit() {

    this.instFinan = [
      {name: 'Banco do Brasil', value: 'banco do brasil'},
      {name: 'Itau', value: 'itau'},
      {name: 'Santander', value: 'santander'},
      {name: 'Bradesco', value: 'bradesco'},
      {name: 'Caixa', value: 'caixa'},
    ]
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
