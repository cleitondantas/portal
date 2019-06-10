import { Component, OnInit } from '@angular/core';
import { FormcadastroService } from 'src/app/services/formcadastro.service';
import { HttpResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { Role } from 'src/app/models/role';
import { FormCadastroLogicaService } from 'src/app/services/form-cadastro-logica.service';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-reset-usuario',
  templateUrl: './reset-usuario.component.html',
  styleUrls: ['./reset-usuario.component.css'],
  providers: [MessageService]
})


export class ResetUsuarioComponent implements OnInit {
  usuario: string;
  nickname: string;

  newPassord: string;
  usuarioForm: Usuario = new Usuario();
  selectRoles: Role[];
  item: Role;
  results = [];
  resultsLogin = [];
  confirmarNickName: string;
  showForm = false;
  showLoad = false;

  constructor(private formcadastro: FormcadastroService,
              private messageService: MessageService,
              private formCadastroLogica: FormCadastroLogicaService) { }

  ngOnInit() {
    this.getRoles();
  }

  atualizarUser() {
    if (this.newPassord != null && this.newPassord.length != 0) {
      this.usuarioForm.password = this.newPassord;
      this.formcadastro.salvaresetUserPassword(this.usuarioForm).subscribe(data => {
      this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!'});
      console.log(data);
    });
  } else {
    this.messageService.add({key: 'popup', severity: 'error', summary: 'Erro!', detail: 'Erro ao realizar alterações!'});
  }
  }

  getRoles() {
    const items = [];
    this.formcadastro.getRoles().subscribe(data => {
      for (let _i = 0; _i < data['data'].length; _i++) {
        this.item = new Role();
        this.item.id = (data['data'][_i].id);
        this.item.nivel = (data['data'][_i].nivel);
        this.item.profile = (data['data'][_i].profile);
        items.push(this.item);
      }
      this.selectRoles = items;
    });
  }

  getUser(dado) {
    this.showLoad = true;
    this.showForm = false;
    this.newPassord = null;

    if (dado == false) {
      if (this.nickname != undefined && this.nickname.length > 0) {
        this.formcadastro.getLogin(this.nickname).subscribe(event => {
          if (event instanceof HttpResponse) {
            let dadosBaixados: Usuario = event.body['data'][0];
    
            this.usuarioForm = dadosBaixados;
            this.usuarioForm.password = null;
    
            setTimeout(() => {
              this.showLoad = false;
              this.showForm = true;
            }, 500);
          }
        })
      } else {
        this.messageService.add({key: 'popup', severity: 'error', summary: 'Erro!', detail: 'O campo precisa estar preenchido!'});
        this.showLoad = false;
      }
    } else if (dado == true) {
      if (this.usuario != undefined && this.usuario.length > 0) {
        let slice = this.usuario.indexOf(' ');
    
        this.formcadastro.getNome(this.usuario.slice(0, slice)).subscribe(event => {
          if (event instanceof HttpResponse) {
            let dadosBaixados: Usuario = event.body['data'][0];
  
            this.usuarioForm = dadosBaixados;
            this.usuarioForm.password = null;
  
            setTimeout(() => {
              this.showLoad = false;
              this.showForm = true;
            }, 500);
          }
        })
      } else {
        this.messageService.add({key: 'popup', severity: 'error', summary: 'Erro!', detail: 'O campo precisa estar preenchido!'});
        this.showLoad = false;
      }
    }
  }

  searchNome(event) {
    this.formcadastro.getUsers(event.query).then(data => {
      this.results = this.formCadastroLogica.filtroClientePorNome(event.query, data['data']);
    });
  }

  searchLogin(event) {
    this.formcadastro.getNick(event.query).then(data => {
      this.resultsLogin = this.formCadastroLogica.filtroClientePorLogin(event.query, data['data']);
    });
  }

  resetRandonPassoword() {
    this.newPassord = this.formcadastro.makeid(8);
  }


}
