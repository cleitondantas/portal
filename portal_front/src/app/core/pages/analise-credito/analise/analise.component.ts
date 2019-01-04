import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analise',
  templateUrl: './analise.component.html',
  styleUrls: ['./analise.component.css']
})
export class AnaliseComponent implements OnInit {

  simulacao: any[];
  simulSelec: any;
  instFinan: any[];

  constructor(
  ) { }

  ngOnInit() {
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
  }

  removerInstFinan (banco) {

  }
}
