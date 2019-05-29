import { CadastroInformacao } from './../../../models/cadastro-informacao';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeChamadasService } from 'src/app/services/home-chamadas.service';
import { Compradores } from 'src/app/models/compradores';
import { Router } from '@angular/router';
import { CadastroChamadasService } from 'src/app/services/cadastro-chamadas.service';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { SharedService } from 'src/app/services/shared.service';
import { Empreendimento } from 'src/app/models/empreendimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cadastroInformacoes: CadastroInformacao[] = [];
  infosTable: any[] = [];
  load: boolean = false;
  empreendimentos: Empreendimento[];

  constructor(private homeChamada: HomeChamadasService,
              private router: Router,
              private cadastroChamada: CadastroChamadasService,
              private sharedService: SharedService) { }

  ngOnInit() {
    sessionStorage.removeItem('CADASTROSELECIONADO');
    if (this.sharedService.empreendimentos.length == 0) {

      this.cadastroChamada.getEmpreendimentos().subscribe(dados => {
        this.sharedService.empreendimentos = dados['data'];
        this.getListCadastrosTop();
      })
    } else {
      this.infosTable = this.sharedService.infosTable;
      this.load = true;

      this.homeChamada.getCadastrosTop().subscribe(event => {
        if (event instanceof HttpResponse) {
          let cadInfo: CadastroInformacao[] = event.body['data'];
          let cadastros: Compradores[] = [];
          let mudanca: boolean = false;
          
          for (let i = 0; i < cadInfo.length; i++) {
            for (let item = 0; item < cadInfo[i].clientes.length; item++) {
              if (cadInfo[i].cpfcnpj == cadInfo[i].clientes[item].cpfcnpj) {
                cadastros.push(cadInfo[i].clientes[item]);
              }
            }
          }

          let diferencas = cadastros.filter(results => this.sharedService.cadastrosrecentes.includes(results));
          console.log(diferencas);

          for (let i = 0; i < cadastros.length; i++) {
            if (cadastros[i].cpfcnpj != this.sharedService.cadastrosrecentes[i].cpfcnpj) {
              this.sharedService.cadastrosrecentes[i] = cadastros[i];
              mudanca = true;
            }
          }

          if (mudanca == true) {
            this.cadastroInformacoes = cadInfo;
            this.popularInfoTable();
          }
        }
      })
    }
  }

  getListCadastrosTop(){
    this.homeChamada.getCadastrosTop().subscribe(event => {
      if (event instanceof HttpResponse) {
        this.cadastroInformacoes = event.body['data'];
        this.sharedService.cadastrosrecentes = [];

        for (let i = 0; i < this.cadastroInformacoes.length; i++) {
          for (let item = 0; item < this.cadastroInformacoes[i].clientes.length; item++) {
            if (this.cadastroInformacoes[i].cpfcnpj == this.cadastroInformacoes[i].clientes[item].cpfcnpj) {
              this.sharedService.cadastrosrecentes.push(this.cadastroInformacoes[i].clientes[item]);
            }
          }
        }

        this.popularInfoTable();
      }
    })

  }

  popularInfoTable() {
    this.infosTable = [];
    let empreendimento = this.sharedService.empreendimentos;
    let cadastro;
    for (let i = 0; i < this.sharedService.cadastrosrecentes.length; i++) {
      cadastro = {nomecliente: this.sharedService.cadastrosrecentes[i].nomecliente, cpfcnpj: this.sharedService.cadastrosrecentes[i].cpfcnpj,
                  codempreendimento: this.cadastroInformacoes[i].codempreendimento, endereco: this.cadastroInformacoes[i].endereco,
                  numero: this.cadastroInformacoes[i].numero};
    for (let item = 0; item < empreendimento.length; item ++) {
      if (empreendimento[item].codempreendimento == cadastro.codempreendimento) {
        cadastro.codempreendimento = empreendimento[item].descempreendimento;
      }
    }
    
    this.infosTable.push(cadastro);
    }

    this.sharedService.infosTable = this.infosTable;

    this.load = true;
  }

  irCadastro(cadastro: Compradores) {
    for (let i = 0; i < this.cadastroInformacoes.length; i++) {
      for (let item = 0; item < this.cadastroInformacoes[i].clientes.length; item++) {
        if (this.cadastroInformacoes[i].clientes[item].cpfcnpj == cadastro.cpfcnpj) {
          sessionStorage.setItem('CADASTROSELECIONADO', JSON.stringify(this.cadastroInformacoes[i]));
        }
      }
    }

    this.router.navigate(['/cadastro']);
  }


  getFlux(){
    this.cadastroChamada.getFlux().subscribe(data => console.log(data))
  }

  compararInfo() {
    for (let i = 0; i < this.sharedService.cadastrosrecentes.length; i++) {

    }
  }
}
