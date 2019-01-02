import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Compradores } from 'src/app/models/compradores';
import { Contatos } from 'src/app/models/contatos';
import { Estadobr } from './../../../models/estadobr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contato: any[];
  contatoDisplay: any[];
  compradores: Compradores[];
  listaContato: any[];
  estadoCivil: any[];
  tipoContato: any[];
  estado: Estadobr[];
  contatoSelecionado: any;
  contAny: any;
  incorp: any[];
  empreendimento: any[];

  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  contatos: Contatos = new Contatos();

  constructor(
    private http: HttpClient
  ) {

  }

  OnSubmit(cadInfo: CadastroInformacao, formulario) {
    /*let url = 'http://10.6.5.99:8100/api/cliente';
    let json = JSON.stringify(this.formulario.value);
    let header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXRoZXVzLm1fYyIsImNyZWF0ZWQiOjE1NDQ2NDMwMjU5NDgsImV4cCI6MTU0NDY2MTAyNX0.4AQeH-PfWFyFP4zXmCmnHLRKT3pjhU5JEKrVWND3eqdbXVr_s2iXQCUqH16n1ziCeWezVNjVzRoLXWGj76XAcw'})
  

    this.http.post<FormGroup>(url, json, {headers: header}).subscribe(dados => {
      console.log(dados);
      // reseta o form
      this.formulario.reset();
    },
    (error: any) => alert('erro'));*/

    cadInfo.uf = cadInfo.uf.uf;
    cadInfo.clientes = this.compradores;
    cadInfo.codempreendimento = Number(cadInfo.codempreendimento);

    //this.http.post<CadastroInformacao>('10.6.5.99:8100/api/cadastro', JSON.stringify(cadInfo));

    console.log(JSON.stringify(this.cadInfo), this.cadInfo);

    formulario.reset();
  }

  ngOnInit() {
    this.http.get<Estadobr[]>('./../../../../assets/estados.json').subscribe(dados => this.estado = dados);

    this.contato = [];

    this.contatoDisplay = [];

    this.compradores = [];

    this.empreendimento = [];

    this.estadoCivil = [
      {value: {id: 1, name: 'Solteiro(a)'}},
      {value: {id: 2, name: 'Casado(a)'}},
      {value: {id: 3, name: 'Viúvo(a)'}},
      {value: {id: 4, name: 'Divorciado(a)'}}
    ];

    this.tipoContato = [
      {value: {id: 1, name: 'Celular'}},
      {value: {id: 2, name: 'Telefone'}},
      {value: {id: 3, name: 'E-mail'}}
    ];

    this.incorp = [
      {codincorporadora: 1, descincorporadora: 'ECOSFERA'},
      {codincorporadora: 2, descincorporadora: 'DIRECIONAL'}
    ]
  }

  adicionarContato (contato: Contatos) {
    var contatoDisplay: Contatos = new Contatos();
    var contato2: Contatos = new Contatos();

    this.contAny = contato.codtipocontato as any;

    contatoDisplay.tipocontato = this.contAny.value.name;
    contatoDisplay.codtipocontato = this.contAny.value.id;
    contatoDisplay.desccontato = contato.desccontato;
    
    contato2.codtipocontato = this.contAny.value.id;
    contato2.desccontato = contato.desccontato; 

    this.contatoDisplay.push(contatoDisplay);
    this.contato.push(contato2);

    this.contatos.codtipocontato = null;
    this.contatos.desccontato = null;
  }

  adicionarCompradorLista (comprador: Compradores) {
    var comprador2: Compradores = new Compradores();

    comprador2.cpfcnpj = comprador.cpfcnpj;
    comprador2.codtipocliente = Number(comprador.codtipocliente); 
    comprador2.nomecliente = comprador.nomecliente;
    comprador2.ndocumento = comprador.ndocumento;
    comprador2.orgaoexpedidor = comprador.orgaoexpedidor;
    comprador2.dataexpedicao = comprador.dataexpedicao;
    comprador2.datanascimento = comprador.datanascimento;
    comprador2.codestadocivil = comprador.codestadocivil.value.id; 
    comprador2.nacionalidade = comprador.nacionalidade;
    comprador2.profissao = comprador.profissao;
    comprador2.cepresidencial = comprador.cepresidencial;
    comprador2.uf = comprador.uf.uf;
    comprador2.cidade = comprador.cidade; 
    comprador2.bairro = comprador.bairro;
    comprador2.endereco = comprador.endereco;
    comprador2.complemento = comprador.complemento;
    comprador2.numeroendereco = comprador.numeroendereco;
    comprador2.codusuario = comprador.codusuario;
    comprador2.datacadastro = comprador.datacadastro;
    comprador2.valorrenda = comprador.valorrenda;
    comprador2.contatos = this.contato;
    comprador2.principal = comprador.principal;

    this.compradores.push(comprador2);

    comprador = new Compradores();

    this.comprador.cpfcnpj = null;
    this.comprador.codtipocliente = null;
    this.comprador.nomecliente = null;
    this.comprador.ndocumento = null;
    this.comprador.orgaoexpedidor = null;
    this.comprador.dataexpedicao = null;
    this.comprador.datanascimento = null;
    this.comprador.codestadocivil = null; 
    this.comprador.nacionalidade = null;
    this.comprador.profissao = null;
    this.comprador.cepresidencial = null;
    this.comprador.uf = null;
    this.comprador.cidade = null; 
    this.comprador.bairro = null;
    this.comprador.endereco = null;
    this.comprador.complemento = null;
    this.comprador.numeroendereco = null;
    this.comprador.codusuario = null;
    this.comprador.datacadastro = null;
    this.comprador.valorrenda = null;
    this.contato = [];
    this.contatoDisplay = [];
    this.comprador.principal = false;
  }
 
  removerContato (contatoC) {
    let index = this.contato.indexOf(contatoC);
    
    this.contato.splice(index, 1);
    this.contatoDisplay.splice(index, 1);
  }

  removerComprador (comprador) {
    let index = this.compradores.indexOf(comprador);
    this.compradores.splice(index, 1);
  }

  consultaCEP() {
    let cep = this.comprador.cepresidencial;

    if (cep != null && cep !== '') {
      cep = cep.replace(/\D/g, '');
    
      if (cep !== '') {
        const  validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
          return this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados));
        }
      }
    }

    return of({});
  }

  populaDadosForm(dados) {
    this.comprador.cepresidencial = dados.cep;
    this.comprador.uf = {uf: dados.uf.toUpperCase()};
    this.comprador.cidade = dados.localidade;
    this.comprador.bairro = dados.bairro;
    this.comprador.endereco = dados.logradouro;
    this.comprador.complemento = dados.complemento;
  }

  consultaCEPImovel() {
  let cep = this.cadInfo.cep;

  if (cep != null && cep !== '') {
    cep = cep.replace(/\D/g, '');
  
    if (cep !== '') {
      const  validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosFormImovel(dados));
      }
    }
  }

  return of({});
  }

  populaDadosFormImovel(dados) {
    this.cadInfo.cep = dados.cep;
    this.cadInfo.uf = {uf: dados.uf.toUpperCase()};
    this.cadInfo.cidade = dados.localidade;
    this.cadInfo.bairro = dados.bairro;
    this.cadInfo.endereco = dados.logradouro;
    this.cadInfo.complemento = dados.complemento;
  }

  limparFormulario(f) {
    f.reset();
  }

  setarTrue(rowData: Compradores) {
    for(var i = 0, len = this.compradores.length; i < len; ++i) {
      this.compradores[i].principal = false;
    }
    
    rowData.principal = true;
  }
}