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
import { CadastroChamadasService } from './../../../services/cadastro-chamadas.service';
import { CadastroLogicaService } from './../../../services/cadastro-logica.service';
import { Originacao } from './../../../models/originacao';
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
  contatoSelecionado: any;

  estadoCivil: EstadoCivil[];
  tipoContato: TipoContato[];
  estado: Estadobr[];
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
    private confirmationService: ConfirmationService,
    private chamadasService: CadastroChamadasService,
    private logicaService: CadastroLogicaService
  ) {

  }

  OnSubmit(cadInfo: CadastroInformacao, formulario) {
    this.chamadasService.createUser(cadInfo).subscribe(res => {
      this.retornocadastro = res,
      console.log(res)
    });
    
    console.log(JSON.stringify(this.cadInfo), cadInfo);

    formulario.reset();
  }

  ngOnInit() {
    this.chamadasService.getEstados().subscribe(dados => this.estado = dados);
    this.chamadasService.getEmpreendimentos().subscribe(dados => this.empreendimento = dados['data']);
    this.chamadasService.getOriginacao().subscribe(dados => this.originacao = dados['data']);
    this.chamadasService.getEstadoCivil().subscribe(dados => this.estadoCivil = dados['data']);
    this.chamadasService.getTipoContato().subscribe(dados => this.tipoContato = dados['data']);
    this.chamadasService.getTipoClientes().subscribe(dados => this.tipocliente = dados['data']);
    //this.chamadasService.getIncorporadoras().subscribe(dados => this.incorp = dados['data']);
  }

  adicionarContato (contato: Contatos) {
    var contatoDisplay = this.logicaService.adicionarContatosDisplay(contato);
    var contato2 = this.logicaService.adicionarContatosLista(contato);

    contato2.cpfcnpj = this.comprador.cpfcnpj;

    this.contatoDisplay.push(contatoDisplay);
    this.contato.push(contato2);

    this.contatos = this.logicaService.limparContatos(this.contatos);
  }

  adicionarCompradorLista (comprador: Compradores) {
    var comprador2 = this.logicaService.adicionarComprador(comprador);
    comprador2.contatos = this.contato;

    this.compradores.push(comprador2);

    comprador = new Compradores();

    this.comprador = this.logicaService.limparComprador(this.comprador);

    this.contato = [];
    this.contatoDisplay = [];
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

  confirmacao(cadInfo: CadastroInformacao, formulario) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja continuar?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
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


        this.OnSubmit(cadInfo, formulario);
      },
      reject: () => {
        alert('rejeitou')
      }
    })
  }
}