import { Component, OnInit, EventEmitter } from '@angular/core';
import { DadosFaturamento } from 'src/app/models/dadosfaturamento';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { Analise } from 'src/app/models/analise';
import { SPE } from 'src/app/models/spe';

@Component({
  selector: 'app-dados-faturamento',
  templateUrl: './dados-faturamento.component.html',
  styleUrls: ['./dados-faturamento.component.css']
})
export class DadosFaturamentoComponent implements OnInit {
  br: any;
  spe: SPE[];
  speEvent = new EventEmitter<any>();
  
  constructor(private analiseChamadasService: AnaliseChamadasService) { }

  dadosfaturamento: DadosFaturamento  = new DadosFaturamento();

  
  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log("ngOnDestroy()")
  }
  ngOnInit() {
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

    this.analiseChamadasService.getSPE().subscribe(dados => {
      this.spe = dados['data']
      this.speEvent.emit(true);
    });

    let analiseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');    
    if (analiseSelecionada != "undefined") {
      let jsonObj: any = JSON.parse(analiseSelecionada);// Recebe os dados enviados pela busca de cadastro
      let analise: Analise = <Analise>jsonObj;
      this.dadosfaturamento.codanalise= analise.codanalise;
      this.dadosfaturamento.codcadastro = analise.codcadastro;
      this.speEvent.subscribe(dado => {
        this.analiseChamadasService.getDadosFaturamento(analise.codcadastro).subscribe(dados=> {
          for (var _i = 0; _i < dados['data'].length; _i++) { 
            this.dadosfaturamento.coddadosfaturamento = dados['data'][_i].coddadosfaturamento;
            this.dadosfaturamento.codanalise = dados['data'][_i].codanalise;
            this.dadosfaturamento.codcadastro = dados['data'][_i].codcadastro;
            this.dadosfaturamento.cpfcnpj = dados['data'][_i].cpfcnpj;      
            this.dadosfaturamento.parcela1 = dados['data'][_i].parcela1;
            this.dadosfaturamento.notafiscal1   = dados['data'][_i].notafiscal1;

            if (dado == true) {
              for (let item = 0; item < this.spe.length; item++) {
                if (dados['data'][_i].razaosocialspe == this.spe[item].descspe) {
                  dados['data'][_i].razaosocialspe = {
                    cnpjspe: this.spe[item].cnpjspe,
                    codincorporadora: this.spe[item].codincorporadora,
                    descspe: this.spe[item].descspe
                  }
                }
              }
            }
            this.dadosfaturamento.razaosocialspe = dados['data'][_i].razaosocialspe;

            this.dadosfaturamento.mesfaturamento1 = new Date(dados['data'][_i].mesfaturamento1);
            this.dadosfaturamento.parcela2 = dados['data'][_i].parcela2;
            this.dadosfaturamento.notafiscal2 = dados['data'][_i].notafiscal2;
            this.dadosfaturamento.mesfaturamento2 = new Date(dados['data'][_i].mesfaturamento2);
            this.dadosfaturamento.mesfaturado = new Date(dados['data'][_i].mesfaturado);
            this.dadosfaturamento.totalrecebimentoincorporadora = dados['data'][_i].totalrecebimentoincorporadora;
            this.dadosfaturamento.recebimentoteoricobanco = dados['data'][_i].recebimentoteoricobanco;
            this.dadosfaturamento.totalrecebido = dados['data'][_i].totalrecebido;
            this.dadosfaturamento.observacao = dados['data'][_i].observacao;
            this.dadosfaturamento.totalrecebidoincorporadora = dados['data'][_i].totalrecebidoincorporadora;
            this.dadosfaturamento.numeronotafiscal = dados['data'][_i].numeronotafiscal;
          }
          }
        );
      })
    }
  }

  salvar(formulario){
    this.dadosfaturamento.razaosocialspe = this.dadosfaturamento.razaosocialspe.descspe;
    console.log("formulario");
    console.log(formulario);
    console.log("this.dadosfaturamento");
    console.log(this.dadosfaturamento);
    this.analiseChamadasService.postDadosFaturamento(this.dadosfaturamento).subscribe(dados => (console.log(dados['data'])));
  }

  cancelar(){
    this.dadosfaturamento =  new DadosFaturamento();
  }

  preencherSPE(speRecebido: SPE) {
    this.dadosfaturamento.cpfcnpj = speRecebido.cnpjspe;
  }
}
