import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
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
import { AnaliseLogicaService } from 'src/app/services/analise-logica.service';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css'],
  providers: [MessageService]
})
export class AnaliseComponent implements OnInit {
  @ViewChild('formSimulacao', { read: NgForm }) form: any;
  @ViewChild('formDatasDoProcesso', { read: NgForm }) formData: any;

  codcadastro: any;
  simulacaoLista: Simulacoes[] = [];
  statusSimulEvent = new EventEmitter<any>();
  instFinanEvent = new EventEmitter<any>();
  salvarAlteracoesButton = true;
  selectedItem: any;
  instFinan: InstiruicaoFinanceiras[] = [];
  instFinanTemp: InstiruicaoFinanceiras[];
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
    private messageService: MessageService,
    private logicaService: AnaliseLogicaService,
    private sharedService: SharedService

  ) { }
    items: any[];

  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log('ngOnDestroy()');
  }

  ngOnInit() {
    console.log('-------------------------------ngOnInit----AnaliseComponent');
    this.simulacaoLista = [];
    this.br = this.sharedService.calendarioBr();
    this.chamadasInit();
    const AnaliseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');

    if (AnaliseSelecionada != 'undefined' && AnaliseSelecionada != null) {
      const analise: Analise = this.logicaService.receberAnalise(AnaliseSelecionada, this.statusSimulEvent, this.instFinanEvent, this.instFinan, this.statussimulacao );

      this.analise = analise;
      this.codcadastro = analise.codcadastro;
      this.simulacoes.codcadastro = this.codcadastro;
      this.analise.numerocadastroincorporadorafid = analise.numerocadastroincorporadorafid;

      for (let _i = 0; _i < analise.simulacoes.length; _i++) {
        if (analise.simulacoes[_i].simulacaoselecionado == true) {
          this.selectedItem = analise.simulacoes[_i];
        }

        this.simulacaoLista.push(analise.simulacoes[_i]);
      }
      this.controle = true;
      if (this.verificarSelecionado() == true) {
        this.analiseCred.disabled = false;
      } else {
        this.analiseCred.disabled = true;
      }
    } else {
      this.codcadastro = SharedService.getInstance().temporario[0];
      this.analise.numerocadastroincorporadorafid = SharedService.getInstance().temporario[1];
      this.controle = false;
    }

    if (SharedService.getInstance().temporario != null) {
      SharedService.getInstance().temporario = null;
    }

    this.service.buscarAnalise.subscribe(temporario => {
      if (SharedService.getInstance().temporario == null) {
        SharedService.getInstance().temporario = temporario;
      }
      this.form.reset();
      this.formData.reset();
      this.analiseCred.disabled = true;
      this.msgs = [];
      this.msgs2 = [];
      this.ngOnInit();
    });

    this.simulacoes.correspondente = 'Montreal';
    this.simulacoes.simulacaoselecionado = false;
    console.log(this.simulacoes);
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
    if ((this.validaFormulario(formSimulacao) == true) && (this.simulacoes.codinstituicaofinanceira != undefined || null)) {
      const camposVazios: any[] = [];

      for (const _i in formSimulacao.controls) {
        if (formSimulacao.controls[_i].value == undefined || null || '') {
          let campoVazio = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoVazio = campoVazio.replace(': ', '');
          camposVazios.push(`<p> -` + campoVazio);
        }
      }
      if (camposVazios.length > 0) {
        this.confirmationService.confirm({
          message: `As seguintes informações não estão preenchidas:
          <strong>` + camposVazios + '</p></strong><br><p>Deseja continuar?</p>',
          header: 'Confirmação',
          icon: 'pi pi-exclamation-triangle',
          acceptLabel: 'Sim',
          rejectLabel: 'Não',
          accept: () => {
            const simulacao2 = this.logicaService.adicionarSimulacao(simulacao, this.codcadastro);

            this.simulacaoLista.push(simulacao2);
            this.simulacoes.codinstituicaofinanceira = null;
            console.log(this.simulacaoLista);
            this.messageService.add({key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Simulação adicionada!'});
          },
          reject: () => {

          }});
      } else {
        const simulacao2 = this.logicaService.adicionarSimulacao(simulacao, this.codcadastro);

        this.simulacaoLista.push(simulacao2);
        this.simulacoes.codinstituicaofinanceira = null;
        this.messageService.add({key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Simulação adicionada!'});
      }

      this.simulacoes.correspondente = 'Montreal';
      this.simulacoes.simulacaoselecionado = false;
    } else {
      this.adicionarMsgErro(formSimulacao);

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
    this.messageService.add({key: 'popupAnalise', severity: 'warn', summary: 'Aviso!', detail: 'Simulação removida!'});
  }

  salvar() {
    this.analise = this.logicaService.salvarAnalise(this.analise, this.simulacaoLista, this.codcadastro, this.controle);

    if (this.controle == true) {

      console.log(this.analise);
      console.log(JSON.stringify(this.analise));

      this.messageService.add({key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!'});
      setTimeout(() => {
        this.service.putAnaliseSimulacaoContrato(this.analise).subscribe(data => {
          console.log(data);

          this.analise = this.logicaService.formatandoAnalise(this.analise, this.simulacaoLista, this.statussimulacao, this.instFinan);
          this.simulacaoLista = this.analise.simulacoes;
        });
      }, 500);
    } else {
      for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
        this.analise.simulacoes[_i].codcadastro = this.codcadastro;
      }
      this.analise.codcadastro = this.codcadastro;
      SharedService.emitirevento.emit(this.codcadastro);
      setTimeout(() => {
        this.service.postAnaliseSimulacaoContrato(this.analise).subscribe(data => {
          console.log(JSON.stringify(data));
        });
      }, 500);
      console.log(JSON.stringify(this.analise));
      this.messageService.add({key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Análise adicionada!'});
    }

    if (this.verificarSelecionado() == true) {
      this.analiseCred.disabled = false;
      this.analiseCred.selected = 1;
    } else {
      this.router.navigate(['/home']);
    }
  }

  focusDropDown(input) {
    input.click();
  }

  recursoProprio(formSimulacao) {
    let calc;
    const recursoProprio: FormControl = formSimulacao.controls['valorrecursosproprios'];

    if (recursoProprio.pristine == true) {
      if (this.simulacoes.valorfgts == undefined) {
        calc = this.simulacoes.valorcompravenda - this.simulacoes.valorcredito;
      } else if (this.simulacoes.valorcredito == undefined) {
        calc = this.simulacoes.valorfgts;
      } else {
        calc = this.simulacoes.valorcompravenda - this.simulacoes.valorcredito - this.simulacoes.valorfgts;
      }
      this.simulacoes.valorrecursosproprios = calc;
    }
  }

  calcularValorCredito(formSimulacao) {
    let calc;
    const valorcredito: FormControl = formSimulacao.controls['valorcredito'];

    if (valorcredito.pristine == true) {
      if (this.simulacoes.valoravaliacao == undefined) {
        calc = (80 * this.simulacoes.valorcompravenda) / 100;
      } else if (this.simulacoes.valorcompravenda == undefined) {
        calc = (80 * this.simulacoes.valoravaliacao) / 100;
      } else if (this.simulacoes.valoravaliacao < this.simulacoes.valorcompravenda) {
        calc = (80 * this.simulacoes.valoravaliacao) / 100;
      } else {
        calc = (80 * this.simulacoes.valorcompravenda) / 100;
      }
      this.simulacoes.valorcredito = calc;
    }
  }

  salvarAnalise(formDatasDoProcesso) {
    this.msgs2 = [];

    if (this.validaFormulario(formDatasDoProcesso) == true) {
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
      this.adicionarMsgErro(formDatasDoProcesso);
    }
  }

  simulacaoSelecionado(rowData) {
    const simulacao: Simulacoes = rowData.data;
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
      }
    }
  }

  tirarSelecionado(rowData) {
    const row: Simulacoes = rowData.data;
    for (let _i = 0; _i < this.simulacaoLista.length; _i++) {
      if (row.codsimulacao == this.simulacaoLista[_i].codsimulacao) {
        this.simulacaoLista[_i].simulacaoselecionado = false;
      }
    }
  }

  buscarFid() {
    let codCadastro: CadastroInformacao[];
    this.service.getCodCadastro().subscribe(dados => {
      codCadastro = dados['data'];
      for (let _i = 0; _i < codCadastro.length; _i++) {
        if (this.analise.numerocadastroincorporadorafid == codCadastro[_i].numerocadastroincorporadorafid) {
          this.codcadastro = codCadastro[_i].codcadastro;
        }
      }
    });
  }

  visualizarSimulacao(simulacao) {
    this.salvarAlteracoesButton = false;
    this.simulacoes = this.logicaService.visualizarSimulacao(simulacao, this.modalidade, this.tipoAmortizacao, this.instFinan);
  }

  salvarAlteracoes(formSimulacao) {
    this.msgs = [];
    if (this.validaFormulario(formSimulacao) == true) {
      for (let item = 0; item < this.simulacaoLista.length; item++) {
        if (this.simulacaoLista[item].codsimulacao == this.simulacoes.codsimulacao) {
          this.simulacaoLista[item] = this.logicaService.salvarAlteracoes(this.simulacaoLista, this.simulacoes);
        }
      }

      this.salvarAlteracoesButton = true;
      this.simulacoes.codinstituicaofinanceira = null;
      this.messageService.add({key: 'popupAnalise', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!'});
      this.simulacoes.correspondente = 'Montreal';
      this.simulacoes.simulacaoselecionado = false;
    } else {
      this.adicionarMsgErro(formSimulacao);
    }
  }

  adicionarMsgErro(form) {
    this.msgs = [];
    const camposInvalidos: any[] = [];

    for (const _i in form.controls) {
      if (form.controls[_i].status == 'INVALID') {
        let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
        campoInvalido = campoInvalido.replace(': ', '');
        camposInvalidos.push(` ` + campoInvalido);
        form.controls[_i].pristine = false;
        this.msgs = [];
        this.msgs.push({
          severity: 'error',
          summary: 'Erro ao salvar alterações!',
          detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
        });
      }
    }
  }

  chamadasInit() {
    this.service.getInstFinan().subscribe(dados => {
      this.instFinanTemp = dados['data'];
      for (let _i = 0; _i < this.instFinanTemp.length; _i++) {
        const item: InstiruicaoFinanceiras = new InstiruicaoFinanceiras();
        item.codInstituicaoFinanceira =   this.instFinanTemp[_i].codInstituicaoFinanceira;
        item.descInstituicaoFinanceira = this.instFinanTemp[_i].descInstituicaoFinanceira;
        this.instFinan[_i] = item;
      }
      this.instFinanEvent.emit(true);
      this.instFinan = dados['data'];
    });

    this.service.getModalidades().subscribe(dados => this.modalidade = dados['data']);
    this.service.getTipoAmortizacao().subscribe(dados => this.tipoAmortizacao = dados['data']);

    this.service.getStatusSimulacao().subscribe(dados => {
      this.statussimulacaoTemp =  dados['data'];
        for (let _i = 0; _i < this.statussimulacaoTemp.length; _i++) {
          const item: StatusSimulacao = new StatusSimulacao();
          item.codstatussimulacao =   this.statussimulacaoTemp[_i].codstatussimulacao;
          item.descstatussimulacao = this.statussimulacaoTemp[_i].descstatussimulacao;
          this.statussimulacao[_i] = item;
        }
      this.statusSimulEvent.emit(true);
     });

  }

  erro(form) {
    console.log(form);
  }
}
