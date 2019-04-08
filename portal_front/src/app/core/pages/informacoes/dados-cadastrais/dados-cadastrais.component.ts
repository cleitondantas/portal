import { Component, OnInit } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { Simulacoes } from 'src/app/models/simulacoes';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {
  comprador: Compradores = new Compradores()
  analise: Simulacoes = new Simulacoes();

  constructor() { }

  ngOnInit() {
    let cadastroSelecionado = sessionStorage.getItem('CADASTROSELECIONADO');

    if (cadastroSelecionado != "undefined" && cadastroSelecionado != null) {
      let jsonObj: any = JSON.parse(cadastroSelecionado);// Recebe os dados enviados pela busca de cadastro
      let comprador: Compradores = <Compradores>jsonObj;

      this.comprador = comprador;
    }
  }

}
