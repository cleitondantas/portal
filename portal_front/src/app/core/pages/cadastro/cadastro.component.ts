import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import isValidCpf from '@brazilian-utils/is-valid-cpf';
import isValidCnpj from '@brazilian-utils/is-valid-cnpj';
import { SharedService } from 'src/app/services/shared.service';
import emailMask from 'text-mask-addons/dist/emailMask';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})

export class CadastroComponent implements OnInit {
  @ViewChild('formulario', { read: NgForm }) form: any;
  @ViewChild('formCadInfo', { read: NgForm }) formCadInfo: any;
  @ViewChild('desccontato') desccontato: ElementRef;
  
  constructor(
    private confirmationService: ConfirmationService,
    private chamadasService: CadastroChamadasService,
    private logicaService: CadastroLogicaService,
    private router: Router,
    private messageService: MessageService,
    private sharedService: SharedService
  ) { }

  contato: any[] = [];
  contatoDisplay: any[] = [];
  contatoSelecionado: any;
  compradores: Compradores[] = [];
  disabled = false;
  selectedItem: any;
  getLoads = {getEmpreendimentos: false, getOriginacoes: false, getEstadoCivil: false, getTipoContato: false,
               getTipoCliente: false, getIncorporadoras: false};
  load: boolean = false;

  estadoCivil: EstadoCivil[];
  tipoContato: TipoContato[];
  estado: Estadobr[];
  incorp: Incorporadoras[];
  empreendimento: Empreendimento[];
  originacao: Originacao[];
  tipocliente: TipoClientes[];
  retornocadastro: CadastroInformacao;
  br: any;
  disabledButton = true;
  mask: Array<string | RegExp>;
  mask2: Array<string | RegExp> = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
  disabledInput = true;
  msgs: Message[] = [];
  msgs2: Message[] = [];
  controle = false;

  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  contatos: Contatos = new Contatos();

  incorpotradoras: any[];
  item: Incorporadoras;

  OnSubmit(cadInfo: CadastroInformacao, formulario) {
      this.chamadasService.createUser(cadInfo).subscribe(dados => {
        this.retornocadastro = dados['data'];
        console.log(JSON.stringify(dados['data']));
        console.log('COD ' + this.retornocadastro.codcadastro);
        console.log('FID ' + this.retornocadastro.numerocadastroincorporadorafid);
        SharedService.getInstance().temporario[0] = this.retornocadastro.codcadastro;
        SharedService.getInstance().temporario[1] = this.retornocadastro.numerocadastroincorporadorafid;
        this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Cadastro feito com sucesso!'});
        setTimeout(() => {
          this.router.navigate(['/analise']);
        }, 1000);
      });
   // sessionStorage.clear();
    formulario.reset();
  }

  ngOnDestroy() {
    sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
  }

  ngOnInit() {
    SharedService.getInstance().temporario = [];
    this.chamadasInit();

    this.br = this.sharedService.calendarioBr();

    this.visualizarInfoImovel();

    this.chamadasService.buscarCadastro.subscribe(dado => {
      this.form.reset();
      this.formCadInfo.reset();
      this.msgs = [];
      this.msgs2 = [];
      this.visualizarInfoImovel();
    });

  }

  adicionarContato (contato: Contatos) {
    if ((this.disabledInput == false) && (contato.desccontato !== '')) {
      const contatoDisplay = this.logicaService.adicionarContatosDisplay(contato);
      const contato2 = this.logicaService.adicionarContatosLista(contato);

      contato2.cpfcnpj = this.comprador.cpfcnpj;

      this.contatoDisplay.push(contatoDisplay);
      this.contato.push(contato2);

      this.contatos = this.logicaService.limparContatos(this.contatos);
      this.desccontato.nativeElement.removeAttribute('placeholder');
      this.disabledInput = true;
    } else {
      this.messageService.add({key: 'popup', severity: 'error', summary: 'Erro!', detail: 'Preencha os campos para adicionar o contato!'});
    }
  }

