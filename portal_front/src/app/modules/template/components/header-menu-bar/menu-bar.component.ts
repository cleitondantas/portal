import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import {MenuItem, Message, MessageService} from 'primeng/api';
import { AuthService } from '../../../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import {Power1, Back} from 'gsap/all';
import { Router } from '@angular/router';
import { CadastroChamadasService } from 'src/app/services/cadastro-chamadas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Compradores } from 'src/app/models/compradores';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { Analise } from 'src/app/models/analise';
import formatCpf from '@brazilian-utils/format-cpf';
import formatCnpj from '@brazilian-utils/format-cnpj';
import isValidCpf from '@brazilian-utils/is-valid-cpf';
import isValidCnpj from '@brazilian-utils/is-valid-cnpj';
import onlyNumbers from '@brazilian-utils/helper-only-numbers';

declare var TweenMax: any;
declare var TimelineMax: any;

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  providers: [MessageService]
})

export class MenuBarComponent implements OnInit {

    constructor(
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService,
        private analiseService: AnaliseChamadasService,
        private chamadasService: CadastroChamadasService,
        private sharedService: SharedService) {
        authService.shared.messengerService = messageService;
        this.nomeUsuario = localStorage.getItem('nome_usuario');
        this.profileUser = localStorage.getItem('profile');
    }

    @ViewChild('contain') contain: ElementRef;
    @ViewChild('containLista') containLista: ElementRef;
    @ViewChild('label') label: ElementRef;
    @ViewChild('logo') logo: ElementRef;

    display = false;
    displayAnalise = false;
    displayInfo = false;
    text: string;
    results: string[];
    nomeClienteFiltrado: any[];
    dataNascimento: string;
    codcadastro: number;
    loadSpin = false;

    nomeclienteSelecionado: string;
    cpfclienteSelecionado: string;
    cadastrosTabelaBusca: CadastroInformacao[];
    cadastrosTabelaBuscaInfo: CadastroInformacao[];
    clienteInformacao: Compradores[];
    items: MenuItem[];
    itemsmenu: MenuItem[];
    msgsNome: Message[] = [];
    msgsCpf: Message[] = [];
    user: Usuario;
    nomeUsuario: string;
    profileUser: string;
    isAdmin = false;
    conts = false;

