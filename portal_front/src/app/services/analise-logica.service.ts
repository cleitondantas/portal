import { Simulacoes } from './../models/simulacoes';
import { SharedService } from 'src/app/services/shared.service';
import { Injectable } from '@angular/core';
import { Analise } from '../models/analise';
import { InstiruicaoFinanceiras } from '../models/instituicaoFinanceira';
import { DadosFaturamento } from '../models/dadosfaturamento';
import { AnaliseChamadasService } from './analise-chamadas.service';
import { SPE } from '../models/spe';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import formatCpf from '@brazilian-utils/format-cpf';
import formatCnpj from '@brazilian-utils/format-cnpj';

@Injectable({
  providedIn: 'root'
})
export class AnaliseLogicaService {

  constructor(private analiseChamadasService: AnaliseChamadasService,
              private sharedService: SharedService) { }

  adicionarSimulacao(simulacao: Simulacoes, cod: number) {
    const simulacao2: Simulacoes = new Simulacoes();

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
    simulacao2.simulacaoselecionado = simulacao.simulacaoselecionado;

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

  visualizarSimulacao(simulacao: Simulacoes, modalidade, amortizacao, instFinan: InstiruicaoFinanceiras[]) {
    const simulacao2: Simulacoes = new Simulacoes();

    simulacao2.codsimulacao = simulacao.codsimulacao;
    simulacao2.valoravaliacao = simulacao.valoravaliacao;
    simulacao2.valorcompravenda = simulacao.valorcompravenda;
    simulacao2.valorcredito = simulacao.valorcredito;

    if (simulacao.dataenviobanco != null) {
      simulacao2.dataenviobanco = new Date(simulacao.dataenviobanco);
      simulacao2.dataenviobanco.toUTCString();
      simulacao2.dataenviobanco = this.fixUTC(simulacao2.dataenviobanco);
    }

    for (let item = 0; item < modalidade.length; item++) {
      if (simulacao.codmodalidadesimulacao == modalidade[item].codModalidadeSimulacao) {
        simulacao.codmodalidadesimulacao = {
          codModalidadeSimulacao: modalidade[item].codModalidadeSimulacao,
          descModalidadeSimulacao: modalidade[item].descModalidadeSimulacao
        };
      }
    }
    simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao;

    for (let item = 0; item < amortizacao.length; item++) {
      if (simulacao.codtipoamortizacao == amortizacao[item].codtipoamortizacao) {
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
    for (let item = 0; item < instFinan.length; item++) {
      if (simulacao.codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
        simulacao.codinstituicaofinanceira = {
          codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
          descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
        };
      }
    }
    simulacao2.codinstituicaofinanceira = simulacao.codinstituicaofinanceira;

    return simulacao2;
  }

  salvarAnalise(analise: Analise, simulacaoLista: Simulacoes[], codcadastro, controle) {
    analise.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    analise.codcadastro  = codcadastro;
    for (let _i = 0; _i < simulacaoLista.length; _i++) {
      const item = simulacaoLista[_i];
      simulacaoLista[_i].codinstituicaofinanceira = item.codinstituicaofinanceira ?  Number(item.codinstituicaofinanceira.codInstituicaoFinanceira) : null;
      simulacaoLista[_i].codstatussimulacao = item.codstatussimulacao ? Number(item.codstatussimulacao.codstatussimulacao) : null;
      if (item.codmodalidadesimulacao != undefined || item.codmodalidadesimulacao != null) {
        simulacaoLista[_i].codmodalidadesimulacao = item.codmodalidadesimulacao.codModalidadeSimulacao ? item.codmodalidadesimulacao.codModalidadeSimulacao : item.codmodalidadesimulacao;
      }
      if (item.codtipoamortizacao != undefined || item.codtipoamortizacao != null) {
        simulacaoLista[_i].codtipoamortizacao = item.codtipoamortizacao.codtipoamortizacao ? item.codtipoamortizacao.codtipoamortizacao : item.codtipoamortizacao;
      }

      if (simulacaoLista[_i].codsicaq == true) {
        simulacaoLista[_i].codsicaq = 0;
      } else if (simulacaoLista[_i].codsicaq == false) {
        simulacaoLista[_i].codsicaq = 1;
      }
    }

    analise.simulacoes = simulacaoLista;
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

      for (let _i = 0; _i < simulacaoLista.length; _i++) {
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

    for (let _i = 0; _i < simulacaoLista.length; _i++) {
      analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
    }

    for (let _i = 0; _i  < analise.simulacoes.length; _i++) {
      for (let item = 0; item < statussimulacao.length; item++) {
        if (analise.simulacoes[_i].codstatussimulacao === statussimulacao[item].codstatussimulacao) {
          analise.simulacoes[_i].codstatussimulacao = {
            codstatussimulacao: statussimulacao[item].codstatussimulacao,
            descstatussimulacao: statussimulacao[item].descstatussimulacao
          };
        }
      }
    }

    for (let _i = 0; _i < analise.simulacoes.length; _i++) {
      for (let item = 0; item < instFinan.length; item++) {
        if (analise.simulacoes[_i].codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
          analise.simulacoes[_i].codinstituicaofinanceira = {
            codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
            descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
          };
        }
      }
    }

    return analise;
  }

  receberAnalise(analiseSelecionada, statusSimulEvent, instFinanEvent, instFinan, statussimulacao) {
    const jsonObj: any = JSON.parse(analiseSelecionada); // Recebe os dados enviados pela busca de cadastro
    const analise: Analise = <Analise>jsonObj;

    if (analise.datapastamae != null) {
      analise.datapastamae = new Date(analise.datapastamae);
      analise.datapastamae.toUTCString();
      analise.datapastamae = this.fixUTC(analise.datapastamae);
    }
    if (analise.dataemissao != null) {
      analise.dataemissao = new Date(analise.dataemissao);
      analise.dataemissao.toUTCString();
      analise.dataemissao = this.fixUTC(analise.dataemissao);
    }
    if (analise.dataassinatura != null) {
      analise.dataassinatura = new Date(analise.dataassinatura);
      analise.dataassinatura.toUTCString();
      analise.dataassinatura = this.fixUTC(analise.dataassinatura);
    }

    statusSimulEvent.subscribe(dado => {
      if (dado == true) {
        for (let _i = 0; _i  < analise.simulacoes.length; _i++) {
          for (let item = 0; item < statussimulacao.length; item++) {
            if (analise.simulacoes[_i].codstatussimulacao === statussimulacao[item].codstatussimulacao) {
                analise.simulacoes[_i].codstatussimulacao = {
                codstatussimulacao: statussimulacao[item].codstatussimulacao,
                descstatussimulacao: statussimulacao[item].descstatussimulacao
              };
            }
          }
        }
      }
    });

    instFinanEvent.subscribe(dado => {
      if (dado == true) {
        for (let _i = 0; _i < analise.simulacoes.length; _i++) {
          for (let item = 0; item < instFinan.length; item++) {
            if (analise.simulacoes[_i].codinstituicaofinanceira == instFinan[item].codInstituicaoFinanceira) {
              analise.simulacoes[_i].codinstituicaofinanceira = {
                codInstituicaoFinanceira: instFinan[item].codInstituicaoFinanceira,
                descInstituicaoFinanceira: instFinan[item].descInstituicaoFinanceira
              };
            }
          }
        }
      }
    });

    for (let _i = 0; _i < analise.simulacoes.length; _i++) {
      if (analise.simulacoes[_i].dataenviobanco != null) {
        analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
      }
    }

    return analise;
  }

  receberDadosFaturamento(analiseSelecionada, dadosfaturamento: DadosFaturamento, speEvent) {
    const jsonObj: any = JSON.parse(analiseSelecionada); // Recebe os dados enviados pela busca de cadastro
    const analise: Analise = <Analise>jsonObj;
    dadosfaturamento.codanalise = analise.codanalise;
    dadosfaturamento.codcadastro = analise.codcadastro;
    speEvent.subscribe(dado => {
      const spe: SPE[] = dado['data'];

      this.analiseChamadasService.getDadosFaturamento(analise.codcadastro).subscribe(dados => {
        for (let _i = 0; _i < dados['data'].length; _i++) {
          dadosfaturamento.coddadosfaturamento = dados['data'][_i].coddadosfaturamento;
          dadosfaturamento.codanalise = dados['data'][_i].codanalise;
          dadosfaturamento.codcadastro = dados['data'][_i].codcadastro;

          if (dados['data'][_i].cpfcnpj.length > 11) {
            dadosfaturamento.cpfcnpj = formatCnpj(dados['data'][_i].cpfcnpj);
          } else {
            dadosfaturamento.cpfcnpj = formatCpf(dados['data'][_i].cpfcnpj)
          }

          dadosfaturamento.parcela1 = dados['data'][_i].parcela1;
          dadosfaturamento.notafiscal1   = dados['data'][_i].notafiscal1;

          for (let item = 0; item < spe.length; item++) {
            if (dados['data'][_i].razaosocialspe == spe[item].descspe) {
              dados['data'][_i].razaosocialspe = {
                cnpjspe: spe[item].cnpjspe,
                codincorporadora: spe[item].codincorporadora,
                descspe: spe[item].descspe
              };
            }
          }

          dadosfaturamento.razaosocialspe = dados['data'][_i].razaosocialspe;

          if (dados['data'][_i].mesfaturamento1 != null) {
            dadosfaturamento.mesfaturamento1 = new Date(dados['data'][_i].mesfaturamento1);
          };

          dadosfaturamento.parcela2 = dados['data'][_i].parcela2;
          dadosfaturamento.notafiscal2 = dados['data'][_i].notafiscal2;

          if (dados['data'][_i].mesfaturamento2 != null) {
            dadosfaturamento.mesfaturamento2 = new Date(dados['data'][_i].mesfaturamento2);
          };

          if (dados['data'][_i].mesfaturado != null) {
            dadosfaturamento.mesfaturado = new Date(dados['data'][_i].mesfaturado);
          };

          dadosfaturamento.totalrecebimentoincorporadora = dados['data'][_i].totalrecebimentoincorporadora;
          dadosfaturamento.recebimentoteoricobanco = dados['data'][_i].recebimentoteoricobanco;
          dadosfaturamento.totalrecebido = dados['data'][_i].totalrecebido;
          dadosfaturamento.observacao = dados['data'][_i].observacao;
          dadosfaturamento.totalrecebidoincorporadora = dados['data'][_i].totalrecebidoincorporadora;
          dadosfaturamento.numeronotafiscal = dados['data'][_i].numeronotafiscal;
        }
      }
      );
    });

    return dadosfaturamento;
  }

  getDadosCadastrais(analiseSelecionada) {
    const jsonObj: any = JSON.parse(analiseSelecionada);
    const analise: Simulacoes = <Simulacoes>jsonObj;

    this.analiseChamadasService.getDadosCadastrais('instituicoesfinanceiras').subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
      } else if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (analise.codinstituicaofinanceira == dadosBaixados[i].codInstituicaoFinanceira) {
              analise.codinstituicaofinanceira = dadosBaixados[i].descInstituicaoFinanceira;
          }
        }
        this.sharedService.getBanco = true;
        this.sharedService.hiddenLoader();
      }
    });

