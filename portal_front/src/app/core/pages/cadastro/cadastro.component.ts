import { Originacao } from './../../../models/originacao';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { Compradores } from 'src/app/models/compradores';
import { Contatos } from 'src/app/models/contatos';
import { Estadobr } from './../../../models/estadobr';
import { Empreendimento } from './../../../models/empreendimento';
import { EstadoCivil } from 'src/app/models/estado-civil';
import { TipoContato } from './../../../models/tipo-contato';
import { TipoClientes } from 'src/app/models/tipo-clientes';
import { Incorporadoras } from './../../../models/incorporadoras';
import { environment } from 'src/environments/environment';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contato: any[] = [];
  contatoDisplay: any[] = [];
  compradores: Compradores[] = [];
  listaContato: any[];
  estadoCivil: EstadoCivil[];
  tipoContato: TipoContato[];
  estado: Estadobr[];
  contatoSelecionado: any;
  contAny: any;
  incorp: Incorporadoras[];
  empreendimento: Empreendimento[];
  originacao: Originacao[];
  tipocliente: TipoClientes[];
  retornocadastro: CadastroInformacao;

  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  contatos: Contatos = new Contatos();

  constructor(
    private http: HttpClient,
    private confirmationService: ConfirmationService
  ) {

  }

  OnSubmit(cadInfo: CadastroInformacao, formulario) {
    cadInfo.uf = cadInfo.uf.uf;
    cadInfo.clientes = this.compradores;
    cadInfo.codincorporadora = cadInfo.codincorporadora.codincorporadora;
    cadInfo.codempreendimento = cadInfo.codempreendimento.codempreendimento;
    cadInfo.codoriginacao = cadInfo.codoriginacao['codOriginacao'];
    for (let index = 0; index < cadInfo.clientes.length; index++) {
      cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
    }
    cadInfo.cep = cadInfo.cep.replace('-', '');

    this.compradores = [];

     /*this.http.post<CadastroInformacao>(environment.urlpath + '/api/cadastro', cadInfo).subscribe(res => {
      this.retornocadastro = res,
      console.log(res)
    });*/

    console.log(JSON.stringify(this.cadInfo), cadInfo);

    formulario.reset();
  }

  ngOnInit() {
    this.http.get<Estadobr[]>('./../../../../assets/estados.json').subscribe(dados => this.estado = dados);
    this.http.get<Empreendimento[]>(`http://10.6.5.99:8100/api/empreendimentos`).subscribe(dados => this.empreendimento = dados['data']);
    this.http.get<Originacao[]>(`http://10.6.5.99:8100/api/originacoes`).subscribe(dados => this.originacao = dados['data']);
    this.http.get<EstadoCivil[]>(`http://10.6.5.99:8100/api/estadocivil`).subscribe(dados => this.estadoCivil = dados['data']);
    this.http.get<TipoContato[]>(`http://10.6.5.99:8100/api/tipocontatos`).subscribe(dados => this.tipoContato = dados['data']);
    this.http.get<TipoClientes[]>(`http://10.6.5.99:8100/api/tipoclientes`).subscribe(dados => this.tipocliente = dados['data']);
    this.http.get<Incorporadoras[]>(`http://10.6.5.99:8100/api/incorporadoras`).subscribe(dados => this.incorp = dados['data']);
  }

  adicionarContato (contato: Contatos) {
    var contatoDisplay: Contatos = new Contatos();
    var contato2: Contatos = new Contatos();

    this.contAny = contato.codtipocontato as any;

    contatoDisplay.tipocontato = this.contAny.desctipocontato;
    contatoDisplay.codtipocontato = this.contAny.codtipocontato;
    contatoDisplay.desccontato = contato.desccontato;
    
    contato2.codtipocontato = this.contAny.codtipocontato;
    contato2.cpfcnpj = this.comprador.cpfcnpj;
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
    comprador2.codestadocivil = comprador.codestadocivil.codEstadoCivil; 
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

  confirmacao() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja continuar?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        alert('aceitou')
      },
      reject: () => {
        alert('rejeitou')
      }
    })
  }
}