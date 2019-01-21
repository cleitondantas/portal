import { Contatos } from 'src/app/models/contatos';
import { Compradores } from 'src/app/models/compradores';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroLogicaService {
  contAny: any;

  constructor() { }

  adicionarComprador(comprador: Compradores) {
    var comprador2: Compradores = new Compradores();

    comprador2.cpfcnpj = comprador.cpfcnpj;
    comprador2.codtipocliente = Number(comprador.codtipocliente); 
    comprador2.nomecliente = comprador.nomecliente;
    comprador2.ndocumento = comprador.ndocumento;
    comprador2.orgaoexpedidor = comprador.orgaoexpedidor.sigla;
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
    comprador2.principal = comprador.principal;

    return comprador2;
  }

  limparComprador(comprador: Compradores) {
    comprador.cpfcnpj = null;
    comprador.codtipocliente = null;
    comprador.nomecliente = null;
    comprador.ndocumento = null;
    comprador.orgaoexpedidor = null;
    comprador.dataexpedicao = null;
    comprador.datanascimento = null;
    comprador.codestadocivil = null; 
    comprador.nacionalidade = null;
    comprador.profissao = null;
    comprador.cepresidencial = null;
    comprador.uf = null;
    comprador.cidade = null; 
    comprador.bairro = null;
    comprador.endereco = null;
    comprador.complemento = null;
    comprador.numeroendereco = null;
    comprador.codusuario = null;
    comprador.datacadastro = null;
    comprador.valorrenda = null;
    comprador.principal = false;

    return comprador;
  }

  adicionarContatosDisplay(contato: Contatos) {
    var contatoDisplay: Contatos = new Contatos();

    this.contAny = contato.codtipocontato as any;

    contatoDisplay.tipocontato = this.contAny.descTipoContato;
    contatoDisplay.codtipocontato = this.contAny.codTipoContato;
    contatoDisplay.desccontato = contato.desccontato;

    return contatoDisplay;
  }

  adicionarContatosLista(contato: Contatos) {
    var contato2: Contatos = new Contatos();

    this.contAny = contato.codtipocontato as any;

    contato2.codtipocontato = this.contAny.codTipoContato;
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
}
