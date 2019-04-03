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
import { AnaliseLogicaService } from 'src/app/services/analise-logica.service';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css'],
  providers: [MessageService]
})
export class AnaliseComponent implements OnInit {

  codcadastro: any;
  simulacaoLista: Simulacoes[] = [];
  statusSimulEvent = new EventEmitter<any>();
  instFinanEvent = new EventEmitter<any>();
  salvarAlteracoesButton: boolean = true;
  selectedItem:any;
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
    private messageService: MessageService,
    private logicaService: AnaliseLogicaService

  ) { }
    items:any[];

  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log("ngOnDestroy()")
  }

  ngOnInit() {
    this.simulacaoLista = [];

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

    if (AnaliseSelecionada != "undefined") {
      let jsonObj: any = JSON.parse(AnaliseSelecionada);// Recebe os dados enviados pela busca de cadastro
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

      this.analise = analise;
      this.codcadastro = analise.codcadastro;
      this.simulacoes.codcadastro = this.codcadastro;
      this.analise.numerocadastroincorporadorafid = analise.numerocadastroincorporadorafid

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
        analise.simulacoes[_i].dataenviobanco = new Date(analise.simulacoes[_i].dataenviobanco);
        if(analise.simulacoes[_i].simulacaoselecionado == true){
          this.selectedItem = analise.simulacoes[_i];
        }

        this.simulacaoLista.push(analise.simulacoes[_i]);
      }
      this.controle = true;
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
      this.simulacoes = new Simulacoes();
      this.ngOnInit();
    })
  }

  addItemStatusSimulacao(items:StatusSimulacao[]){
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
      let camposVazios: any[] = [];

      for (var _i in formSimulacao.controls) {
        if (formSimulacao.controls[_i].value == undefined || null || "") {
          let campoVazio = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoVazio = campoVazio.replace(': ', '');
          camposVazios.push(` ` + campoVazio);
        }
      }

      this.confirmationService.confirm({
        message: `As seguintes informações não estão preenchidas:<strong>` + camposVazios + ".</strong><br><br><p>Deseja continuar?</p>",
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          var simulacao2 = this.logicaService.adicionarSimulacao(simulacao, this.codcadastro);
        
          this.simulacaoLista.push(simulacao2);
          this.simulacoes.codinstituicaofinanceira = null;
          console.log(this.simulacaoLista);
          this.messageService.add({key: 'popupAnalise', severity:'success', summary: 'Sucesso!', detail:'Simulação adicionada!'});
        },
        reject: () => {

        }})
    } else {
      this.msgs = [];
      let camposInvalidos: any[] = [];

      for (var _i in formSimulacao.controls) {
        if (formSimulacao.controls[_i].status == "INVALID") {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formSimulacao.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao adicionar comprador!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          })
        }
      }

      if (this.simulacoes.codinstituicaofinanceira == undefined) {
        this.msgs.push({
          severity: 'error',
          summary: 'Erro ao adicionar!',
          detail: `Selecione a instituição financeira.`
        })
      }
    }
  }

  removerSimulacao(simul) {
    let index = this.simulacaoLista.indexOf(simul);
    this.simulacaoLista.splice(index, 1);
    this.messageService.add({key: 'popupAnalise', severity:'warn', summary: 'Aviso!', detail:'Simulação removida!'});
  }

  salvar() {
    this.analise.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
    this.analise.codcadastro  = this.codcadastro;
    for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
      var item = this.simulacaoLista[_i];
      this.simulacaoLista[_i].codinstituicaofinanceira = item.codinstituicaofinanceira ?  Number(item.codinstituicaofinanceira.codInstituicaoFinanceira):null;
      this.simulacaoLista[_i].codstatussimulacao = item.codstatussimulacao? Number(item.codstatussimulacao.codstatussimulacao) :null;
      this.simulacaoLista[_i].codmodalidadesimulacao = item.codmodalidadesimulacao.codModalidadeSimulacao ? item.codmodalidadesimulacao.codModalidadeSimulacao: item.codmodalidadesimulacao;
      this.simulacaoLista[_i].codtipoamortizacao = item.codtipoamortizacao.codtipoamortizacao ? item.codtipoamortizacao.codtipoamortizacao: item.codtipoamortizacao;

      if (this.simulacaoLista[_i].codsicaq == true) {
        this.simulacaoLista[_i].codsicaq = 0;
      } else {
        this.simulacaoLista[_i].codsicaq = 1;
      }
    }
    
    this.analise.simulacoes= this.simulacaoLista;
    this.analise.numerocadastroincorporadorafid = this.analise.numerocadastroincorporadorafid;

    if (this.controle == true) {
      
      if (this.analise.dataassinatura != null) {
        this.analise.dataassinatura = new Date(this.analise.dataassinatura);
      }
      if (this.analise.dataemissao != null) {
        this.analise.dataemissao = new Date(this.analise.dataemissao);
      }
      if (this.analise.datapastamae != null) {
        this.analise.datapastamae = new Date(this.analise.datapastamae);
      }

      for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
        this.analise.simulacoes[_i].dataenviobanco = this.analise.simulacoes[_i].dataenviobanco.toISOString();
      }

      console.log(this.analise);
      console.log(JSON.stringify(this.analise));

      this.messageService.add({key: 'popupAnalise', severity:'success', summary: 'Sucesso!', detail:'Alterações salvas!'});
      setTimeout(() => {
        this.service.putAnaliseSimulacaoContrato(this.analise).subscribe(data => {
          console.log(data)
          
          if (this.analise.dataassinatura != null) {
            this.analise.dataassinatura = new Date(this.analise.dataassinatura);
          }
          if (this.analise.dataemissao != null) {
            this.analise.dataemissao = new Date(this.analise.dataemissao);
          }
          if (this.analise.datapastamae != null) {
            this.analise.datapastamae = new Date(this.analise.datapastamae);
          }
        
          for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
            this.analise.simulacoes[_i].dataenviobanco = new Date(this.analise.simulacoes[_i].dataenviobanco);
          }
        
          for (var _i = 0; _i  < this.simulacaoLista.length; _i++) {
            for(let item = 0; item < this.statussimulacao.length; item++){
              if(this.simulacaoLista[_i].codstatussimulacao === this.statussimulacao[item].codstatussimulacao){
                this.simulacaoLista[_i].codstatussimulacao = {
                  codstatussimulacao: this.statussimulacao[item].codstatussimulacao,
                  descstatussimulacao: this.statussimulacao[item].descstatussimulacao              
                };
              }
            }
          }
        
          for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
            for (let item = 0; item < this.instFinan.length; item++) {
              if (this.simulacaoLista[_i].codinstituicaofinanceira == this.instFinan[item].codInstituicaoFinanceira) {
                this.simulacaoLista[_i].codinstituicaofinanceira = {
                  codInstituicaoFinanceira: this.instFinan[item].codInstituicaoFinanceira,
                  descInstituicaoFinanceira: this.instFinan[item].descInstituicaoFinanceira
                }
              }
            }
          }  
        });
      }, 500);
    } else {
      for (var _i = 0; _i < this.simulacaoLista.length; _i++) {
        this.analise.simulacoes[_i].codcadastro = this.codcadastro;
      }
      this.analise.codcadastro = this.codcadastro;
      console.log("this.analise objeto")
      console.log(this.analise)

      console.log("this.analise Json")
      console.log(JSON.stringify(this.analise));

      this.messageService.add({key: 'popupAnalise', severity:'success', summary: 'Sucesso!', detail:'Análise adicionada!'});

      setTimeout(() => {
        this.service.postAnaliseSimulacaoContrato(this.analise).subscribe(data => {console.log(data)});
      }, 500);
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

  recursoProprio() {
    var calc;
    if (this.simulacoes.valorfgts == undefined) {
      calc = this.simulacoes.valorcompravenda - this.simulacoes.valorcredito;
    } else if (this.simulacoes.valorcredito == undefined) {
      calc = this.simulacoes.valorfgts;
    } else {
      calc = this.simulacoes.valorcompravenda - this.simulacoes.valorcredito - this.simulacoes.valorfgts;
    }
    this.simulacoes.valorrecursosproprios = calc;
  }

  calcularValorCredito() {
    var calc;
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

  salvarAnalise(formDatasDoProcesso){
    this.msgs2 = [];

    if ((this.validaFormulario(formDatasDoProcesso) == true) && (this.simulacaoLista.length !== 0)) {
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
      let camposInvalidos: any[] = [];

      for (var _i in formDatasDoProcesso.controls) {
        if (formDatasDoProcesso.controls[_i].status == "INVALID") {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formDatasDoProcesso.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao salvar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          })
        }
      }

      if (this.simulacaoLista.length == 0) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao salvar!',
          detail: `Adicione pelo menos 1 simulação.`
        })
      }
    }
  }

  simulacaoSelecionado(rowData){
    let simulacao: Simulacoes = rowData.data;
    for (let item = 0; item < this.simulacaoLista.length; item++) {
      if (this.simulacaoLista[item].codinstituicaofinanceira == simulacao.codinstituicaofinanceira) {
        this.simulacaoLista[item].simulacaoselecionado = true;
      }else{
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
    let row: Simulacoes = rowData.data;
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
      this.messageService.add({key: 'popupAnalise', severity:'success', summary: 'Sucesso!', detail:'Alterações salvas!'});
    } else {
      this.msgs = [];
      let camposInvalidos: any[] = [];

      for (var _i in formSimulacao.controls) {
        if (formSimulacao.controls[_i].status == "INVALID") {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formSimulacao.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao salvar alterações!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          })
        }
      }
    }
  }
}
