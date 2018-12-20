import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Compradores } from 'src/app/models/compradores';
import { Contatos } from 'src/app/models/contatos';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  data: Date;
  renda: string;
  cep: string;
  contato: any = {};
  compradores: any[];
  compselec: any;
  estadoCivil: any[];
  tipoContato: any[];
  formulario: FormGroup;
  contatoSelecionado: any;
  estado: any[];
  novocontato: Contatos;
  comprador: Compradores[] = [];
  cliente: FormArray;

  constructor(
    private formbuilder: FormBuilder,
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


    console.log(this.formulario.value);
    localStorage.setItem('testes', JSON.stringify(this.formulario.value));
    this.formulario.reset(new CadastroInformacao());
    console.log(CadastroInformacao);
  }

  ngOnInit() {
    this.criarForm()

    this.estado = [{
    "Sigla": "AC",
    "Nome": "Acre"
    },     
    {
    "Sigla": "AL",
    "Nome": "Alagoas"
    },     
    {
    "Sigla": "AM",
    "Nome": "Amazonas"
    },     
    {
    "Sigla": "AP",
    "Nome": "Amapá"
    },     
    {
    "Sigla": "BA",
    "Nome": "Bahia"
    },     
    {
    "Sigla": "CE",
    "Nome": "Ceará"
    },     
    {
    "Sigla": "DF",
    "Nome": "Distrito Federal"
    },     
    {
    "Sigla": "ES",
    "Nome": "Espírito Santo"
    },     
    {
    "Sigla": "GO",
    "Nome": "Goiás"
    },     
    {
    "Sigla": "MA",
    "Nome": "Maranhão"
    },     
    {
    "Sigla": "MG",
    "Nome": "Minas Gerais"
    },     
    {
    "Sigla": "MS",
    "Nome": "Mato Grosso do Sul"
    },     
    {
    "Sigla": "MT",
    "Nome": "Mato Grosso"
    },     
    {
    "Sigla": "PA",
    "Nome": "Pará"
    },     
    {
    "Sigla": "PB",
    "Nome": "Paraíba"
    },     
    {
    "Sigla": "PE",
    "Nome": "Pernambuco"
    },     
    {
    "Sigla": "PI",
    "Nome": "Piauí"
    },     
    {
    "Sigla": "PR",
    "Nome": "Paraná"
    },     
    {
    "Sigla": "RJ",
    "Nome": "Rio de Janeiro"
    },     
    {
    "Sigla": "RN",
    "Nome": "Rio Grande do Norte"
    },     
    {
    "Sigla": "RO",
    "Nome": "Rondônia"
    },     
    {
    "Sigla": "RR",
    "Nome": "Roraima"
    },     
    {
    "Sigla": "RS",
    "Nome": "Rio Grande do Sul"
    },     
    {
    "Sigla": "SC",
    "Nome": "Santa Catarina"
    },     
    {
    "Sigla": "SE",
    "Nome": "Sergipe"
    },     
    {
    "Sigla": "SP",
    "Nome": "São Paulo"
    },     
    {
    "Sigla": "TO",
    "Nome": "Tocantins"
    }]

    this.contato = [
      {tipo: 'Telefone', contato: '1195442443'}
    ];

    this.compradores = [
      {excluir: 'X', nome: 'Giacomo Guilizzoni', cpf: '433.344.123-33', renda: 'R$50000', },
      {excluir: 'X', nome: 'Marco Bottoni', cpf: '343.235.121-32', renda: 'R$10000', },
    ];

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

  criarForm() {
    this.formulario = this.formbuilder.group({
      codoriginacao: [null],
      codcadastroincorporadora: [null],
      codempreendimento: [null],
      blocotorre: [null],
      unidade: [null],
      valorvenda: [null],
      saldodevedor: [null],
      codusuario: [null],
      datacadastro: [null],
      vagaautomovel: [null],
      box: [null],
      numeroapartamento: [null],
      cep: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      endereco: [null],
      complemento: [null],
      uf: [null],
      clientes: this.formbuilder.array([ this.clientes() ])
      })
  }

  clientes(): FormGroup {
    return this.formbuilder.group({
      cpfcnpj: [null],
      codtipocliente: [null],
      nomecliente: [null],
      ndocumento: [null],
      orgaoexpedidor: [null],
      dataexpedicao: [null],
      datanascimento: [null],
      codestadocivil: [null],
      nacionalidade: [null],
      profissao: [null],
      cepresidencial: [null],
      uf: [null],
      cidade: [],
      bairro: [],
      endereco: [],
      complemento: [],
      numeroendereco: [],
      codusuario: [],
      datacadastro: [],
      valorrenda: [],
      contatos: this.formbuilder.group({
        codtipocontato: [],
        cpfcnpj: [],
        desccontato: [],
      }),
      principal: [false],
    })
  }

  addComprador():void {
    this.cliente = this.formulario.get('clientes') as FormArray;
    this.cliente.push(this.clientes());
  }

  createOrUpdateUsuer(comprador: Compradores){
    this.http.put<Compradores>('http://10.6.5.99:8100/api/cliente', comprador);

  }

  adicionarCompradorLista () {
    let nomeComprador = this.formulario.controls.clientes['controls'].nomecliente.value;
    let cpfComprador = this.formulario.controls.clientes['controls'].cpfcnpj.value;
    let rendaComprador = this.formulario.controls.clientes['controls'].valorrenda.value;;

    this.compradores.push({nome: nomeComprador, cpf: cpfComprador, renda: rendaComprador});

  }

  
  adicionarContato () {
    //console.log(this.formulario.controls.clientes['controls'][0].controls.contatos.controls.desccontato.value)
    //console.log(this.formulario.controls.clientes['controls'][0].controls.contatos.controls.codtipocontato.value.name)
    //console.log(this.formulario.controls.clientes['controls'][0].controls.contatos.controls.codtipocontato.value.value)
    this.novocontato = new Contatos();
    this.novocontato.codtipocontato =''+this.formulario.controls.clientes['controls'][0].controls.contatos.controls.codtipocontato.value.value;
    this.novocontato.desccontato = this.formulario.controls.clientes['controls'][0].controls.contatos.controls.desccontato.value;
    console.log(this.novocontato);
    this.contato.push(this.novocontato);
    
    //let tipoC = this.formulario.controls.clientes['controls'].contatos.controls.codtipocontato.value.name;
    //let contatoC = this.formulario.controls.clientes['controls'].contatos.controls.desccontato.value;

    //this.contato.push({tipo: tipoC, contato: contatoC})

    //this.formulario.controls.clientes['controls'].contatos.reset();
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

  limparFormulario () {
    this.formulario.reset();
  }

  consultaCEP() {
    let cep = this.formulario.controls.clientes['controls'].cepresidencial.value;

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
    this.formulario.patchValue({
      clientes: {
        cepresidencial: dados.cep,
        uf: {Sigla: dados.uf, Nome: dados.localidade},
        cidade: dados.localidade,
        bairro: dados.bairro,
        endereco: dados.logradouro,
        complemento: dados.complemento,
      }
    });
  }

  consultaCEPImovel() {
  let cep = this.formulario.controls.cep.value;

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
    this.formulario.patchValue({
      cep: dados.cep,
      uf: {Sigla: dados.uf, Nome: dados.localidade},
      cidade: dados.localidade,
      bairro: dados.bairro,
      endereco: dados.logradouro,
      complemento: dados.complemento,
    });
  }
}