  adicionarCompradorLista (comprador: Compradores, formCadInfo) {
    this.msgs = [];
    setTimeout(() => {
      if (this.validaFormulario(formCadInfo) == true) {
        const comprador2 = this.logicaService.adicionarComprador(comprador);
        comprador2.contatos = this.contato;

        this.compradores.push(comprador2);
        this.disabled = false;

        comprador = new Compradores();

        formCadInfo.reset();

        this.contato = [];
        this.contatoDisplay = [];
        this.msgs = [];
        this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Comprador adicionado!'});
      } else {
        this.msgs = [];
        const camposInvalidos: any[] = [];

        for (const _i in formCadInfo.controls) {
          if (formCadInfo.controls[_i].status == 'INVALID') {
            let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
            campoInvalido = campoInvalido.replace(': ', '');
            camposInvalidos.push(` ` + campoInvalido);
            formCadInfo.controls[_i].pristine = false;
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Erro ao adicionar comprador!',
              detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` +
               camposInvalidos + `</strong>.`
            });
          }
        }

        if (this.contato.length == 0) {
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao adicionar comprador!',
            detail: `Adicione pelo menos 1 contato.`
          });
        }
      }
    }, 301);

  }

  removerContato (contatoC) {
    const index = this.contatoDisplay.indexOf(contatoC);

    this.contato.splice(index, 1);
    this.contatoDisplay.splice(index, 1);
  }

  removerComprador (comprador) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja continuar?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
       const index = this.compradores.indexOf(comprador);
        this.compradores.splice(index, 1);
        if (this.compradores.length <= 0) {
          this.disabled = true;
        } else {
          this.disabled = false;
        }
          this.messageService.add({key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Comprador removido!'});
      },
      reject: () => {
      }
    })
  }

  consultaCEP() {
    let cep = this.comprador.cepresidencial;

    if (cep != null && cep !== '') {
      cep = cep.replace(/\D/g, '');

      if (cep !== '') {
        const  validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
          return this.chamadasService.getCep(cep).subscribe(dados => {
            if (!('erro' in dados)) {
              this.populaDadosForm(dados);
            } else {
              this.comprador.cepresidencial = null;
              this.messageService.add({key: 'popup', severity: 'error', summary: 'Erro!', detail: 'CEP não encontrado!'});
            }
          });
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
        return this.chamadasService.getCep(cep).subscribe(dados => {
          if (!('erro' in dados)) {
            this.populaDadosFormImovel(dados);
          } else {
            this.cadInfo.cep = null;
            this.messageService.add({key: 'popup', severity: 'error', summary: 'Erro!', detail: 'CEP não encontrado!'});
          }
        });
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
        this.msgs = [];
        this.msgs2 = [];
        this.messageService.add({key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Formulário limpo!'});
      },
      reject: () => {

      }
  });
  }

  setarTrue(dados) {
    console.log(dados);
    const rowData: Compradores = dados.data;
    for (let _i = 0; _i < this.compradores.length; _i++) {
      if (rowData.cpfcnpj == this.compradores[_i].cpfcnpj) {
        this.compradores[_i].principal = true;
      }
    }
  }

  verificarSelecionado() {
    for (let _i = 0; _i < this.compradores.length; _i++) {
      if (this.compradores[_i].principal == true) {
        return true;
      } else {
        return false;
      }
    }
  }

  tirarSelecionado(rowData) {
    console.log(rowData);
    const row: Compradores = rowData.data;
    for (let _i = 0; _i < this.compradores.length; _i++) {
      if (row.cpfcnpj == this.compradores[_i].cpfcnpj) {
        this.compradores[_i].principal = false;
      }
    }
  }

  confirmacao(cadInfo: CadastroInformacao, formulario) {
    const principal = this.verificarSelecionado();
    if ((this.validaFormImovel(formulario) == true) && (principal == true)) {
      this.msgs = [];
      this.msgs2 = [];

      this.confirmationService.confirm({
        message: 'Tem certeza que deseja continuar?',
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => {
          cadInfo = this.logicaService.confirmacao(cadInfo, this.compradores);
          this.compradores = [];

          this.OnSubmit(cadInfo, formulario);

          this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Cadastro feito com sucesso!'});
        },
        reject: () => {
        }
      });
    } else {
      this.msgs2 = [];
      const camposInvalidos: any[] = [];

      for (const _i in formulario.controls) {
        if (formulario.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formulario.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao avançar!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:` +
            camposInvalidos + `</strong>.`
          });
        }
      }

      if (this.compradores.length == 0) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao avançar!',
          detail: `Cadastre pelo menos 1 comprador.`
        });
      }

      if (principal == false) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao avançar!',
          detail: `Selecione o comprador principal.`
        });
      }
    }
  }

  atualizarCadastroInformacoes(cadInfo: CadastroInformacao, formulario: any) {
    const principal = this.verificarSelecionado();

    if ((this.validaFormImovel(formulario) == true) && (principal == true)) {
      cadInfo = this.logicaService.atualizarCadInfo(cadInfo, this.compradores);
      this.compradores = [];

      console.log(JSON.stringify(cadInfo));
      this.chamadasService.putCadastro(cadInfo).subscribe(dados => {
        this.retornocadastro = dados['data'];
        console.log(dados);
      });
      formulario.reset();
      this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!'});
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);
    } else {
      this.msgs2 = [];
      const camposInvalidos: any[] = [];

      for (const _i in formulario.controls) {
        if (formulario.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formulario.controls[_i].pristine = false;
          this.msgs2 = [];
          this.msgs2.push({
            severity: 'error',
            summary: 'Erro ao salvar alterações!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:`
            + camposInvalidos + `</strong>.`
          });
        }
      }

      if (this.compradores.length == 0) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao salvar alterações!',
          detail: `Cadastre pelo menos 1 comprador.`
        });
      }

      if (principal == false) {
        this.msgs2.push({
          severity: 'error',
          summary: 'Erro ao avançar!',
          detail: `Selecione o comprador principal.`
        });
      }
    }
  }

  verificaCpfCnpj(formCadInfo) {
    const cpf: boolean = isValidCpf(this.comprador.cpfcnpj);
    const cnpj: boolean = isValidCnpj(this.comprador.cpfcnpj);

    if ((cpf || cnpj == true) && (this.comprador.cpfcnpj !== null)) {
      return true;
    } else {
      formCadInfo.controls['cpfcnpj'].status = 'INVALID';
      return false;
    }
  }

  validaFormulario(formCadInfo) {
    const cpfcnpj = this.verificaCpfCnpj(formCadInfo);
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
    this.contatos.desccontato = '';
    this.disabledInput = false;

    if (evento.value == 1) {
      this.desccontato.nativeElement.setAttribute('placeholder', '(XX) XXXX-XXXX');
      this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else if (evento.value == 2) {
      this.desccontato.nativeElement.setAttribute('placeholder', '(XX) XXXXX-XXXX');
      this.mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    } else if (evento.value == 3) {
      this.desccontato.nativeElement.setAttribute('placeholder', 'email@email.com');
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
        this.msgs = [];
        this.messageService.add({key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Formulário limpo!'});
      },
      reject: () => {
      }
  });
  }

  visualizarComprador(comprador: Compradores) {
    this.disabledButton = false;

    this.comprador = this.logicaService.visualizarComprador(this.comprador, comprador, this.estadoCivil);

    this.comprador.contatos = comprador.contatos;
    this.contato = comprador.contatos;
    this.contatoDisplay = [];
    for (let item = 0; item < comprador.contatos.length; item++) {
      for (let item2 = 0; item2 <  this.tipoContato.length; item2++) {
        if (this.tipoContato[item2].codtipocontato == comprador.contatos[item].codtipocontato) {
            const contatoDisplay: Contatos = new Contatos();
            contatoDisplay.tipocontato = this.tipoContato[item2].desctipocontato;
            contatoDisplay.desccontato =  comprador.contatos[item].desccontato;
            this.contatoDisplay.push(contatoDisplay);
        }
      }
    }
  }

  visualizarInfoImovel() {
    // Verifica se a tela está sendo carregada vinda do Campo de busca
    if (sessionStorage.getItem('CADASTROSELECIONADO') != null) {
      this.cadInfo = this.logicaService.visualizarInfoImovel();
      this.compradores = this.cadInfo.clientes;
      for (let _i = 0; _i < this.compradores.length; _i++) {
        if (this.cadInfo.clientes[_i].principal == true) {
          this.selectedItem = this.cadInfo.clientes[_i];
        }

      }

      this.comprador = new Compradores();
      this.contatoDisplay = [];
      this.contato = [];
      this.controle = true;
      this.disabledButton = true;
    }
  }

  atualizarComprador(formCadInfo) {
    if (this.validaFormulario(formCadInfo) == true) {
      this.compradores = this.logicaService.atualizarComprador(this.compradores, this.comprador, this.contato);

      formCadInfo.reset();
      this.contatoDisplay = [];
      this.contato = [];
      this.msgs = [];
      this.disabledButton = true;
      this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Informações do comprador alteradas!'});
    } else {
      this.msgs = [];
      const camposInvalidos: any[] = [];

      for (const _i in formCadInfo.controls) {
        if (formCadInfo.controls[_i].status == 'INVALID') {
          let campoInvalido = document.querySelector(`label[for="` + _i + `"]`).innerHTML;
          campoInvalido = campoInvalido.replace(': ', '');
          camposInvalidos.push(` ` + campoInvalido);
          formCadInfo.controls[_i].pristine = false;
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao salvar alterações!',
            detail: `Existem campos não preenchidos ou preenchidos incorretamente. <strong>Campos com erro:`
            + camposInvalidos + `</strong>.`
          });
        }
      }

      if (this.contato.length == 0) {
        this.msgs.push({
          severity: 'error',
          summary: 'Erro ao salvar alterações!',
          detail: `Adicione pelo menos 1 contato.`
        });
      }
    }
  }

  setCursor(cepRecebido) {
    const cep = (<HTMLInputElement>document.getElementById(cepRecebido));
    cep.focus();
    cep.setSelectionRange(0, 0);
  }

  hiddenLoader() {
    if ((this.getLoads.getEmpreendimentos == true) && (this.getLoads.getEstadoCivil == true) && 
        (this.getLoads.getIncorporadoras == true) && (this.getLoads.getOriginacoes == true) && 
        (this.getLoads.getTipoCliente == true) && (this.getLoads.getTipoContato == true)) {
          setTimeout(() => {
            this.load = true;
          }, 500);
        }
  }

  cancelar() {
    this.messageService.add({key: 'popup', severity: 'warn', summary: 'Aviso!', detail: 'Operação cancelada!'});
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }

  chamadasInit() {
    this.chamadasService.getEstados().subscribe(dados => this.estado = dados);
    this.chamadasService.getDadosCadastrais('empreendimentos').subscribe(event => {
      if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        this.empreendimento = dadosBaixados;
        this.getLoads.getEmpreendimentos = true;
        this.hiddenLoader();
      }
    })
    this.chamadasService.getDadosCadastrais('originacoes').subscribe(event => {
      if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        this.originacao = dadosBaixados;
        this.getLoads.getOriginacoes = true;
        this.hiddenLoader();
      }
    })
    this.chamadasService.getDadosCadastrais('estadocivil').subscribe(event => {
      if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        this.estadoCivil = dadosBaixados;
        this.getLoads.getEstadoCivil = true;
        this.hiddenLoader();
      }
    })
    this.chamadasService.getDadosCadastrais('tipocontatos').subscribe(event => {
      if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        this.tipoContato = dadosBaixados;
        this.getLoads.getTipoContato = true;
        this.hiddenLoader();
      }
    })
    this.chamadasService.getDadosCadastrais('tipoclientes').subscribe(event => {
      if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        this.tipocliente = dadosBaixados;
        this.getLoads.getTipoCliente = true;
        this.hiddenLoader();
      }
    })
    this.chamadasService.getDadosCadastrais('incorporadoras').subscribe(event => {
      if (event instanceof HttpResponse) {
        const dadosBaixados = event.body['data'];
        this.incorp = dadosBaixados;
        this.getLoads.getIncorporadoras = true;
        this.hiddenLoader();
      }
    })
  }
}
