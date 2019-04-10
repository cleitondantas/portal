import { EstadoCivil } from './../models/estado-civil';
import { Contatos } from 'src/app/models/contatos';
import { Compradores } from 'src/app/models/compradores';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { CadastroInformacao } from '../models/cadastro-informacao';
import { CadastroChamadasService } from './cadastro-chamadas.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroLogicaService {
  contAny: any;

  constructor(private chamadasService: CadastroChamadasService) { }

  adicionarComprador(comprador: Compradores) {
    var comprador2: Compradores = new Compradores();

    comprador2.cpfcnpj = comprador.cpfcnpj;
    comprador2.codtipocliente = Number(comprador.codtipocliente); 
    comprador2.nomecliente = comprador.nomecliente;
    comprador2.ndocumento = comprador.ndocumento;
    comprador2.orgaoexpedidor = comprador.orgaoexpedidor;
    comprador2.dataexpedicao = comprador.dataexpedicao;
    comprador2.datanascimento = comprador.datanascimento;
    comprador2.codestadocivil = comprador.codestadocivil.codestadocivil; 
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
    comprador2.principal = comprador.principal;

    return comprador2;
  }

  adicionarContatosDisplay(contato: Contatos) {
    var contatoDisplay: Contatos = new Contatos();

    this.contAny = contato.codtipocontato as any;

    contatoDisplay.tipocontato = this.contAny.desctipocontato;
    contatoDisplay.codtipocontato = this.contAny.codtipocontato;
    contatoDisplay.desccontato = contato.desccontato;

    return contatoDisplay;
  }

  adicionarContatosLista(contato: Contatos) {
    var contato2: Contatos = new Contatos();

    this.contAny = contato.codtipocontato as any;

    contato2.codtipocontato = this.contAny.codtipocontato;
    contato2.desccontato = contato.desccontato; 

    return contato2;
  }

  limparContatos(contato: Contatos) {
    contato.codtipocontato = null;
    contato.desccontato = null;

    return contato;
  }

  /*compradorSessionStorage(formulario) {
    var a: any = sessionStorage.getItem('compradorLista');
    if (a != null) {
      a = sessionStorage.length;
    } else {
      a = sessionStorage.setItem('compradorLista', JSON.stringify(formulario))
    }
    let i;
    if(a > 0) {
      for (i= a + 1; i > a; i) {
        sessionStorage.setItem('compradorLista' + [i], JSON.stringify(formulario))
      }
    }
  }*/

  atualizarComprador(compradores: Compradores[] = [], comprador: Compradores, contato: any[] = []) {
    for (let item = 0; item < compradores.length; item++) {
      if (compradores[item].cpfcnpj == comprador.cpfcnpj) {
        compradores[item].cpfcnpj = comprador.cpfcnpj;
        compradores[item].codtipocliente = Number(comprador.codtipocliente);
        compradores[item].nomecliente = comprador.nomecliente;
        compradores[item].ndocumento = comprador.ndocumento;
        compradores[item].orgaoexpedidor = comprador.orgaoexpedidor;
        compradores[item].dataexpedicao = comprador.dataexpedicao;
        compradores[item].datanascimento = comprador.datanascimento;
        compradores[item].codestadocivil = comprador.codestadocivil.codestadocivil;
        compradores[item].nacionalidade = comprador.nacionalidade;
        compradores[item].profissao = comprador.profissao;
        compradores[item].contatos = contato;
        compradores[item].cepresidencial = comprador.cepresidencial;
        compradores[item].uf = comprador.uf.uf
        compradores[item].cidade = comprador.cidade;
        compradores[item].bairro = comprador.bairro;
        compradores[item].endereco = comprador.endereco;
        compradores[item].complemento = comprador.complemento;
        compradores[item].numeroendereco = comprador.numeroendereco;
        compradores[item].codusuario = comprador.codusuario;
        compradores[item].datacadastro = comprador.datacadastro;
        compradores[item].valorrenda = comprador.valorrenda;
      }
    }

    return compradores;
  }

  visualizarComprador(comprador: Compradores, comprador2: Compradores, estadoCivil: EstadoCivil[]) {
    comprador.codusuario = comprador2.codusuario;
    comprador.cpfcnpj = comprador2.cpfcnpj;
    comprador.codtipocliente = comprador2.codtipocliente;
    comprador.nomecliente = comprador2.nomecliente;
    comprador.ndocumento = comprador2.ndocumento;
    comprador.orgaoexpedidor = comprador2.orgaoexpedidor;
    comprador.dataexpedicao = new Date(comprador2.dataexpedicao);
    comprador.dataexpedicao.toUTCString();
    comprador.dataexpedicao = this.fixUTC(comprador.dataexpedicao);
    comprador.datanascimento = new Date(comprador2.datanascimento);
    comprador.datanascimento.toUTCString();
    comprador.datanascimento = this.fixUTC(comprador.datanascimento);

    for (let item = 0; item < estadoCivil.length; item++) {
      if(comprador2.codestadocivil == estadoCivil[item].codestadocivil){
        comprador2.codestadocivil = {
          codestadocivil: estadoCivil[item].codestadocivil,
          descestadocivil: estadoCivil[item].descestadocivil  
        };
      }
    }
    comprador.codestadocivil = comprador2.codestadocivil;
    comprador.nacionalidade = comprador2.nacionalidade;
    comprador.profissao = comprador2.profissao;
    comprador.cepresidencial = comprador2.cepresidencial;
    comprador.uf = {uf: comprador2.uf};
    comprador.cidade = comprador2.cidade
    comprador.bairro = comprador2.bairro;
    comprador.endereco = comprador2.endereco;
    comprador.complemento = comprador2.complemento;
    comprador.numeroendereco = comprador2.numeroendereco;
    comprador.datacadastro = new Date(comprador2.datacadastro);
    comprador.valorrenda = comprador2.valorrenda;
    comprador.principal = comprador2.principal;

    return comprador;
  }

  visualizarInfoImovel(cadInfo: CadastroInformacao) {
    let jsonObj: any = JSON.parse(sessionStorage.getItem('CADASTROSELECIONADO'));// Recebe os dados enviados pela busca de cadastro
    let cadastroinformacaoCarregada: CadastroInformacao = <CadastroInformacao>jsonObj;
    //Codigo de parce do objeto carregado para os dados da tela
    cadInfo = cadastroinformacaoCarregada;
    cadInfo.bairro = cadastroinformacaoCarregada.bairro;
    cadInfo.blocotorre = cadastroinformacaoCarregada.blocotorre;
    cadInfo.box = cadastroinformacaoCarregada.box;
    cadInfo.cep = cadastroinformacaoCarregada.cep;
    cadInfo.cidade = cadastroinformacaoCarregada.cidade;
    cadInfo.codcadastro  = cadastroinformacaoCarregada.codcadastro;
    cadInfo.clientes = cadastroinformacaoCarregada.clientes;
    
    this.chamadasService.getEmpreendimentos().subscribe(dados => {
      let empreendimento = dados['data']
      for (let item = 0; item < empreendimento.length; item ++) {
        if (empreendimento[item].codempreendimento == cadastroinformacaoCarregada.codempreendimento) {
          cadInfo.codempreendimento = {
            codempreendimento: cadastroinformacaoCarregada.codempreendimento, 
            cnpjspe: empreendimento[item].cnpjspe, 
            descempreendimento: empreendimento[item].descempreendimento};
        }
      }        
    });

    this.chamadasService.getOriginacao().subscribe(dados => { 
      let originacao = dados['data']
      for (let item = 0; item < originacao.length; item ++) {
        if (Number(originacao[item].codoriginacao) == Number(cadastroinformacaoCarregada.codoriginacao)) {
          cadInfo.codoriginacao = {
            codoriginacao: cadastroinformacaoCarregada.codoriginacao, 
            descoriginacao: originacao[item].descoriginacao};
        }
      }  
    });

    cadInfo.codusuario = cadastroinformacaoCarregada.codusuario;
    cadInfo.complemento = cadastroinformacaoCarregada.complemento;
    cadInfo.numero = cadastroinformacaoCarregada.numero;
    cadInfo.endereco = cadastroinformacaoCarregada.endereco;
    cadInfo.uf = {uf: cadastroinformacaoCarregada.uf};

    this.chamadasService.getIncorporadoras().subscribe(dados => {
      let incorp = dados['data']
      for (let item = 0; item < incorp.length; item ++) {
        if (incorp[item].codincorporadora == cadastroinformacaoCarregada.codincorporadora) {
          cadInfo.codincorporadora = {
            codincorporadora: cadastroinformacaoCarregada.codincorporadora, 
            descincorporadora: incorp[item].descincorporadora};
        }
      }
    });

    cadInfo.dtentrada = new Date(cadastroinformacaoCarregada.dtentrada);
    cadInfo.dtentrada.toUTCString();
    cadInfo.dtentrada = this.fixUTC(cadInfo.dtentrada);
    cadInfo.numerocadastroincorporadorafid = cadastroinformacaoCarregada.numerocadastroincorporadorafid;
    cadInfo.saldodevedor = cadastroinformacaoCarregada.saldodevedor;
    cadInfo.unidade = cadastroinformacaoCarregada.unidade;
    cadInfo.vagaautomovel = cadastroinformacaoCarregada.vagaautomovel;
    cadInfo.valorvenda = cadastroinformacaoCarregada.valorvenda;

    return cadInfo;
  }

  atualizarCadInfo(cadInfo: CadastroInformacao, compradores: Compradores[]) {
    cadInfo.uf = cadInfo.uf.uf;
    cadInfo.clientes = compradores;
    
    cadInfo.codincorporadora = cadInfo.codincorporadora.codincorporadora;
    cadInfo.codempreendimento = cadInfo.codempreendimento.codempreendimento;
    cadInfo.codoriginacao = cadInfo.codoriginacao['codoriginacao'];
    for (let index = 0; index < cadInfo.clientes.length; index++) {
      cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
    
      if(typeof  cadInfo.clientes[index].codestadocivil.codestadocivil !== 'undefined'){
        cadInfo.clientes[index].codestadocivil = cadInfo.clientes[index].codestadocivil.codestadocivil;  
      }
    }
    cadInfo.cep = cadInfo.cep.replace('-', '');
    cadInfo.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);

    return cadInfo;
  }

  confirmacao(cadInfo: CadastroInformacao, compradores: Compradores[]) {
    cadInfo.uf = cadInfo.uf.uf;
    cadInfo.clientes = compradores;
    cadInfo.codincorporadora = cadInfo.codincorporadora.codincorporadora;
    cadInfo.codempreendimento = cadInfo.codempreendimento.codempreendimento;
    cadInfo.codoriginacao = cadInfo.codoriginacao['codoriginacao'];
    for (let index = 0; index < cadInfo.clientes.length; index++) {
      cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
    }
    cadInfo.cep = cadInfo.cep.replace('-', '');
    cadInfo.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);

    return cadInfo;
  }

  private fixUTC(date: Date) {
    let ano  = date.getUTCFullYear();
    let mes = date.getUTCMonth();
    let dia = date.getUTCDate();
    let hora = date.getUTCHours();
    let novaData: Date = new Date(Date.UTC(ano, mes, dia, hora + 3))

    return novaData;
  }
}
