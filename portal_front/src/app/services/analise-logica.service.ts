import { Simulacoes } from './../models/simulacoes';
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';
import { Analise } from '../models/analise';

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

  visualizarSimulacao(simulacao: Simulacoes, modalidade, amortizacao) {
    let simulacao2: Simulacoes = new Simulacoes();

    simulacao2.codsimulacao = simulacao.codsimulacao;
    simulacao2.valoravaliacao = simulacao.valoravaliacao;
    simulacao2.valorcompravenda = simulacao.valorcompravenda;
    simulacao2.valorcredito = simulacao.valorcredito;

    if (simulacao.dataenviobanco != null) {
      simulacao2.dataenviobanco = simulacao.dataenviobanco;
    }

    for (let item = 0; item < modalidade.length; item++) {
      if(simulacao.codmodalidadesimulacao == modalidade[item].codModalidadeSimulacao){
        simulacao.codmodalidadesimulacao = {
          codModalidadeSimulacao: modalidade[item].codModalidadeSimulacao,
          descModalidadeSimulacao: modalidade[item].descModalidadeSimulacao  
        };
      }
    }
    simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;

    for (let item = 0; item < amortizacao.length; item++) {
      if(simulacao.codtipoamortizacao == amortizacao[item].codtipoamortizacao){
        simulacao.codtipoamortizacao = {
          codtipoamortizacao: amortizacao[item].codtipoamortizacao,
          desctipoamortizacao: amortizacao[item].desctipoamortizacao  
        };
      }
    }
    simulacao2.codtipoamortizacao = simulacao.codtipoamortizacao;

    simulacao2.codsicaq = simulacao.codsicaq;
    simulacao2.correspondente = simulacao.correspondente;
    simulacao2.prazofinanciamento = simulacao.prazofinanciamento;
    simulacao2.valorsubsidio = simulacao.valorsubsidio;
    simulacao2.valordespesasfinanciadas = simulacao.valordespesasfinanciadas;
    simulacao2.valorfinanciamento = simulacao.valorfinanciamento;
    simulacao2.valorfgts = simulacao.valorfgts;
    simulacao2.valorrecursosproprios = simulacao.valorrecursosproprios;
    simulacao2.saldodevedor = simulacao.saldodevedor;
    simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;

    return simulacao2;
  }

  salvarAnalise(analise: Analise, simulacaoLista: Simulacoes[], codcadastro, controle) {
    analise.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    analise.codcadastro  = codcadastro;
    for (var _i = 0; _i < simulacaoLista.length; _i++) {
      var item = simulacaoLista[_i];
      simulacaoLista[_i].codinstituicaofinanceira = item.codinstituicaofinanceira ?  Number(item.codinstituicaofinanceira.codInstituicaoFinanceira):null;
      simulacaoLista[_i].codstatussimulacao = item.codstatussimulacao? Number(item.codstatussimulacao.codstatussimulacao) :null;
      if (item.codmodalidadesimulacao != undefined || item.codmodalidadesimulacao !=null) {
        simulacaoLista[_i].codmodalidadesimulacao = item.codmodalidadesimulacao.codModalidadeSimulacao ? item.codmodalidadesimulacao.codModalidadeSimulacao: item.codmodalidadesimulacao;
      }
      if (item.codtipoamortizacao != undefined || item.codtipoamortizacao !=null) {
        simulacaoLista[_i].codtipoamortizacao = item.codtipoamortizacao.codtipoamortizacao ? item.codtipoamortizacao.codtipoamortizacao: item.codtipoamortizacao;
      }

      if (simulacaoLista[_i].codsicaq == true) {
        simulacaoLista[_i].codsicaq = 0;
      } else {
        simulacaoLista[_i].codsicaq = 1;
      }
    }
    
    analise.simulacoes= simulacaoLista;
    analise.numerocadastroincorporadorafid = analise.numerocadastroincorporadorafid;

    if (controle == true) {
      if (analise.dataassinatura != null) {
        analise.dataassinatura = new Date(analise.dataassinatura);
      }
      if (analise.dataemissao != null) {
        analise.dataemissao = new Date(analise.dataemissao);
      }
      if (analise.datapastamae != null) {
        analise.datapastamae = new Date(analise.datapastamae);
      }

      for (var _i = 0; _i < simulacaoLista.length; _i++) {
        if (analise.simulacoes[_i].dataenviobanco != undefined || analise.simulacoes[_i].dataenviobanco != null) {
          analise.simulacoes[_i].dataenviobanco = analise.simulacoes[_i].dataenviobanco.toISOString();
        }
      }
    }

    return analise;
  }

  formatandoAnalise(analise: Analise, simulacaoLista: Simulacoes[], statussimulacao, instFinan) {
    if (analise.dataassinatura != null) {
      analise.dataassinatura = new Date(analise.dataassinatura);
    }
    if (analise.dataemissao != null) {
      analise.dataemissao = new Date(analise.dataemissao);
    }
    if (analise.datapastamae != null) {
      analise.datapastamae = new Date(analise.datapastamae);
    }
  
    for (var _i = 0; _i < simulacaoLista.length; _i++) {
      analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
    }
  
    for (var _i = 0; _i  < analise.simulacoes.length; _i++) {
      for(let item = 0; item < statussimulacao.length; item++){
        if(analise.simulacoes[_i].codstatussimulacao === statussimulacao[item].codstatussimulacao){
          analise.simulacoes[_i].codstatussimulacao = {
            codstatussimulacao: statussimulacao[item].codstatussimulacao,
            descstatussimulacao: statussimulacao[item].descstatussimulacao              
          };
        }
      }
    }
  
    for (var _i = 0; _i < analise.simulacoes.length; _i++) {
      for (let item = 0; item < instFinan.length; item++) {
        if (analise.simulacoes[_i].codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
          analise.simulacoes[_i].codinstituicaofinanceira = {
            codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
            descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
          }
        }
      }
    }

    return analise;
  }

  receberAnalise(analiseSelecionada, statusSimulEvent, instFinanEvent, statussimulacao, instFinan) {
    let jsonObj: any = JSON.parse(analiseSelecionada);// Recebe os dados enviados pela busca de cadastro
    let analise: Analise = <Analise>jsonObj;

    if (analise.datapastamae != null) {
      analise.datapastamae = new Date(analise.datapastamae);
    }
    if (analise.dataemissao != null) {
      analise.dataemissao = new Date(analise.dataemissao);
    }
    if (analise.dataassinatura != null) {
      analise.dataassinatura = new Date(analise.dataassinatura);
    }

    statusSimulEvent.subscribe(dado => {
      if (dado == true) {
        for (var _i = 0; _i  < analise.simulacoes.length; _i++) {
          for(var item = 0; item < statussimulacao.length; item++){
            if(analise.simulacoes[_i].codstatussimulacao === statussimulacao[item].codstatussimulacao){
                analise.simulacoes[_i].codstatussimulacao = {
                codstatussimulacao: statussimulacao[item].codstatussimulacao,
                descstatussimulacao: statussimulacao[item].descstatussimulacao              
              };
            }
          }
        }
      }
    })

    instFinanEvent.subscribe(dado => {
      if (dado == true) {
        for (var _i = 0; _i < analise.simulacoes.length; _i++) {
          for (var item = 0; item < instFinan.length; item++) {
            if (analise.simulacoes[_i].codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
              analise.simulacoes[_i].codinstituicaofinanceira = {
                codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
                descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
              }
            }
          }
        }
      }
    })
 
    for (var _i = 0; _i < analise.simulacoes.length; _i++) {
      if (analise.simulacoes[_i].dataenviobanco != null) {
        analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
      }
    }

    return analise;
  }
}
