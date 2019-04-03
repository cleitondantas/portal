import { Simulacoes } from './../models/simulacoes';
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnaliseLogicaService {

  constructor() { }

  adicionarSimulacao(simulacao: Simulacoes, cod: number) {
    var simulacao2: Simulacoes = new Simulacoes();

    simulacao2.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    simulacao2.codcadastro = cod;
    simulacao2.valoravaliacao = simulacao.valoravaliacao;
    simulacao2.valorcompravenda = simulacao.valorcompravenda;
    simulacao2.valorcredito = simulacao.valorcredito;
    if (simulacao.codmodalidadesimulacao == undefined) {
      simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;
    } else {
      simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao.codModalidadeSimulacao ;
    }
    simulacao2.dataenviobanco = simulacao.dataenviobanco;
    simulacao2.codsicaq = simulacao.codsicaq;
    simulacao2.correspondente = simulacao.correspondente;
    simulacao2.prazofinanciamento = simulacao.prazofinanciamento;
    if (simulacao.codtipoamortizacao == undefined) {
      simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao;
    } else {
      simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao.codtipoamortizacao;
    }
    simulacao2.valorsubsidio = simulacao.valorsubsidio;
    simulacao2.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
    simulacao2.valorfinanciamento = simulacao.valorfinanciamento;
    simulacao2.valorfgts = simulacao.valorfgts;
    simulacao2.valorrecursosproprios = simulacao.valorrecursosproprios;
    simulacao2.saldodevedor = simulacao.saldodevedor;
    simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;

    return simulacao2;
  }

  salvarAlteracoes(simulacaoLista: Simulacoes[],  simulacoes: Simulacoes) {
    for (let item = 0; item < simulacaoLista.length; item++) {
      if (simulacaoLista[item].codsimulacao == simulacoes.codsimulacao) {
          simulacaoLista[item].codcadastro = simulacoes.codcadastro;
          simulacaoLista[item].valoravaliacao = simulacoes.valoravaliacao;
          simulacaoLista[item].valorcompravenda = simulacoes.valorcompravenda;
          simulacaoLista[item].valorcredito = simulacoes.valorcredito;
          if (simulacoes.codmodalidadesimulacao == undefined) {
            simulacaoLista[item].codmodalidadesimulacao = simulacoes.codmodalidadesimulacao;
          } else {
            simulacaoLista[item].codmodalidadesimulacao = simulacoes.codmodalidadesimulacao.codModalidadeSimulacao;
          }
          simulacaoLista[item].dataenviobanco = simulacoes.dataenviobanco;
          simulacaoLista[item].codsicaq = simulacoes.codsicaq;
          simulacaoLista[item].correspondente = simulacoes.correspondente;
          simulacaoLista[item].prazofinanciamento = simulacoes.prazofinanciamento;
          if (simulacoes.codtipoamortizacao == undefined) {
            simulacaoLista[item].codtipoamortizacao = simulacoes.codtipoamortizacao;
          } else {
            simulacaoLista[item].codtipoamortizacao = simulacoes.codtipoamortizacao.codtipoamortizacao;
          }
          simulacaoLista[item].codtipoamortizacao = simulacoes.codtipoamortizacao.codtipoamortizacao
          simulacaoLista[item].valorsubsidio = simulacoes.valorsubsidio;
          simulacaoLista[item].valordespesasfinanciadas = simulacoes.valordespesasfinanciadas;
          simulacaoLista[item].valorfinanciamento = simulacoes.valorfinanciamento;
          simulacaoLista[item].valorfgts = simulacoes.valorfgts;
          simulacaoLista[item].valorrecursosproprios = simulacoes.valorrecursosproprios;
          simulacaoLista[item].saldodevedor = simulacoes.saldodevedor;
          simulacaoLista[item].codinstituicaofinanceira = simulacoes.codinstituicaofinanceira;

          return simulacaoLista[item];
      }
    }
  }
}
