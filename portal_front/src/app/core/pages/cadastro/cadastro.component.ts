import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Compradores } from 'src/app/models/compradores';
import { Contatos } from 'src/app/models/contatos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contato: any = {};
  compradores: Compradores[];
  listaContato: any[] = [];
  estadoCivil: any[];
  tipoContato: any[];
  estado: any[];
  contatoSelecionado: any;

  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  contatos: Contatos = new Contatos();

  constructor(
    private http: HttpClient
  ) {

  }

  OnSubmit() {
    /*let url = 'http://10.6.5.99:8100/api/cliente';
    let json = JSON.stringify(this.formulario.value);
    let header = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXRoZXVzLm1fYyIsImNyZWF0ZWQiOjE1NDQ2NDMwMjU5NDgsImV4cCI6MTU0NDY2MTAyNX0.4AQeH-PfWFyFP4zXmCmnHLRKT3pjhU5JEKrVWND3eqdbXVr_s2iXQCUqH16n1ziCeWezVNjVzRoLXWGj76XAcw'})
  

    this.http.post<FormGroup>(url, json, {headers: header}).subscribe(dados => {
      console.log(dados);
      // reseta o form
      this.formulario.reset();
    },
    (error: any) => alert('erro'));*/
    this.cadInfo.clientes = this.compradores;
    console.log('--')
    console.log(JSON.stringify(this.cadInfo));
    console.log('--')
  }

  ngOnInit() {
    this.estado = [{
    "uf": "AC"
    },     
    {
    "uf": "AL"
    },     
    {
    "uf": "AM"
    },     
    {
    "uf": "AP"
    },     
    {
    "uf": "BA"
    },     
    {
    "uf": "CE"
    },     
    {
    "uf": "DF"
    },     
    {
    "uf": "ES"
    },     
    {
    "uf": "GO"
    },     
    {
    "uf": "MA"
    },     
    {
    "uf": "MG"
    },     
    {
    "uf": "MS"
    },     
    {
    "uf": "MT"
    },     
    {
    "uf": "PA"
    },     
    {
    "uf": "PB"
    },     
    {
    "uf": "PE"
    },     
    {
    "uf": "PI"
    },     
    {
    "uf": "PR"
    },     
    {
    "uf": "RJ"
    },     
    {
    "uf": "RN"
    },     
    {
    "uf": "RO"
    },     
    {
    "uf": "RR"
    },     
    {
    "uf": "RS"
    },     
    {
    "uf": "SC"
    },     
    {
    "uf": "SE"
    },     
    {
    "uf": "SP"
    },     
    {
    "uf": "TO"
    }];

    this.contato = [
      {
        codtipocontato:1,
        tipocontato: 'Telefone',
         desccontato: '1195442443'
        }
    ];

    this.compradores = [];

    this.estadoCivil = [
      {name: 'Solteiro(a)', value: 1},
      {name: 'Casado(a)', value: 2},
      {name: 'Viúvo(a)', value: 3},
      {name: 'Divorciado(a)', value: 4}
    ];

    this.tipoContato = [
      {name: 'Celular', value: 1},
      {name: 'E-mail', value: 2},
      {name: 'Telefone', value: 3}
    ]
  }
  contAny: any;
  adicionarContato (contato: Contatos) {
    var contato2: Contatos = new Contatos();
    this.contAny = contato.codtipocontato as any;
    contato2.tipocontato  = this.contAny.name;
    contato2.codtipocontato = this.contAny.value;
    contato2.desccontato = contato.desccontato;
    this.contato.push(contato2);
    this.contatos.codtipocontato = null;
    this.contatos.desccontato = null;
    console.log(this.contato);
    
  }

  adicionarCompradorLista (comprador: Compradores) {
    var comprador2: Compradores = new Compradores();
    comprador2.cpfcnpj = comprador.cpfcnpj;
    comprador2.codtipocliente = comprador.codtipocliente; 
    comprador2.nomecliente = comprador.nomecliente;
    comprador2.ndocumento = comprador.ndocumento;
    comprador2.orgaoexpedidor = comprador.orgaoexpedidor;
    comprador2.dataexpedicao = comprador.dataexpedicao;
    comprador2.datanascimento = comprador.datanascimento;
    comprador2.codestadocivil = comprador.codestadocivil; 
    comprador2.nacionalidade = comprador.nacionalidade;
    comprador2.profissao = comprador.profissao;
    comprador2.cepresidencial = comprador.cepresidencial;
    comprador2.uf = comprador.uf;
    comprador2.cidade = comprador.cidade; 
    comprador2.bairro = comprador.bairro;
    comprador2.endereco = comprador.endereco;
    comprador2.complemento = comprador.complemento;
    comprador2.numeroendereco = comprador.numeroendereco;
    comprador2.codusuario = comprador.codusuario;
    comprador2.datacadastro = comprador.datacadastro;
    comprador2.valorrenda = comprador.valorrenda;
    comprador2.principal = comprador.principal;
    comprador2.contatos = this.contato;
    this.compradores.push(comprador2);

    console.log(JSON.stringify(this.compradores));
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
    this.comprador.principal = null;
  }
 
  removerContato (contatoC) {
    console.log(contatoC);

    let index = this.contato.indexOf(contatoC);
    this.contato.splice(index, 1);
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
    console.log(f)
    f.reset();
  }
}