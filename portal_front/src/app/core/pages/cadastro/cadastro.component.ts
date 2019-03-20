import { OrgaoExpedidor } from './../../../models/orgao-expedidor';
import { Component, OnInit} from '@angular/core';
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
import { ConfirmationService, Message } from 'primeng/api';
import { Router } from '@angular/router';
import isValidCpf from '@brazilian-utils/is-valid-cpf';
import isValidCnpj from '@brazilian-utils/is-valid-cnpj';
import { SharedService } from 'src/app/services/shared.service';
import emailMask from 'text-mask-addons/dist/emailMask'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  contato: any[] = [];
  contatoDisplay: any[] = [];
  contatoSelecionado: any;
  compradores: Compradores[] = [];
  disabled: boolean = false;

  estadoCivil: EstadoCivil[];
  tipoContato: TipoContato[];
  estado: Estadobr[];
  incorp: Incorporadoras[];
  empreendimento: Empreendimento[];
  originacao: Originacao[];
  tipocliente: TipoClientes[];
  retornocadastro: CadastroInformacao;
  br: any;
  disabledButton: boolean = true;
  mask: Array<string | RegExp>;
  mask2: Array<string | RegExp> = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
  disabledInput: boolean = true;
  msgs: Message[] = [];
  msgs2: Message[]= [];
  controle: boolean = false;

  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  contatos: Contatos = new Contatos();

  constructor(
    private confirmationService: ConfirmationService,
    private chamadasService: CadastroChamadasService,
    private logicaService: CadastroLogicaService,
    private router: Router
  ) { }

  OnSubmit(cadInfo: CadastroInformacao, formulario) {
      this.chamadasService.createUser(cadInfo).subscribe(dados => {
        this.retornocadastro = dados['data'];
        console.log(JSON.stringify(dados['data']));
        console.log("COD "+this.retornocadastro.codcadastro);
        console.log("FID "+this.retornocadastro.numerocadastroincorporadorafid);
        SharedService.getInstance().temporario[0] = this.retornocadastro.codcadastro;
        SharedService.getInstance().temporario[1] = this.retornocadastro.numerocadastroincorporadorafid;
        this.router.navigate(['/analise']);
      });
   // sessionStorage.clear();
    formulario.reset();
  }

  incorpotradoras:any[];
  item: Incorporadoras;

  ngOnInit() {
    this.chamadasService.getEstados().subscribe(dados => this.estado = dados);
    this.chamadasService.getEmpreendimentos().subscribe(dados => this.empreendimento = dados['data']);
    this.chamadasService.getOriginacao().subscribe(dados => this.originacao = dados['data']);
    this.chamadasService.getEstadoCivil().subscribe(dados => this.estadoCivil = dados['data']);
    this.chamadasService.getTipoContato().subscribe(dados => this.tipoContato = dados['data']);
    this.chamadasService.getTipoClientes().subscribe(dados => this.tipocliente = dados['data']);
    this.chamadasService.getIncorporadoras().subscribe(dados => {this.incorp = dados['data']});

    var a = sessionStorage.getItem('comprador');
    if(a !== null) {
      this.comprador = JSON.parse(a);
    }
    var b = sessionStorage.getItem('compraImovel');
    if(b !== null) {
      this.cadInfo = JSON.parse(b);
    }

    this.br = 
    {
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: "Hoje",
      firstDayOfWeek: 1,
      clear: "Limpar",
      dateFormat: "dd/mm/yy"
    }

    this.visualizarInfoImovel();

    this.chamadasService.buscarCadastro.subscribe(dado => {
      this.visualizarInfoImovel();
    });
  }

  adicionarContato (contato: Contatos) {
    var contatoDisplay = this.logicaService.adicionarContatosDisplay(contato);
    var contato2 = this.logicaService.adicionarContatosLista(contato);

    contato2.cpfcnpj = this.comprador.cpfcnpj;

    this.contatoDisplay.push(contatoDisplay);
    this.contato.push(contato2);

    this.contatos = this.logicaService.limparContatos(this.contatos);
    document.getElementById("desccontato").removeAttribute('placeholder');
    this.disabledInput = true;
  }

  adicionarCompradorLista (comprador: Compradores, formCadInfo) {
    this.msgs = [];
    setTimeout(() => {
      if (this.validaFormulario(formCadInfo) == true) {
        var comprador2 = this.logicaService.adicionarComprador(comprador);
        comprador2.contatos = this.contato;
    
        this.compradores.push(comprador2);
        this.disabled = false;
    
        comprador = new Compradores();
    
        formCadInfo.reset();
    
        this.contato = [];
        this.contatoDisplay = [];
        this.msgs = [];
        console.log(this.compradores);
      } else {
        this.msgs = [];
        let camposInvalidos: any[] = [];
  
        for (var _i in formCadInfo.controls) {
          if (formCadInfo.controls[_i].status == "INVALID") {
            let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
            campoInvalido = campoInvalido.replace(': ', '');
            camposInvalidos.push(` ` + campoInvalido);
            formCadInfo.controls[_i].pristine = false;
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Erro ao adicionar comprador!',
              detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
            })
          }
        }
  
        if (this.contato.length == 0) {
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao adicionar comprador!',
            detail: `Adicione pelo menos 1 contato.`
          })
        }
      }
    }, 301);
    
  }
 
  removerContato (contatoC) {
    let index = this.contatoDisplay.indexOf(contatoC);

    this.contato.splice(index, 1);
    this.contatoDisplay.splice(index, 1);
  }

  removerComprador (comprador) {
    let index = this.compradores.indexOf(comprador);
    this.compradores.splice(index, 1);

    if (this.compradores.length <= 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  consultaCEP() {
    let cep = this.comprador.cepresidencial;

    if (cep != null && cep !== '') {
      cep = cep.replace(/\D/g, '');
    
      if (cep !== '') {
        const  validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
          return this.chamadasService.getCep(cep).subscribe(dados => this.populaDadosForm(dados));
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
        return this.chamadasService.getCep(cep).subscribe(dados => this.populaDadosFormImovel(dados));
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

  limparFormulario(cadImovel, cadInfo) {
    this.confirmationService.confirm({
      message: 'Deseja limpar os campos preenchidos?',
      header: 'Atenção!',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        cadImovel.reset();
        cadInfo.reset();
        this.contato = [];
        this.contatoDisplay = [];
        this.compradores = [];
      },
      reject: () => {
          
      }
  });
  }

  setarTrue(rowData: Compradores) {
    for(var i = 0, len = this.compradores.length; i < len; ++i) {
      this.compradores[i].principal = false;
    }
    
    rowData.principal = true;
  }

  confirmacao(cadInfo: CadastroInformacao, formulario) {
    if (this.validaFormImovel(formulario) == true) {
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
          cadInfo.codoriginacao = cadInfo.codoriginacao['codoriginacao'];
          for (let index = 0; index < cadInfo.clientes.length; index++) {
            cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
          }
          cadInfo.cep = cadInfo.cep.replace('-', '');
          cadInfo.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
          this.compradores = [];

          this.OnSubmit(cadInfo, formulario);
          
        
        },
        reject: () => {
        }
      })
    } else {
      this.msgs2 = [];
      let camposInvalidos: any[] = [];

      for (var _i in formulario.controls) {
        if (formulario.controls[_i].status == "INVALID") {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formulario.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao avançar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          })
        }
      }

      if (this.compradores.length == 0) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao avançar!',
          detail: `Cadastre pelo menos 1 comprador.`
        })
      }
    }
  }

  atualizarCadastroInformacoes(cadInfo: CadastroInformacao, formulario: any){
    if (this.validaFormImovel(formulario) == true) {
      cadInfo.uf = cadInfo.uf.uf;
      cadInfo.clientes = this.compradores;
      
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
      this.compradores = [];
  
      console.log(JSON.stringify(cadInfo))
      this.chamadasService.putCadastro(cadInfo).subscribe(dados => this.retornocadastro = dados['data']);
      formulario.reset();
      this.router.navigate(['/home']);
    } else {
      this.msgs2 = [];
      let camposInvalidos: any[] = [];

      for (var _i in formulario.controls) {
        if (formulario.controls[_i].status == "INVALID") {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formulario.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao salvar alterações!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          })
        }
      }

      if (this.compradores.length == 0) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao salvar alterações!',
          detail: `Cadastre pelo menos 1 comprador.`
        })
      }
    }
  }

  verificaCpfCnpj(formCadInfo) {
    let cpf: boolean = isValidCpf(this.comprador.cpfcnpj);
    let cnpj: boolean = isValidCnpj(this.comprador.cpfcnpj);

    if((cpf || cnpj == true) && (this.comprador.cpfcnpj !== null)) {
      return true;
    } else {
      formCadInfo.controls['cpfcnpj'].status = 'INVALID';
      return false;
    }
  }

  validaFormulario(formCadInfo) {
    let cpfcnpj = this.verificaCpfCnpj(formCadInfo);
    if (formCadInfo.valid == false || this.contato.length == 0 || cpfcnpj == false) {
      return false;
    } else {
      return true;
    }
  }

  validaFormImovel(formulario) {
    if (formulario.valid == false || this.compradores.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  validContato(evento) {
    evento.value = evento.value.codtipocontato;
    var input = document.getElementById("desccontato");
    this.contatos.desccontato = '';
    this.disabledInput = false;

    if(evento.value == 1) {
      input.setAttribute('placeholder', '(XX) XXXX-XXXX');
      this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else if (evento.value == 2) {
      input.setAttribute('placeholder', '(XX) XXXXX-XXXX');
      this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else if (evento.value == 3) {
      input.setAttribute('placeholder', 'email@email.com')
      this.mask = emailMask;
    }
  }

  limparCadInfo(cadInfo) {
    this.confirmationService.confirm({
      message: 'Deseja limpar os campos preenchidos?',
      header: 'Atenção!',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        cadInfo.reset();
        this.contato = [];
        this.contatoDisplay = [];
        this.disabledButton = true;
      },
      reject: () => {
      }
  });
  }

  visualizarComprador(comprador:Compradores) {
    this.disabledButton = false;
    this.comprador.cpfcnpj = comprador.cpfcnpj;
    this.comprador.codtipocliente = comprador.codtipocliente;
    this.comprador.nomecliente = comprador.nomecliente;
    this.comprador.ndocumento = comprador.ndocumento;
    this.comprador.orgaoexpedidor = comprador.orgaoexpedidor;
    this.comprador.dataexpedicao = new Date(comprador.dataexpedicao);
    this.comprador.datanascimento = new Date(comprador.datanascimento);

    for (let item = 0; item < this.estadoCivil.length; item++) {
      if(comprador.codestadocivil == this.estadoCivil[item].codestadocivil){
        comprador.codestadocivil = {
          codestadocivil: this.estadoCivil[item].codestadocivil,
          descestadocivil: this.estadoCivil[item].descestadocivil  
        };
      }
    }
    this.comprador.codestadocivil = comprador.codestadocivil;

    this.comprador.nacionalidade = comprador.nacionalidade;
    this.comprador.profissao = comprador.profissao;
    this.comprador.cepresidencial = comprador.cepresidencial;
    this.comprador.uf = {uf: comprador.uf};
    this.comprador.cidade = comprador.cidade
    this.comprador.bairro = comprador.bairro;
    this.comprador.endereco = comprador.endereco;
    this.comprador.complemento = comprador.complemento;
    this.comprador.numeroendereco = comprador.numeroendereco;
    this.comprador.datacadastro = new Date(comprador.datacadastro);
    this.comprador.valorrenda = comprador.valorrenda;

    this.comprador.contatos = comprador.contatos;
    this.contato = comprador.contatos;
    this.contatoDisplay = [];
    for (let item = 0; item < comprador.contatos.length; item++) {
      for (let item2 = 0; item2 <  this.tipoContato.length; item2++) {
        if (this.tipoContato[item2].codtipocontato == comprador.contatos[item].codtipocontato) {
            var contatoDisplay: Contatos = new Contatos();
            contatoDisplay.tipocontato = this.tipoContato[item2].desctipocontato;
            contatoDisplay.desccontato =  comprador.contatos[item].desccontato;
            this.contatoDisplay.push(contatoDisplay);
        }
      }
    }
  }

  visualizarInfoImovel() {
    //Verifica se a tela está sendo carregada vinda do Campo de busca
    if(sessionStorage.getItem('CADASTROSELECIONADO')!=null){
      let jsonObj: any = JSON.parse(sessionStorage.getItem('CADASTROSELECIONADO'));// Recebe os dados enviados pela busca de cadastro
      let cadastroinformacaoCarregada: CadastroInformacao = <CadastroInformacao>jsonObj;
      //Codigo de parce do objeto carregado para os dados da tela
      this.cadInfo = cadastroinformacaoCarregada;
      this.cadInfo.bairro = cadastroinformacaoCarregada.bairro;
      this.cadInfo.blocotorre = cadastroinformacaoCarregada.blocotorre;
      this.cadInfo.box = cadastroinformacaoCarregada.box;
      this.cadInfo.cep = cadastroinformacaoCarregada.cep;
      this.cadInfo.cidade = cadastroinformacaoCarregada.cidade;
      this.cadInfo.codcadastro  = cadastroinformacaoCarregada.codcadastro;
      this.chamadasService.getEstadoCivil().subscribe(dados => {
      this.estadoCivil = dados['data']
        for (let item = 0; item < cadastroinformacaoCarregada.clientes.length; item ++) {
          for (let i = 0; i < this.estadoCivil.length; i ++) {
            if(Number(cadastroinformacaoCarregada.clientes[item].codestadocivil) == Number(this.estadoCivil[i].codestadocivil)){
       
              let descricao = this.estadoCivil[i].descestadocivil;
              cadastroinformacaoCarregada.clientes[item].codestadocivil = {
                codestadocivil: cadastroinformacaoCarregada.clientes[item].codestadocivil,
                descestadocivil: descricao  
              };
            }
          }
        }
        this.compradores = cadastroinformacaoCarregada.clientes;
        this.cadInfo.clientes = cadastroinformacaoCarregada.clientes;
      });
      
      this.chamadasService.getEmpreendimentos().subscribe(dados => {
        this.empreendimento = dados['data']
        for (let item = 0; item < this.empreendimento.length; item ++) {
          if (this.empreendimento[item].codempreendimento == cadastroinformacaoCarregada.codempreendimento) {
            this.cadInfo.codempreendimento = {codempreendimento: cadastroinformacaoCarregada.codempreendimento, cnpjspe: this.empreendimento[item].cnpjspe, descempreendimento: this.empreendimento[item].descempreendimento};
          }
        }        
      });

      this.chamadasService.getOriginacao().subscribe(dados => { 
        this.originacao = dados['data']
        for (let item = 0; item < this.originacao.length; item ++) {
          if (Number(this.originacao[item].codoriginacao) == Number(cadastroinformacaoCarregada.codoriginacao)) {
            this.cadInfo.codoriginacao = {codoriginacao: cadastroinformacaoCarregada.codoriginacao, descoriginacao: this.originacao[item].descoriginacao};
          }
        }  
      });

      this.cadInfo.codusuario = cadastroinformacaoCarregada.codusuario;
      this.cadInfo.complemento = cadastroinformacaoCarregada.complemento;
      this.cadInfo.numero = cadastroinformacaoCarregada.numero;
      this.cadInfo.endereco = cadastroinformacaoCarregada.endereco;
      this.cadInfo.uf = {uf: cadastroinformacaoCarregada.uf};

      this.chamadasService.getIncorporadoras().subscribe(dados => {
        this.incorp = dados['data']
        for (let item = 0; item < this.incorp.length; item ++) {
          if (this.incorp[item].codincorporadora == cadastroinformacaoCarregada.codincorporadora) {
            this.cadInfo.codincorporadora = {codincorporadora: cadastroinformacaoCarregada.codincorporadora, descincorporadora: this.incorp[item].descincorporadora};
          }
        }
      });

      this.cadInfo.datacadastro = new Date(cadastroinformacaoCarregada.datacadastro);
      this.cadInfo.dataentrada = cadastroinformacaoCarregada.dataentrada;
      this.cadInfo.numerocadastroincorporadorafid = cadastroinformacaoCarregada.numerocadastroincorporadorafid;
      this.cadInfo.saldodevedor = cadastroinformacaoCarregada.saldodevedor;
      this.cadInfo.unidade = cadastroinformacaoCarregada.unidade;
      this.cadInfo.vagaautomovel = cadastroinformacaoCarregada.vagaautomovel;
      this.cadInfo.valorvenda = cadastroinformacaoCarregada.valorvenda;
      sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
      this.controle = true;
    }
  }
  
  atualizarComprador(formCadInfo) {
    if (this.validaFormulario(formCadInfo) == true) {
      for (let item = 0; item < this.compradores.length; item++) {
        if (this.compradores[item].cpfcnpj == this.comprador.cpfcnpj) {
          this.compradores[item].cpfcnpj = this.comprador.cpfcnpj;
          this.compradores[item].codtipocliente = Number(this.comprador.codtipocliente);
          this.compradores[item].nomecliente = this.comprador.nomecliente;
          this.compradores[item].ndocumento = this.comprador.ndocumento;
          this.compradores[item].orgaoexpedidor = this.comprador.orgaoexpedidor;
          this.compradores[item].dataexpedicao = this.comprador.dataexpedicao;
          this.compradores[item].datanascimento = this.comprador.datanascimento;
          this.compradores[item].codestadocivil = this.comprador.codestadocivil.codestadocivil;
          this.compradores[item].nacionalidade = this.comprador.nacionalidade;
          this.compradores[item].profissao = this.comprador.profissao;
          this.compradores[item].contatos = this.contato;
          this.compradores[item].cepresidencial = this.comprador.cepresidencial;
          this.compradores[item].uf = this.comprador.uf.uf
          this.compradores[item].cidade = this.comprador.cidade;
          this.compradores[item].bairro = this.comprador.bairro;
          this.compradores[item].endereco = this.comprador.endereco;
          this.compradores[item].complemento = this.comprador.complemento;
          this.compradores[item].numeroendereco = this.comprador.numeroendereco;
          this.compradores[item].codusuario = this.comprador.codusuario;
          this.compradores[item].datacadastro = this.comprador.datacadastro;
          this.compradores[item].valorrenda = this.comprador.valorrenda;
          this.compradores[item].principal = this.comprador.principal;
        }
      }
          
      formCadInfo.reset();
      this.contatoDisplay = [];
      this.contato = [];
      this.msgs = [];
      this.disabledButton = true;
    } else {
      this.msgs = [];
      let camposInvalidos: any[] = [];

      for (var _i in formCadInfo.controls) {
        if (formCadInfo.controls[_i].status == "INVALID") {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formCadInfo.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao salvar alterações!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` + camposInvalidos + `</strong>.`
          })
        }
      }

      if (this.contato.length == 0) {
        this.msgs.push({
          severity: 'error',
          summary: 'Erro ao salvar alterações!',
          detail: `Adicione pelo menos 1 contato.`
        })
      }
    }
  }

  setCursor(cepRecebido){
    var cep = (<HTMLInputElement>document.getElementById(cepRecebido));
    cep.focus();
    cep.setSelectionRange(0, 0);
  }
}
