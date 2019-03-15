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
  statussimulacao: StatusSimulacao[];
  

  simulacoes: Simulacoes = new Simulacoes();
  analise: Analise  = new Analise();
  
  constructor( 
    private confirmationService: ConfirmationService,private service: AnaliseChamadasService, private router: Router, private analiseCred: AnaliseCreditoComponent

  ) { }

  ngOnInit() {
    this.service.getInstFinan().subscribe(dados => this.instFinan = dados['data'])
    this.service.getModalidades().subscribe(dados => this.modalidade = dados['data']);
    this.service.getTipoAmortizacao().subscribe(dados => this.tipoAmortizacao = dados['data']);
    this.service.getStatusSimulacao().subscribe(dados => this.statussimulacao = dados['data']);

    if(sessionStorage.getItem('ANALISESELECIONADA')!=null){
      let jsonObj: any = JSON.parse(sessionStorage.getItem('ANALISESELECIONADA'));// Recebe os dados enviados pela busca de cadastro
      let analise: Analise = <Analise>jsonObj;
      this.analise = analise;
      this.codcadastro =   analise.codcadastro;
      this.simulacoes.codcadastro = this.codcadastro;
      
      for (var _i = 0; _i < analise.simulacoes.length; _i++) {
        //this.adicionarSimulacao(analise.simulacoes[_i]);
        this.simulacaoLista.push(analise.simulacoes[_i]);
      }
/*      
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
  */    
    }else{
    this.codcadastro = SharedService.getInstance().temporario[0];
    this.numfid = SharedService.getInstance().temporario[1];
    }
    sessionStorage.removeItem('ANALISESELECIONADA');
    SharedService.getInstance().temporario[1] = null;
    SharedService.getInstance().temporario[0] = null;

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
      this.service.postAnaliseSimulacaoContrato(this.analise).subscribe(data => console.log(data = data['data']));
}
