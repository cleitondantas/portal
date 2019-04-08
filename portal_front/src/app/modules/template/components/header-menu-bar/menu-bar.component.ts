import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import {MenuItem, Message, MessageService} from 'primeng/api';
import { AuthService } from '../../../../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import {Power1,Back} from 'gsap/all';
import { Router } from '@angular/router';
import { CadastroChamadasService } from 'src/app/services/cadastro-chamadas.service';
import { SharedService } from 'src/app/services/shared.service';
import { Compradores } from 'src/app/models/compradores';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';

declare var TweenMax: any;

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  providers: [MessageService]
})

export class MenuBarComponent implements OnInit {
    
    @ViewChild('mushroom') box: ElementRef;
    @ViewChild('mushroom2') box2: ElementRef;

    @ViewChild('navmenuuser') navmenuuser: ElementRef;

    display: boolean = false;
    displayAnalise: boolean = false;
    displayInfo: boolean = false;
    text: string;
    results: string[];
    nomeClienteFiltrado: any[];

    nomeclienteSelecionado:string;
    cpfclienteSelecionado:string
    cadastrosTabelaBusca:CadastroInformacao[];
    items: MenuItem[];
    itemsmenu: MenuItem[];
    msgsNome: Message[] = [];
    msgsCpf: Message[] = [];
    user : Usuario;
    nomeUsuario: string;
    profileUser: string;

    constructor(
        private router: Router,
        private authService: AuthService,
        private messageService: MessageService,
        private analiseService: AnaliseChamadasService,
        private chamadasService: CadastroChamadasService,) {
        authService.shared.messengerService = messageService;
        this.nomeUsuario = localStorage.getItem('nome_usuario');
        this.profileUser = localStorage.getItem('profile');
    }

    blurNomeSelect(item:any){
        this.nomeclienteSelecionado = item.target.value;
    }
    blurCPFSelect(item:any){
        this.cpfclienteSelecionado = item.target.value;
 
    }
    clickBuscaPorNome(event:any){
        this.chamadasService.getBuscaCadastrado(this.nomeclienteSelecionado,null).then(data => {
            this.msgsNome = [];
            this.cadastrosTabelaBusca = data['data'] 
        }, error => {
            this.msgsNome = [];
            this.msgsNome.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: `Não foi encontrado nenhum cadastro com o nome: <strong>` + this.nomeclienteSelecionado + `</strong>. Verifique e tente novamente.`
            })
        });
    
    }

    clickBuscaPorCPF(event:any){
        this.chamadasService.getBuscaCadastrado(null,this.cpfclienteSelecionado).then(data => {
            this.cadastrosTabelaBusca = data['data'] 
        }, error => {
            this.msgsCpf = [];
            this.msgsCpf.push({
                severity: 'error',
                summary: 'Erro ao buscar!',
                detail: `Não foi encontrado nenhum cadastro com o CPF: <strong>` + this.cpfclienteSelecionado + `</strong>. Verifique e tente novamente.`
            })
        });
      
    }
    searchPorNome(event) {
        let query = event.query;
        this.chamadasService.getBuscaNomeClienteCadastrado(query).then(clienteQuery => {
            this.nomeClienteFiltrado = this.filtroClientePorNome(query, clienteQuery['data']);
        });  
      }

    irCadastro(codcadastro:number){
        let session = sessionStorage.getItem('CADASTROSELECIONADO');
        if (session !== null || undefined || "undefined") {
            sessionStorage.removeItem('CADASTROSELECIONADO'); // Remove a variavel  para nao ocorre problema posterior
        }

        for(let i=0; i < this.cadastrosTabelaBusca.length; i++){
            if(codcadastro == this.cadastrosTabelaBusca[i].codcadastro){
            sessionStorage.setItem('CADASTROSELECIONADO',JSON.stringify(this.cadastrosTabelaBusca[i]));
            }
        }
        this.hideDialog();

        this.chamadasService.buscarCadastro.emit(true);
        this.router.navigate(['/cadastro']);
    }

    irInformacoes(codcadastro: number) {
        for(let i=0; i < this.cadastrosTabelaBusca.length; i++){
            console.log(this.cadastrosTabelaBusca)
            /*if(codcadastro == this.cadastrosTabelaBusca[i].codcadastro){
                for (let i = 0; i < this.cadastrosTabelaBusca[i].clientes[i]; i++) {}
                if (this.nomeclienteSelecionado == this.cadastrosTabelaBusca[i].clientes) {
                    sessionStorage.setItem('CADASTROSELECIONADO',JSON.stringify(this.cadastrosTabelaBusca[i].clientes['nomecliente']))
                }
            }*/
        }

        this.router.navigate(['/informacoes']);
        this.hideDialogInfo();
    }

    async irAnalise(codcadastro:number){
        await this.selectFor(codcadastro);
    }

    selectFor(codcadastro:number){
        if (SharedService.getInstance().temporario == null) {
            SharedService.getInstance().temporario = [];
        }
        for(let i=0; i < this.cadastrosTabelaBusca.length; i++){
            if(codcadastro == this.cadastrosTabelaBusca[i].codcadastro){
                SharedService.getInstance().temporario[0] = this.cadastrosTabelaBusca[i].codcadastro;
                SharedService.getInstance().temporario[1] = this.cadastrosTabelaBusca[i].numerocadastroincorporadorafid;

                this.analiseService.getRegistroAnalise(codcadastro).subscribe(data => {
                    if (sessionStorage.getItem('ANALISESELECIONADA') !== null || undefined || "undefined") {
                        sessionStorage.removeItem('ANALISESELECIONADA');
                    }
                    sessionStorage.setItem('ANALISESELECIONADA',JSON.stringify(data['data'][0]))
                    console.log(data)
                    this.hideDialogDisplay();

                    if (this.router.url == "/analise") {
                        this.analiseService.buscarAnalise.emit(SharedService.getInstance().temporario);
                    } else {
                        this.router.navigate(['/analise']);
                    }
                    this.analiseService.controle = true;
                });
            }
        }
    }


      filtroClientePorNome(query,clienteQuery:Compradores[]) {
        let filtered: any[] = [];
        for (let i = 0; i < clienteQuery.length; i++) {
         // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i]);
         // }
      }
      return filtered;
      }

      searchPorCPF(event) {
        let query = event.query;
        this.chamadasService.getBuscaCPFClienteCadastrado(query).then(clienteQuery => {
            this.nomeClienteFiltrado = this.filtroClientePorCPF(query, clienteQuery['data']);
        });  
      }

      filtroClientePorCPF(query,clienteQuery:Compradores[]) {
        let filtered: any[] = [];
        for (let i = 0; i < clienteQuery.length; i++) {
          if(clienteQuery[i].cpfcnpj.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(clienteQuery[i]);
          }
      }
      return filtered;
      }
  ngOnInit() {
    
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
                {label: 'Novo ', icon: 'pi pi-fw pi-plus',routerLink:'/cadastro'},
                {label: 'Buscar', icon: 'pi pi-fw pi-search',command:(event:Event)=>{this.showDialog()}}
              ]
          },
          {
            label: 'Análise de crédito',
            icon: 'pi pi-fw pi-plus',
            visible: true,
            command: (event: Event) => {this.showDialogDisplay()},
            items: [
                {label: 'Buscar', icon: 'pi pi-fw pi-search',command:(event:Event)=>{this.showDialogDisplay()}}
              ]
          },
          {
              label: 'Informações',
              icon: 'pi pi-fw pi-search',
              visible: true,
              command: (event: Event) => {this.showDialogInfo()},
              items: [
                {label: 'Buscar', icon: 'pi pi-fw pi-search',command:(event:Event)=>{this.showDialogInfo()}}
              ]
          },
          {
            label: 'Relatorio',
            icon: 'pi pi-fw pi-search',
            items: [
              {label: 'Agrupado', icon: 'pi pi-fw pi-search',routerLink:'/lista'},
              {label: 'Graficos', icon: 'pi pi-fw pi-search',routerLink:'/grafic'}
            ]
        },
          {
                visible: true,
              label: 'Administrador',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Usuario',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {label: 'Novo', icon: 'pi pi-fw pi-save',routerLink:'/cadastrousuario'},
                          {label: 'Update', icon: 'pi pi-fw pi-save'},
                          {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                      ]
                  }
              ]
          }
      ];
  }
  showDialog() {
    this.display = true;
}
  hideDialog(){
    this.display = false;
  }

  showDialogDisplay() {
    this.displayAnalise = true;
}
  hideDialogDisplay(){
    this.displayAnalise = false;
  }

  showDialogInfo() {
      this.displayInfo = true;
  }

  hideDialogInfo() {
      this.displayInfo = false;
  }

