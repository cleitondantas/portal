import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  simulacaoLista: any[] = [];
  instFinan: any[] = [];
  modalidade: any[] = [];
  tipoAmortizacao: any[] = [];
  simul: any;
  br: any;

  currencyMask1: any;
  currencyMask2: any;
  currencyMask3: any;
  currencyMask4: any;
  currencyMask5: any;

  simulacoes: Simulacoes = new Simulacoes();

  constructor( 
    private http: HttpClient,
    private service: AnaliseChamadasService
  ) { }

  ngOnInit() {
    this.service.getInstFinan().subscribe(dados => this.instFinan = dados['data'])
    this.service.getModalidades().subscribe(dados => this.modalidade = dados['data']);
    this.service.getTipoAmortizacao().subscribe(dados => this.tipoAmortizacao = dados['data']);

    var a = sessionStorage.getItem('cadastro');
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
