import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Analise } from 'src/app/models/analise';
import { AnaliseCreditoComponent } from '../analise-credito.component';
import { ConfirmationService, MessageService, Message } from 'primeng/api';
import { InstiruicaoFinanceiras } from 'src/app/models/instituicaoFinanceira';
import { TipoAmortizacao } from 'src/app/models/tipo-amortizacao';
import { StatusSimulacao } from 'src/app/models/status-simulacao';

import { Modalidades } from 'src/app/models/modalidades';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css'],
  providers: [MessageService]
})
export class AnaliseComponent implements OnInit {

  numfid: any;
  codcadastro: any;
  simulacaoLista: Simulacoes[] = [];
  statusSimulEvent = new EventEmitter<any>();
  instFinanEvent = new EventEmitter<any>();
  salvarAlteracoesButton = true;
  selectedItem: any;
  instFinan: InstiruicaoFinanceiras[];
  modalidade: Modalidades[];
  tipoAmortizacao: TipoAmortizacao[];
  simul: any;
  br: any;
  statussimulacao: StatusSimulacao[] = [];
  statussimulacaoTemp: StatusSimulacao[];
  controle: boolean = this.service.controle;
  msgs: Message[] = [];
  msgs2: Message[] = [];

  simulacoes: Simulacoes = new Simulacoes();
  analise: Analise  = new Analise();