    blurNomeSelect(item: any) {
        this.nomeclienteSelecionado = item.target.value;
    }
    blurCPFSelect(item: any) {
        this.cpfclienteSelecionado = item.target.value;

    }
    clickBuscaPorNome(event: any) {
        this.loadSpin = !this.loadSpin;
        this.chamadasService.getBuscaCadastrado(this.nomeclienteSelecionado, null).subscribe(data => {
            this.msgsNome = [];
            this.cadastrosTabelaBusca = data['data'];

            setTimeout(() => {
                this.loadSpin = !this.loadSpin;
            }, 500);
        }, error => {
            this.msgsNome = [];
            this.msgsNome.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: `Não foi encontrado nenhum cadastro com o nome: <strong>` + this.nomeclienteSelecionado + `</strong>. Verifique e tente novamente.`
            });
            this.loadSpin = !this.loadSpin;
        });
    }

    clickBuscaPorNomeInfo(event: any) {
        this.loadSpin = !this.loadSpin;
        this.chamadasService.getBuscaCadastrado(this.nomeclienteSelecionado, null).subscribe(data => {
            this.msgsNome = [];
            this.cadastrosTabelaBuscaInfo = data['data'];
            for (let i = 0; i < this.cadastrosTabelaBuscaInfo.length; i++) {
                this.codcadastro = this.cadastrosTabelaBuscaInfo[i].codcadastro;
                for (let item = 0; item < this.cadastrosTabelaBuscaInfo[i].clientes.length; item++) {
                    if (this.nomeclienteSelecionado == this.cadastrosTabelaBuscaInfo[i].clientes[item].nomecliente) {
                        let data = this.cadastrosTabelaBuscaInfo[i].clientes[item].datanascimento;
                        data = new Date(data);
                        data.toUTCString();
                        this.dataNascimento = this.fixUTC(data);
                        this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj = this.formatCpfCnpj(this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj);
                        this.clienteInformacao = [this.cadastrosTabelaBuscaInfo[i].clientes[item]];
                    }
                }
            }

            setTimeout(() => {
                this.loadSpin = !this.loadSpin;
            }, 500);
            console.log(this.clienteInformacao);
        }, error => {
            this.msgsNome = [];
            this.msgsNome.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: `Não foi encontrado nenhum cadastro com o nome: <strong>` + this.nomeclienteSelecionado + `</strong>. Verifique e tente novamente.`
            });
            this.loadSpin = !this.loadSpin;
        });
    }

    clickBuscaPorCPFInfo(event: any) {
        this.loadSpin = !this.loadSpin;

        this.chamadasService.getBuscaCadastrado(null, onlyNumbers(this.cpfclienteSelecionado)).subscribe(data => {
            this.msgsCpf = [];
            this.cadastrosTabelaBuscaInfo = data['data'];
            for (let i = 0; i < this.cadastrosTabelaBuscaInfo.length; i++) {
                this.codcadastro = this.cadastrosTabelaBuscaInfo[i].codcadastro;
                for (let item = 0; item < this.cadastrosTabelaBuscaInfo[i].clientes.length; item++) {
                    if (onlyNumbers(this.cpfclienteSelecionado) == this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj) {
                        let data = this.cadastrosTabelaBuscaInfo[i].clientes[item].datanascimento;
                        data = new Date(data);
                        data.toUTCString();
                        this.dataNascimento = this.fixUTC(data);
                        this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj = this.formatCpfCnpj(this.cadastrosTabelaBuscaInfo[i].clientes[item].cpfcnpj);
                        this.clienteInformacao = [this.cadastrosTabelaBuscaInfo[i].clientes[item]];
                    }
                }
            }

            setTimeout(() => {
                this.loadSpin = !this.loadSpin;
            }, 500);
            console.log(this.clienteInformacao);
        }, error => {
            this.msgsCpf = [];
            this.msgsCpf.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: `Não foi encontrado nenhum cadastro com o CPF: <strong>` + this.cpfclienteSelecionado + `</strong>. Verifique e tente novamente.`
            });

            this.loadSpin = !this.loadSpin;
        });
    }

    clickBuscaPorCPF(event: any) {
        this.loadSpin = !this.loadSpin;

        this.chamadasService.getBuscaCadastrado(null, onlyNumbers(this.cpfclienteSelecionado)).subscribe(data => {
            this.cadastrosTabelaBusca = data['data'];

            setTimeout(() => {
                this.loadSpin = !this.loadSpin;
            }, 500);
        }, error => {
            this.msgsCpf = [];
            this.msgsCpf.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: `Não foi encontrado nenhum cadastro com o CPF: <strong>` + this.cpfclienteSelecionado + `</strong>. Verifique e tente novamente.`
            });

            this.loadSpin = !this.loadSpin;
        });

    }
    searchPorNome(event) {
        const query = event.query;
        this.chamadasService.getBuscaNomeClienteCadastrado(query).then(clienteQuery => {
            this.nomeClienteFiltrado = this.filtroClientePorNome(query, clienteQuery['data']);
        });
      }

    irCadastro(codcadastro: number) {
        const session = sessionStorage.getItem('CADASTROSELECIONADO');
        if (session !== null || undefined || 'undefined') {
            sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
        }

        for (let i = 0; i < this.cadastrosTabelaBusca.length; i++) {
            if (codcadastro == this.cadastrosTabelaBusca[i].codcadastro) {
            sessionStorage.setItem('CADASTROSELECIONADO', JSON.stringify(this.cadastrosTabelaBusca[i]));
            }
        }
        this.hideDialog();

        this.chamadasService.buscarCadastro.emit(true);
        this.router.navigate(['/cadastro']);
    }

    irInformacoes() {
        const storage = ['CADASTRODADOS', 'ANALISEDADOS', 'fid', 'CADASTROINFO'];
        for (let i = 0; i < storage.length; i++) {
            if (sessionStorage.getItem(storage[i]) !== null || undefined || 'undefined') {
                sessionStorage.removeItem(storage[i]);
            }
        }

        for (let i = 0; i < this.cadastrosTabelaBuscaInfo.length; i++) {
            console.log(this.cadastrosTabelaBuscaInfo);
                sessionStorage.setItem('fid', JSON.stringify(this.cadastrosTabelaBuscaInfo[i].numerocadastroincorporadorafid));
                for (let item = 0; item < this.cadastrosTabelaBuscaInfo[i]['clientes'].length; item++) {
                    if (this.clienteInformacao[0].nomecliente == this.cadastrosTabelaBuscaInfo[i]['clientes'][item].nomecliente) {
                        sessionStorage.setItem('CADASTROINFO', JSON.stringify(this.cadastrosTabelaBuscaInfo[i]));
                        sessionStorage.setItem('CADASTRODADOS', JSON.stringify(this.cadastrosTabelaBuscaInfo[i]['clientes'][item]));
                    }
                }

                this.analiseService.getRegistroAnalise(this.codcadastro).subscribe(data => {
                    const analise: Analise = data['data'][0];
                    if (analise != undefined) {
                        for (let item = 0; item < analise.simulacoes.length; item++) {
                            if (analise.simulacoes[item].simulacaoselecionado == true) {
                                sessionStorage.setItem('ANALISEDADOS', JSON.stringify(analise.simulacoes[item]));
                            }
                        }
                    }
                    console.log(data);
                    this.router.navigate(['/informacoes']);
                    this.analiseService.buscarInformacoes.emit(true);
                });

            this.hideDialogInfo();
            this.sharedService.showLoader.emit(false);
        }
    }

    irAnalise(codcadastro: number) {
    this.selectFor(codcadastro);
    }

    selectFor(codcadastro: number) {
        if (SharedService.getInstance().temporario == null) {
            SharedService.getInstance().temporario = [];
        }
        for (let i = 0; i < this.cadastrosTabelaBusca.length; i++) {
            if (codcadastro == this.cadastrosTabelaBusca[i].codcadastro) {
                SharedService.getInstance().temporario[0] = this.cadastrosTabelaBusca[i].codcadastro;
                SharedService.getInstance().temporario[1] = this.cadastrosTabelaBusca[i].numerocadastroincorporadorafid;

                this.analiseService.getRegistroAnalise(codcadastro).subscribe(data => {
                    if (sessionStorage.getItem('ANALISESELECIONADA') !== null || undefined || 'undefined') {
                        sessionStorage.removeItem('ANALISESELECIONADA');
                    }
                    sessionStorage.setItem('ANALISESELECIONADA', JSON.stringify(data['data'][0]));
                    console.log(data);
                    this.hideDialogDisplay();

                    if (this.router.url == '/analise') {
                        this.analiseService.buscarAnalise.emit(SharedService.getInstance().temporario);
                    } else {
                        this.router.navigate(['/analise']);
                    }
                    this.analiseService.controle = true;
                });
            }
        }
    }


      filtroClientePorNome(query, clienteQuery: Compradores[]) {
        const filtered: any[] = [];
        for (let i = 0; i < clienteQuery.length; i++) {
         // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i]);
         // }
      }
      return filtered;
      }

      searchPorCPF(event) {
        const query = event.query;
        this.chamadasService.getBuscaCPFClienteCadastrado(query).then(clienteQuery => {
            this.nomeClienteFiltrado = this.filtroClientePorCPF(query, clienteQuery['data']);
        });
      }

      filtroClientePorCPF(query, clienteQuery: Compradores[]) {
        const filtered: any[] = [];
        for (let i = 0; i < clienteQuery.length; i++) {
          if (clienteQuery[i].cpfcnpj.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i]);
          }
      }
      return filtered;
      }

      private fixUTC(date: Date) {
        const ano  = date.getUTCFullYear();
        const mes = date.getUTCMonth();
        const dia = date.getUTCDate();
        const hora = date.getHours();
        const novaData: Date = new Date(Date.UTC(ano, mes, dia, hora + 3));
        const dataString = novaData.toLocaleString('pt-BR');
        const dataSlice = dataString.indexOf(' ');

        return dataString.slice(0, dataSlice);
      }
  ngOnInit() {
    this.isVisualizeAdmin();
    this.itemsmenu = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'pi pi-fw pi-plus'},
                {label: 'Download', icon: 'pi pi-fw pi-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
                {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
            ]
        }];
      this.items = [
          {
              label: 'Home',
              routerLink: '/home',
              icon: 'pi pi-fw pi-home',
              visible: true
          },
          {
            label: 'Cadastro',
            routerLink: '/cadastro',
            icon: 'pi pi-fw pi-plus',
            visible: true,
            items: [
                {label: 'Novo ', icon: 'pi pi-fw pi-plus', routerLink: '/cadastro'},
                {label: 'Buscar', icon: 'pi pi-fw pi-search', command: (event: Event) => {
                    this.showDialog();
                    this.hideDialogInfo();
                    this.hideDialogDisplay();
                }}
              ]
          },
          {
            label: 'Análise de crédito',
            icon: 'pi pi-fw pi-plus',
            visible: true,
            command: (event: Event) => {
                this.showDialogDisplay();
                this.hideDialog();
                this.hideDialogInfo();
            },
            items: [
                {label: 'Buscar', icon: 'pi pi-fw pi-search', command: (event: Event) => {
                    this.showDialogDisplay();
                    this.hideDialog();
                    this.hideDialogInfo();
                }}
              ]
          },
          {
              label: 'Informações',
              icon: 'pi pi-fw pi-search',
              visible: true,
              command: (event: Event) => {
                  this.showDialogInfo();
                  this.hideDialog();
                  this.hideDialogDisplay();
                },
              items: [
                {label: 'Buscar', icon: 'pi pi-fw pi-search', command: (event: Event) => {
                    this.showDialogInfo();
                    this.hideDialog();
                    this.hideDialogDisplay();
                }}
              ]
          },
          {
            visible: false,
            label: 'Relatorio',
            icon: 'pi pi-fw pi-search',
            items: [
              {label: 'Agrupado', icon: 'pi pi-fw pi-search', routerLink: '/lista'},
              {label: 'Graficos', icon: 'pi pi-fw pi-search', routerLink: '/chat'}
            ]
        },
          {

              label: 'Administrador',
              icon: 'pi pi-fw pi-cog',
              routerLink: '/cadastrousuario',
              visible: this.isAdmin,
              command: (event: Event) => {
                this.hideDialogInfo();
                this.hideDialog();
                this.hideDialogDisplay();
                },
              items: [
                  {
                      label: 'Usuario',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                        {label: 'Novo', icon: 'pi pi-fw pi-save', routerLink: '/cadastrousuario', command: (event: Event) => {
                            this.hideDialogInfo();
                            this.hideDialog();
                            this.hideDialogDisplay();
                        }},
                        {label: 'Update', icon: 'pi pi-fw pi-save', routerLink: '/updateusuario'},
                        {label: 'Delete', icon: 'pi pi-fw pi-minus', routerLink: '/deleteusuario'},
                        {label: 'Reset', icon: 'pi pi-replay', routerLink: '/resetusuario'}
                      ]
                  }
              ]
          }
      ];


  }

  isVisualizeAdmin() {
    this.isAdmin = this.sharedService.isUserAdmin();
  }

  showDialog() {
    this.display = true;
}
  hideDialog() {
    this.display = false;
  }

  showDialogDisplay() {
    this.displayAnalise = true;
}
  hideDialogDisplay() {
    this.displayAnalise = false;
  }

  showDialogInfo() {
      this.displayInfo = true;
  }

  hideDialogInfo() {
      this.displayInfo = false;
  }

