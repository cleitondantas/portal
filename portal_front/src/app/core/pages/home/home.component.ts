import { CadastroInformacao } from './../../../models/cadastro-informacao';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeChamadasService } from 'src/app/services/home-chamadas.service';
import { Compradores } from 'src/app/models/compradores';
import { Router } from '@angular/router';
import { CadastroChamadasService } from 'src/app/services/cadastro-chamadas.service';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

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

  constructor(private homeChamada: HomeChamadasService,
              private router: Router,
              private cadastroChamada: CadastroChamadasService) { }

  ngOnInit() {
    sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
    this.getListCadastrosTop();
  //  this.getFlux();
  }

  getListCadastrosTop(){
    this.homeChamada.getCadastrosTop().subscribe(event => {
      if (event instanceof HttpResponse) {
        this.cadastroInformacoes = event.body['data'];

        for (let i = 0; i < this.cadastroInformacoes.length; i++) {
          for (let item = 0; item < this.cadastroInformacoes[i].clientes.length; item++) {
            if (this.cadastroInformacoes[i].clientes[item].principal == true) {
              this.cadastrosrecentes.push(this.cadastroInformacoes[i].clientes[item]);
            }
          }
        }

        this.popularInfoTable();
      }
    });
  }

  popularInfoTable() {
    let empreendimento: any[] = [];
    let cadastro;
    this.cadastroChamada.getEmpreendimentos().subscribe(dados => {
      empreendimento = dados['data'];

      for (let i = 0; i < this.cadastrosrecentes.length; i++) {
        cadastro = {nomecliente: this.cadastrosrecentes[i].nomecliente, cpfcnpj: this.cadastrosrecentes[i].cpfcnpj,
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
    });
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
}