    this.analiseChamadasService.getDadosCadastrais('modalidadesimulacoes').subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
      } else if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (analise.codmodalidadesimulacao == dadosBaixados[i].codModalidadeSimulacao) {
            analise.codmodalidadesimulacao = dadosBaixados[i].descModalidadeSimulacao;
          }
        }
        this.sharedService.getModalidade = true;
        this.sharedService.hiddenLoader();
      }
    });

    this.analiseChamadasService.getDadosCadastrais('tipoamortizacao').subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
      } else if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (analise.codtipoamortizacao == dadosBaixados[i].codtipoamortizacao) {
            analise.codtipoamortizacao = dadosBaixados[i].desctipoamortizacao;
          }
        }
        this.sharedService.getAmortizacao = true;
        this.sharedService.hiddenLoader();
      }
    });

    if (analise.codsicaq == 0) {
      analise.codsicaq = 'Possui SICAQ';
    } else if (analise.codsicaq == 1) {
      analise.codsicaq = 'Não possui SICAQ';
    }

    analise.dataenviobanco = new Date(analise.dataenviobanco);
    analise.dataenviobanco.toUTCString();

    return analise;
  }

  private fixUTC(date: Date) {
    const ano  = date.getUTCFullYear();
    const mes = date.getUTCMonth();
    const dia = date.getUTCDate();
    const hora = date.getUTCHours();
    const novaData: Date = new Date(Date.UTC(ano, mes, dia, hora + 3));

    return novaData;
  }
}
