import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { DadosFaturamento } from 'src/app/models/dadosfaturamento';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { SPE } from 'src/app/models/spe';
import { SharedService } from 'src/app/services/shared.service';
import { AnaliseLogicaService } from 'src/app/services/analise-logica.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MessageService, Message } from 'primeng/api';
import onlyNumbers from '@brazilian-utils/helper-only-numbers';
import formatCpf from '@brazilian-utils/format-cpf';
import formatCnpj from '@brazilian-utils/format-cnpj';

@Component({
  selector: 'app-dados-faturamento',
  templateUrl: './dados-faturamento.component.html',
  styleUrls: ['./dados-faturamento.component.css'],
  providers: [MessageService]
})
export class DadosFaturamentoComponent implements OnInit {
  @ViewChild('formulario', { read: NgForm }) form: any;

  br: any;
  spe: SPE[];
  speTemp: SPE[];
  speEvent = new EventEmitter<any>();
  msgs: Message[] = [];

  constructor(private analiseChamadasService: AnaliseChamadasService,
              private sharedService: SharedService,
              private logicaService: AnaliseLogicaService,
              private router: Router) { }

  dadosfaturamento: DadosFaturamento  = new DadosFaturamento();


  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log('ngOnDestroy()');
}

  ngOnInit() {
    console.log('-------------------------------ngOnInit----DadosFaturamentoComponent');

    this.br = this.sharedService.calendarioBr();
    this.form.reset();
    this.msgs = [];

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
    } else {
      SharedService.emitirevento.subscribe(
        dados => (this.dadosfaturamento.codcadastro = dados)
      );
    }


  }

  salvar(formulario) {
    if (this.validaForm(formulario) == true) {
      this.dadosfaturamento.razaosocialspe = this.dadosfaturamento.razaosocialspe.descspe;
      this.dadosfaturamento.cpfcnpj = onlyNumbers(this.dadosfaturamento.cpfcnpj);
         console.log(JSON.stringify(this.dadosfaturamento));
      this.analiseChamadasService.postDadosFaturamento(this.dadosfaturamento).subscribe(dados => (console.log(JSON.stringify(dados['data']))));
      this.router.navigate(['/home']);
    } else {
      this.msgs = [];
      const camposInvalidos: any[] = [];
      for (const _i in formulario.controls) {
        if (formulario.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formulario.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao salvar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:`
            + camposInvalidos + `</strong>.`
          });
        }
      }
    }
  }

  cancelar() {
    this.dadosfaturamento =  new DadosFaturamento();
  }

  preencherSPE(speRecebido: SPE) {
    let spe2: any;
    spe2 = onlyNumbers(speRecebido.cnpjspe);
    if (spe2.length > 11) {
      speRecebido.cnpjspe = formatCnpj(spe2);
    } else {
      speRecebido.cnpjspe = formatCpf(spe2);
    }
    this.dadosfaturamento.cpfcnpj = speRecebido.cnpjspe;
  }

  validaForm(formSPE: NgForm) {
    if (formSPE.valid == true) {
      return true;
    } else {
      return false;
    }
  }
}