logOut() {
    this.doIt();
    this.authService.fazerLogout();
}
doIt() {
    let tl = new TimelineMax();
    let contain = this.contain.nativeElement;
    let containLista = this.containLista.nativeElement;
    let logo = this.logo.nativeElement;
   if (this.conts) {
        this.conts = false;
        TweenMax.to(logo, 0.5, {height: '0px', display: 'none'});
        TweenMax.to('ul.lista > li', 0.5, {height: '0px', display: 'none', ease: Power1.easeOut});
        TweenMax.to(containLista, 1, {height: '0px', delay: 0.2, ease: Power1.easeOut});
        TweenMax.to(contain, 1, {width: this.label.nativeElement.offsetWidth + 50, borderBottomLeftRadius: 20, delay: 1.2, ease: Power1.easeOut});

        /*tl.to(logo, 0.5, {height: "0px"}).to(logo, 0.2, {display: "none"})
        .to(containLista, 1, {height: "0px", display: "none", ease: Power1.easeOut})
        .to(contain, 1, {width: this.label.nativeElement.offsetWidth + 50, borderBottomLeftRadius: 20, ease: Power1.easeOut})*/

        // TweenMax.to(this.contain.nativeElement, 1, {width: "auto",  borderBottomLeftRadius: 20, delay: 0.5,ease: Power1.easeOut});
        // TweenMax.to(this.containLista.nativeElement, 0.3, {display: "none", ease: Power1.easeOut})
        // TweenMax.to(this.contain.nativeElement, 1, {, delay: 0.5, ease: Power1.easeOut});
        // TweenMax.fromTo(this.containLista.nativeElement, 1, {paddingLeft: 209}, {paddingLeft: 0, delay: 0.5, ease: Power1.easeOut});
        // TweenMax.fromTo(this.navmenuuser.nativeElement, 0.3, {height: 'auto'}, {height: 0, display: 'none', ease:  Power1.easeOut});
        // TweenMax.fromTo(this.contain.nativeElement, 0.5, {height: 'auto'}, {height: 0, ease: Power1.easeOut});

    } else {
        this.conts = true;
        TweenMax.fromTo(contain, 1, {width: this.label.nativeElement.offsetWidth + 50}, {width: '400px', borderBottomLeftRadius: 0, ease: Back.easeOut.config(1.7)});
        TweenMax.to(containLista, 1, {height: '230px', display: 'block', delay: 0.4, ease: Back.easeOut.config(1.7)});
        TweenMax.to('ul.lista > li', 0.5, {height: 'auto', display: 'block', delay: 0.7, ease: Back.easeOut.config(1.7)});
        TweenMax.to(logo, 0, {display: 'block', delay: 0.6, height: 'auto', ease: Back.easeOut.config(1.7)});

        /*tl.fromTo(contain, 1, {width: this.label.nativeElement.offsetWidth + 50}, {width: "400px", borderBottomLeftRadius: 0, ease: Back.easeOut.config(1.7)})
        .to(containLista, 1, {height: "230px", display: "block", ease: Back.easeOut.config(1.7)})
        .to(logo, 0, {display: "block", height: "auto"})*/

        // TweenMax.to(this.contain.nativeElement, 1, {width: "100%",  borderBottomLeftRadius: 0, ease: Back.easeOut.config(1.7)});
        // TweenMax.to(this.containLista.nativeElement, 0.8, {display: "block", delay: 1, ease: Back.easeOut.config(1.7)})
        // TweenMax.fromTo(this.containLista.nativeElement, 1, {paddingLeft: 0}, {paddingLeft: 209, ease:  Back.easeOut.config(1.7)});
        // TweenMax.fromTo(this.contain.nativeElement, 0.8, {height: 0}, {height: 'auto', delay: 1, ease: Back.easeOut.config(1.7)});
        // TweenMax.fromTo(this.navmenuuser.nativeElement, 0.8, {height: 0}, {height: 'auto', delay: 1, display: 'block', ease: Back.easeOut.config(1.7)});
        // TweenMax.fromTo(this.contain.nativeElement, 1.5, {width: 355}, {width: 355, delay: 1, ease: Power1.easeOut});
    }
}

trocarSenha() {
    this.doIt();
    this.router.navigate(['/trocarsenha']);
}

showError() {
    this.authService.shared.messengerService.clear();
    this.authService.shared.messengerService.add({key: 'er', severity: 'error', summary: 'Falha na execução', detail: 'Não foi possivel realizar a ação'});
}
showConfirm() {
    this.authService.shared.messengerService.clear();
    this.authService.shared.messengerService.add({key: 'ok', severity: 'success', summary: 'Ação Realizada', detail: 'Ação Realizada com Sucesso!'});
}

formatCpfCnpj(cpfcnpj: string) {
    const cpf: boolean = isValidCpf(cpfcnpj);
    const cnpj: boolean = isValidCnpj(cpfcnpj);

    if (cpf == true) {
      cpfcnpj = formatCpf(cpfcnpj);
    } else if (cnpj == true) {
      cpfcnpj = formatCnpj(cpfcnpj);
    }

    return cpfcnpj;
  }
}
