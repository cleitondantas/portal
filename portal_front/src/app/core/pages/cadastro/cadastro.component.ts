import { OrgaoExpedidor } from './../../../models/orgao-expedidor';
import { Component, OnInit } from '@angular/core';
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
import { CadastroProposta } from 'src/app/models/cadastroPorposta';

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
  br: any;
  disabled: boolean = true;
  mask: Array<string | RegExp>;
  disabledInput: boolean = true;
  msgs: Message[] = [];
  msgs2: Message[]= [];

  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  contatos: Contatos = new Contatos();

  constructor(
    private confirmationService: ConfirmationService,
    private chamadasService: CadastroChamadasService,
    private logicaService: CadastroLogicaService,
    private router: Router
  ) {

  }

  OnSubmit(cadInfo: CadastroInformacao, formulario) {
   this.chamadasService.createUser(cadInfo).subscribe(dados => {
      this.retornocadastro = dados['data'];
      console.log(JSON.stringify(dados['data']));
      console.log("COD "+this.retornocadastro.codcadastro);
      console.log("FID "+this.retornocadastro.numerocadastroincorporadorafid);
      sessionStorage.setItem('FID',this.retornocadastro.numerocadastroincorporadorafid+"");
      sessionStorage.setItem('COD',this.retornocadastro.codcadastro+"");
    });

    console.log(JSON.stringify(this.cadInfo), cadInfo);
    
   // sessionStorage.clear();
    formulario.reset();
  }

  ngOnInit() {
    this.chamadasService.getEstados().subscribe(dados => this.estado = dados);
    this.chamadasService.getEmpreendimentos().subscribe(dados => this.empreendimento = dados['data']);
    this.chamadasService.getOriginacao().subscribe(dados => this.originacao = dados['data']);
    this.chamadasService.getEstadoCivil().subscribe(dados => this.estadoCivil = dados['data']);
    this.chamadasService.getTipoContato().subscribe(dados => this.tipoContato = dados['data']);
    this.chamadasService.getTipoClientes().subscribe(dados => this.tipocliente = dados['data']);
    this.chamadasService.getIncorporadoras().subscribe(dados => this.incorp = dados['data']);

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

    //Verifica se a tela está sendo carregada vinda do Campo de busca
    if(sessionStorage.getItem('CADASTROSELECIONADO')!=null){
      let jsonObj: any = JSON.parse(sessionStorage.getItem('CADASTROSELECIONADO'));// Recebe os dados enviados pela busca de cadastro
      let cadastroinformacaoCarregada: CadastroInformacao = <CadastroInformacao>jsonObj;
      console.log(cadastroinformacaoCarregada)
      this.compradores = cadastroinformacaoCarregada.clientes;
      
      //Codigo de parce do objeto carregado para os dados da tela
      //this.cadInfo = cadastroinformacaoCarregada;
      this.cadInfo.bairro = cadastroinformacaoCarregada.bairro;
      this.cadInfo.blocotorre = cadastroinformacaoCarregada.blocotorre;
      this.cadInfo.box = cadastroinformacaoCarregada.box;
      this.cadInfo.cep = cadastroinformacaoCarregada.cep;
      this.cadInfo.cidade = cadastroinformacaoCarregada.cidade;
      this.cadInfo.clientes  = cadastroinformacaoCarregada.clientes;
      this.cadInfo.codcadastro  = cadastroinformacaoCarregada.codcadastro;
      this.cadInfo.codempreendimento  = cadastroinformacaoCarregada.codempreendimento;
      this.cadInfo.codoriginacao = cadastroinformacaoCarregada.codoriginacao;
      this.cadInfo.codusuario = cadastroinformacaoCarregada.codusuario;
      this.cadInfo.complemento = cadastroinformacaoCarregada.complemento;
      this.cadInfo.numero = cadastroinformacaoCarregada.numero;
      this.cadInfo.endereco = cadastroinformacaoCarregada.endereco;
      this.cadInfo.uf = cadastroinformacaoCarregada.uf;
      this.cadInfo.codincorporadora = cadastroinformacaoCarregada.codincorporadora;
      this.cadInfo.datacadastro = cadastroinformacaoCarregada.datacadastro;
      this.cadInfo.dataentrada = cadastroinformacaoCarregada.dataentrada;
      this.cadInfo.numeroapartamento = cadastroinformacaoCarregada.numeroapartamento;
      this.cadInfo.numerocadastroincorporadorafid = cadastroinformacaoCarregada.numerocadastroincorporadorafid;
      this.cadInfo.saldodevedor = cadastroinformacaoCarregada.saldodevedor;
      this.cadInfo.unidade = cadastroinformacaoCarregada.unidade;
      this.cadInfo.vagaautomovel = cadastroinformacaoCarregada.vagaautomovel;
      this.cadInfo.valorvenda = cadastroinformacaoCarregada.valorvenda;

      sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
    }
  }

  adicionarContato (contato: Contatos) {
    console.log(contato);
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
    console.log(comprador);
    if (this.validaFormulario(formCadInfo) == true) {
      var comprador2 = this.logicaService.adicionarComprador(comprador);
      comprador2.contatos = this.contato;
  
      //var a = sessionStorage.getItem('comprador');
      //this.logicaService.compradorSessionStorage(JSON.parse(a));
  
      this.compradores.push(comprador2);
      this.disabled = false;
  
      comprador = new Compradores();
  
      formCadInfo.reset();
  
      this.contato = [];
      this.contatoDisplay = [];
      this.msgs = [];
    } else {
      this.msgs = [];

      for (var _i in formCadInfo.controls) {
        if (formCadInfo.controls[_i].status == "INVALID") {
          formCadInfo.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao adicionar comprador!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente.`
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
  }
 
  removerContato (contatoC) {
    let index = this.contato.indexOf(contatoC);
    
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
          cadInfo.codoriginacao = cadInfo.codoriginacao['codOriginacao'];
          for (let index = 0; index < cadInfo.clientes.length; index++) {
            cadInfo.clientes[index].cepresidencial = cadInfo.clientes[index].cepresidencial.replace('-', '');
          }
          cadInfo.cep = cadInfo.cep.replace('-', '');
          cadInfo.codusuario = Number(SharedService.getInstance().getSessionUsuario().codUsuario);
          this.compradores = [];

          this.OnSubmit(cadInfo, formulario);
          
        this.router.navigate(['/analise']);
        },
        reject: () => {
        }
      })
    } else {
      this.msgs2 = [];

      for (var _i in formulario.controls) {
        if (formulario.controls[_i].status == "INVALID") {
          formulario.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao avançar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente.`
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

  /*formatarData(data) {
    console.log(data);
    let novaData = data.toLocaleString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric'});
    console.log(novaData);
  }*/

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
      },
      reject: () => {
      }
  });
  }

  visualizarComprador(comprador:Compradores) {
    this.comprador.cpfcnpj = comprador.cpfcnpj;
    this.comprador.codtipocliente = comprador.codtipocliente;
    this.comprador.nomecliente = comprador.nomecliente;
    this.comprador.ndocumento = comprador.ndocumento;
    this.comprador.orgaoexpedidor = comprador.orgaoexpedidor;
    this.comprador.dataexpedicao = comprador.dataexpedicao;
    this.comprador.datanascimento = comprador.datanascimento;
    this.comprador.codestadocivil = comprador.codestadocivil;
    this.comprador.nacionalidade = comprador.nacionalidade;
    this.comprador.profissao = comprador.profissao;
    this.comprador.cepresidencial = comprador.cepresidencial;
    this.comprador.uf = comprador.uf;
    this.comprador.cidade = comprador.cidade
    this.comprador.bairro = comprador.bairro;
    this.comprador.endereco = comprador.endereco;
    this.comprador.complemento = comprador.complemento;
    this.comprador.numeroendereco = comprador.numeroendereco;
    this.comprador.datacadastro = comprador.datacadastro;
    this.comprador.valorrenda = comprador.valorrenda;
    this.comprador.contatos = comprador.contatos;
    this.contato = comprador.contatos;
    this.contatoDisplay =[];
    for(let item = 0 ; item < comprador.contatos.length;item++){
      for(let item2 = 0 ; item2 <  this.tipoContato.length;item2++){
        if(this.tipoContato[item2].codtipocontato == comprador.contatos[item].codtipocontato){
            var contatoDisplay: Contatos = new Contatos();
            contatoDisplay.tipocontato = this.tipoContato[item2].desctipocontato;
            contatoDisplay.desccontato =  comprador.contatos[item].desccontato;
            this.contatoDisplay.push(contatoDisplay);
            console.log(this.contatoDisplay);
        }
      }
    }
  }
}
