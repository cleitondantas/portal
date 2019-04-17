import { Component, OnInit, EventEmitter } from '@angular/core';
import { DadosFaturamento } from 'src/app/models/dadosfaturamento';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { Analise } from 'src/app/models/analise';
import { SPE } from 'src/app/models/spe';
import { SharedService } from 'src/app/services/shared.service';
import { AnaliseLogicaService } from 'src/app/services/analise-logica.service';

@Component({
  selector: 'app-dados-faturamento',
  templateUrl: './dados-faturamento.component.html',
  styleUrls: ['./dados-faturamento.component.css']
})
export class DadosFaturamentoComponent implements OnInit {
  br: any;
  spe: SPE[];
  speTemp: SPE[];
  speEvent = new EventEmitter<any>();

  constructor(private analiseChamadasService: AnaliseChamadasService,
              private sharedService: SharedService,
              private logicaService: AnaliseLogicaService) { }

  dadosfaturamento: DadosFaturamento  = new DadosFaturamento();


  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log('ngOnDestroy()');
  }
  ngOnInit() {
    this.br = this.sharedService.calendarioBr();

    this.analiseChamadasService.getSPE().subscribe(dados => {
      this.speTemp = dados['data'];
      for (let _i = 0; _i < this.speTemp.length; _i++) {
        const item: SPE = new SPE();
        item.codincorporadora =   this.speTemp[_i].codincorporadora;
        item.descspe = this.speTemp[_i].descspe;
        item.cnpjspe = this.speTemp[_i].cnpjspe;
        this.speTemp[_i] = item;
      }
      this.speEvent.emit(dados);
      this.spe = dados['data'];
    });

    const analiseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');
    if (analiseSelecionada != 'undefined' && analiseSelecionada != null) {
      this.dadosfaturamento = this.logicaService.receberDadosFaturamento(analiseSelecionada, this.dadosfaturamento, this.speEvent);
    }
  }

  salvar(formulario) {
    this.dadosfaturamento.razaosocialspe = this.dadosfaturamento.razaosocialspe.descspe;
    console.log('formulario');
    console.log(formulario);
    console.log('this.dadosfaturamento');
    console.log(this.dadosfaturamento);
    this.analiseChamadasService.postDadosFaturamento(this.dadosfaturamento).subscribe(dados => (console.log(dados['data'])));
  }

  cancelar() {
    this.dadosfaturamento =  new DadosFaturamento();
  }

  preencherSPE(speRecebido: SPE) {
    this.dadosfaturamento.cpfcnpj = speRecebido.cnpjspe;
  }
}
