import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  simulacao: any[];
  simulSelec: any;
  formulario: FormGroup;
  instFinan: any[];

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formulario = this.formbuilder.group({
      fid: [null],
      valorAval: [null],
      valorComVen: [null],
      modalidade: [null],
      dataEnvBanco: [null],
      valorPrestAprov: [null],
      sicaq: [null],
      correspondente: [null],
      prazoFinan: [null],
      banco: [null],
      tipoAmor: [null],
      valorSub: [null],
      valorAvalBanco: [null],
      fgts: [null],
      recProp: [null],
      simulacao: this.formbuilder.group({
        instFinan: [null]
      }),
      valoresProcesso: this.formbuilder.group({
        despesasFinan: [null],
        finanTotal: [null],
        fgtsValProc: [null],
        recPropValProc: [null],
        saldoDevedor: [null],
        valorVen: [null]
      }),
      datasProcesso: this.formbuilder.group({
        dataPastaMae: [null],
        dataEmissao: [null],
        dataAssinatura: [null]
      })
    })


    this.simulacao = [
      {excluir: '', instituicao: 'Santander', valor: 'R$15000', financiado: ''},
      {excluir: '', instituicao: 'Itau', valor: 'R$19000', financiado: ''},
      {excluir: '', instituicao: 'Caixa', valor: 'R$19000', financiado: ''},
    ]

    this.instFinan = [
      {name: 'Banco do Brasil', value: 'banco do brasil'},
      {name: 'Itau', value: 'itau'},
      {name: 'Santander', value: 'santander'},
      {name: 'Bradesco', value: 'bradesco'},
      {name: 'Caixa', value: 'caixa'},

    ]
  }

  adicionarInstFinan() {
    let banco = this.formulario.controls.simulacao['controls'].instFinan.value.name;

    this.simulacao.push({instituicao: banco})
  }

  removerInstFinan (banco) {
    let index = this.simulacao.indexOf(banco);
    this.simulacao.splice(index, 1);
  }
}