logOut(){
    this.doIt();
    this.authService.fazerLogout();
}

conts:boolean = false;
doIt(){
   if(this.conts){
        this.conts=false; 
        TweenMax.fromTo(this.box2.nativeElement, 1, {paddingLeft:209}, {paddingLeft:0,delay:0.5, ease: Power1.easeOut});
        TweenMax.fromTo(this.navmenuuser.nativeElement,0.3,{height:'auto'},{height:0,display:'none', ease:  Power1.easeOut});
        TweenMax.fromTo(this.box.nativeElement, 0.5, {height:'auto'}, {height:0, ease: Power1.easeOut});
        
    }else{
        this.conts=true;
        TweenMax.fromTo(this.box2.nativeElement, 1, {paddingLeft:0}, {paddingLeft:209, ease:  Back.easeOut.config(1.7)});
        TweenMax.fromTo(this.box.nativeElement,0.8, {height: 0}, {height:'auto',delay:1, ease: Back.easeOut.config(1.7)});
        TweenMax.fromTo(this.navmenuuser.nativeElement,0.8,{height: 0},{height:'auto',delay:1,display:'block', ease: Back.easeOut.config(1.7)});
        TweenMax.fromTo(this.box.nativeElement,1.5, {width: 325}, {width:325,delay:1, ease: Power1.easeOut}); 
    }
}

trocarSenha(){
    this.doIt();
    this.router.navigate(['/cadastrousuario']);
}

showError() {
    this.authService.shared.messengerService.clear();
    this.authService.shared.messengerService.add({key: 'er', severity:'error', summary: 'Falha na execução', detail:'Não foi possivel realizar a ação'});
}
showConfirm() {
    this.authService.shared.messengerService.clear();
    this.authService.shared.messengerService.add({key: 'ok', severity:'success', summary: 'Ação Realizada', detail:'Ação Realizada com Sucesso!'});
}

}