  constructor(
    private confirmationService: ConfirmationService,
    private service: AnaliseChamadasService,
    private router: Router,
    private analiseCred: AnaliseCreditoComponent,
    private messageService: MessageService

  ) { }
    items: any[];

  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log('ngOnDestroy()');
  }

  ngOnInit() {
    this.simulacaoLista = [];

    this.br = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/yy'
    };

    this.service.getInstFinan().subscribe(dados => {
      this.instFinan = dados['data'];
      this.instFinanEvent.emit(true);
    });

    this.service.getModalidades().subscribe(dados => this.modalidade = dados['data']);
    this.service.getTipoAmortizacao().subscribe(dados => this.tipoAmortizacao = dados['data']);

    this.service.getStatusSimulacao().subscribe(data => {
      this.statussimulacaoTemp =  data['data'];
        for (let _i = 0; _i < this.statussimulacaoTemp.length; _i++) {
          // (data['data'][_i] as StatusSimulacao).descstatussimulacao
          const item: StatusSimulacao = new StatusSimulacao();
          item.codstatussimulacao =   this.statussimulacaoTemp[_i].codstatussimulacao;
          item.descstatussimulacao = this.statussimulacaoTemp[_i].descstatussimulacao;
          this.statussimulacao[_i] = item;
        }
      this.statusSimulEvent.emit(true);
     });

    const AnaliseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');

    if (AnaliseSelecionada !== null || undefined) {
      const jsonObj: any = JSON.parse(AnaliseSelecionada); // Recebe os dados enviados pela busca de cadastro
      const analise: Analise = <Analise>jsonObj;

      analise.datapastamae = new Date(analise.datapastamae);
      analise.dataemissao = new Date(analise.dataemissao);
      analise.dataassinatura = new Date(analise.dataassinatura);

      this.analise = analise;
      this.codcadastro = analise.codcadastro;
      this.simulacoes.codcadastro = this.codcadastro;
      this.numfid = analise.numerocadastroincorporadorafid;

      this.statusSimulEvent.subscribe(dado => {
        if (dado == true) {
          for (let _i = 0; _i  < analise.simulacoes.length; _i++) {
            for (let item = 0; item < this.statussimulacao.length; item++) {
              if (analise.simulacoes[_i].codstatussimulacao === this.statussimulacao[item].codstatussimulacao) {
                  analise.simulacoes[_i].codstatussimulacao = {
                  codstatussimulacao: this.statussimulacao[item].codstatussimulacao,
                  descstatussimulacao: this.statussimulacao[item].descstatussimulacao
                };
              }
            }
          }
        }
      });

      this.instFinanEvent.subscribe(dado => {
        if (dado == true) {
          for (let _i = 0; _i < analise.simulacoes.length; _i++) {
            for (let item = 0; item < this.instFinan.length; item++) {
              if (analise.simulacoes[_i].codinstituicaofinanceira == this.instFinan[item].codInstituicaoFinanceira) {
                analise.simulacoes[_i].codinstituicaofinanceira = {
                  codInstituicaoFinanceira: this.instFinan[item].codInstituicaoFinanceira,
                  descInstituicaoFinanceira: this.instFinan[item].descInstituicaoFinanceira
                };
              }
            }
          }
        }
      });

      for (let _i = 0; _i < analise.simulacoes.length; _i++) {
        analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
        if (analise.simulacoes[_i].simulacaoselecionado == true) {
          this.selectedItem = analise.simulacoes[_i];
        }

        this.simulacaoLista.push(analise.simulacoes[_i]);
      }
    } else {
    this.codcadastro = SharedService.getInstance().temporario[0];
    this.numfid = SharedService.getInstance().temporario[1];
    }

    if (SharedService.getInstance().temporario != null) {
      SharedService.getInstance().temporario = null;
    }

    this.service.buscarAnalise.subscribe(dado => {
      this.ngOnInit();
    });
  }

  addItemStatusSimulacao(items: StatusSimulacao[]) {
    this.statussimulacao = items;
  }

  validaFormulario(form) {
    if (form.valid == false ) {
      return false;
    } else {
      return true;
    }
  }

  adicionarSimulacao(simulacao: Simulacoes, formSimulacao) {
    this.msgs = [];
    if ((this.validaFormulario(formSimulacao) == true) && (this.simulacoes.codinstituicaofinanceira !== undefined)) {
      const simulacao2: Simulacoes = new Simulacoes();

      simulacao2.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
      simulacao2.codcadastro = this.codcadastro;
      simulacao2.valoravaliacao = simulacao.valoravaliacao;
      simulacao2.valorcompravenda = simulacao.valorcompravenda;
      simulacao2.valorcredito = simulacao.valorcredito;
      simulacao2.codmodalidadesimulacao = simulacao.codmodalidadesimulacao.codModalidadeSimulacao ;
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

      this.simulacaoLista.push(simulacao2);
      this.simulacoes.codinstituicaofinanceira = null;
      console.log(this.simulacaoLista);
    } else {
      this.msgs = [];
      const camposInvalidos: any[] = [];

      for (const _i in formSimulacao.controls) {
        if (formSimulacao.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formSimulacao.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao adicionar comprador!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          });
        }
      }

      if (this.simulacoes.codinstituicaofinanceira == undefined) {
        this.msgs.push({
          severity: 'error',
          summary: 'Erro ao adicionar!',
          detail: `Selecione a instituição financeira.`
        });
      }
    }
  }

  removerSimulacao(simul) {
    const index = this.simulacaoLista.indexOf(simul);
    this.simulacaoLista.splice(index, 1);
  }

  salvar() {
    this.analise.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    this.analise.codcadastro  = this.codcadastro;
    for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
      const item = this.simulacaoLista[_i];
      this.simulacaoLista[_i].codinstituicaofinanceira = item.codinstituicaofinanceira ?  Number(item.codinstituicaofinanceira.codInstituicaoFinanceira) : null;
      this.simulacaoLista[_i].codstatussimulacao = item.codstatussimulacao ? Number(item.codstatussimulacao.codstatussimulacao) : null;
    }

    this.analise.simulacoes = this.simulacaoLista;
    this.analise.numerocadastroincorporadorafid = this.numfid;
    if (this.controle == true) {
      this.analise.dataassinatura = this.analise.dataassinatura.toISOString();
      this.analise.dataemissao = this.analise.dataemissao.toISOString();
      this.analise.datapastamae = this.analise.datapastamae.toISOString();

      for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
        this.analise.simulacoes[_i].dataenviobanco = this.analise.simulacoes[_i].dataenviobanco.toISOString();
      }

      console.log(this.analise);
      console.log(JSON.stringify(this.analise));
      this.service.putAnaliseSimulacaoContrato(this.analise).subscribe(data => console.log(data));

      this.analise.dataassinatura = new Date(this.analise.dataassinatura);
      this.analise.dataemissao = new Date(this.analise.dataemissao);
      this.analise.datapastamae = new Date(this.analise.datapastamae);

      for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
        this.analise.simulacoes[_i].dataenviobanco = new Date(this.analise.simulacoes[_i].dataenviobanco);
      }
    } else {
      for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
        this.analise.simulacoes[_i].codcadastro = this.codcadastro;
      }
      this.analise.codcadastro = this.codcadastro;
      console.log('this.analise objeto');
      console.log(this.analise);

      console.log('this.analise Json');
      console.log(JSON.stringify(this.analise));

      this.service.postAnaliseSimulacaoContrato(this.analise).subscribe(data => {console.log(data); });
    }

    this.analiseCred.selected = 1;
  }

  focusDropDown(input) {
    input.click();
  }

  recursoProprio() {
    const calc = this.simulacoes.valoravaliacao - this.simulacoes.valordespesasfinanciadas - this.simulacoes.valorfgts;
    this.simulacoes.valorrecursosproprios = calc;
  }

  salvarAnalise(formDatasDoProcesso) {
    this.msgs2 = [];
    const simulacaoSelecionado = this.verificarSelecionado();

    if ((this.validaFormulario(formDatasDoProcesso) == true) && (this.simulacaoLista.length !== 0) && (simulacaoSelecionado == true)) {
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

        }
      });
    } else {
      this.msgs2 = [];
      const camposInvalidos: any[] = [];

      for (const _i in formDatasDoProcesso.controls) {
        if (formDatasDoProcesso.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formDatasDoProcesso.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao salvar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          });
        }
      }

      if (this.simulacaoLista.length == 0) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao salvar!',
          detail: `Adicione pelo menos 1 simulação.`
        });
      }

      if (simulacaoSelecionado == false) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao salvar!',
          detail: `Selecione a simulação financiada.`
        });
      }
    }
  }

  simulacaoSelecionado(simulacao: Simulacoes) {
    for (let item = 0; item < this.simulacaoLista.length; item++) {
      if (this.simulacaoLista[item].codinstituicaofinanceira == simulacao.codinstituicaofinanceira) {
        this.simulacaoLista[item].simulacaoselecionado = true;
      } else {
       this.simulacaoLista[item].simulacaoselecionado = false;
      }
    }
  }

  verificarSelecionado() {
    for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
      if (this.simulacaoLista[_i].simulacaoselecionado == true) {
        return true;
      } else {
        return false;
      }
    }
  }

  buscarFid() {
    let codCadastro: CadastroInformacao[];
    this.service.getCodCadastro().subscribe(dados => {
      codCadastro = dados['data'];
      for (let _i = 0; _i < codCadastro.length; _i++) {
        if (this.numfid == codCadastro[_i].numerocadastroincorporadorafid) {
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
      if (simulacao.codmodalidadesimulacao == this.modalidade[item].codModalidadeSimulacao) {
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
      if (simulacao.codtipoamortizacao == this.tipoAmortizacao[item].codtipoamortizacao) {
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
  }

  salvarAlteracoes(formSimulacao) {
    for (let item = 0; item < this.simulacaoLista.length; item++) {
      if (this.simulacaoLista[item].codsimulacao == this.simulacoes.codsimulacao) {
          this.simulacaoLista[item].codcadastro = this.simulacoes.codcadastro;
          this.simulacaoLista[item].valoravaliacao = this.simulacoes.valoravaliacao;
          this.simulacaoLista[item].valorcompravenda = this.simulacoes.valorcompravenda;
          this.simulacaoLista[item].valorcredito = this.simulacoes.valorcredito;
          this.simulacaoLista[item].codmodalidadesimulacao = this.simulacoes.codmodalidadesimulacao.codModalidadeSimulacao;
          this.simulacaoLista[item].dataenviobanco = this.simulacoes.dataenviobanco;
          this.simulacaoLista[item].codsicaq = this.simulacoes.codsicaq;
          this.simulacaoLista[item].correspondente = this.simulacoes.correspondente;
          this.simulacaoLista[item].prazofinanciamento = this.simulacoes.prazofinanciamento;
          this.simulacaoLista[item].codtipoamortizacao = this.simulacoes.codtipoamortizacao.codtipoamortizacao;
          this.simulacaoLista[item].valorsubsidio = this.simulacoes.valorsubsidio;
          this.simulacaoLista[item].valordespesasfinanciadas = this.simulacoes.valordespesasfinanciadas;
          this.simulacaoLista[item].valorfinanciamento = this.simulacoes.valorfinanciamento;
          this.simulacaoLista[item].valorfgts = this.simulacoes.valorfgts;
          this.simulacaoLista[item].valorrecursosproprios = this.simulacoes.valorrecursosproprios;
          this.simulacaoLista[item].saldodevedor = this.simulacoes.saldodevedor;
          this.simulacaoLista[item].codinstituicaofinanceira = this.simulacoes.codinstituicaofinanceira;
      }
    }

    this.salvarAlteracoesButton = true;
    this.simulacoes.codinstituicaofinanceira = null;
  }
}
