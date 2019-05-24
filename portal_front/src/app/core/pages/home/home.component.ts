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
  cadastrosrecentes: Compradores[] = [];
  cadastroInformacoes: CadastroInformacao[] = [];
  infosTable: any[] = [];
  load: boolean = false;
  empreendimentos: Empreendimento[];

  constructor(private homeChamada: HomeChamadasService,
              private router: Router,
              private cadastroChamada: CadastroChamadasService,
              private sharedService: SharedService) { }

  ngOnInit() {
    sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior

    if (this.sharedService.empreendimentos.length == 0) {
      this.cadastroChamada.getEmpreendimentos().subscribe(dados => {
        this.sharedService.empreendimentos = dados['data'];
        this.getListCadastrosTop();
      })
    } else {
      this.getListCadastrosTop();
    }
  //  this.getFlux();
  }

  getListCadastrosTop(){
    if (this.sharedService.cadastrosrecentes.length == 0) {
      this.homeChamada.getCadastrosTop().subscribe(event => {
        if (event instanceof HttpResponse) {
          this.cadastroInformacoes = event.body['data'];
  
          for (let i = 0; i < this.cadastroInformacoes.length; i++) {
            for (let item = 0; item < this.cadastroInformacoes[i].clientes.length; item++) {
              if (this.cadastroInformacoes[i].clientes[item].principal == true) {
                this.sharedService.cadastrosrecentes.push(this.cadastroInformacoes[i].clientes[item]);
              }
            }
          }
  
          this.popularInfoTable();
        }
      });
    } else {
      this.homeChamada.getCadastrosTop().subscribe(event => {
        if (event instanceof HttpResponse) {
          this.cadastroInformacoes = event.body['data'];
          let novoComprador: Compradores[] = [];

          for (let i = 0; i < this.cadastroInformacoes.length; i++) {
            for (let item = 0; item < this.cadastroInformacoes[i].clientes.length; item++) {
              if (this.cadastroInformacoes[i].clientes[item].principal == true) {
                novoComprador.push(this.cadastroInformacoes[i].clientes[item]);
              }
            }
          }

          for (let i = 0; i < this.sharedService.cadastrosrecentes.length; i++) {
            if (this.sharedService.cadastrosrecentes[i].cpfcnpj != novoComprador[i].cpfcnpj) {
              this.sharedService.cadastrosrecentes[i] = novoComprador[i];
            }
          }
  
          this.popularInfoTable();
        }
      });
    }

  }

  popularInfoTable() {
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

    setTimeout(() => {
      this.load = true;
    }, 500);

    console.log(this.infosTable)
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
