import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from 'primeng/api';
import { SharedService } from 'src/app/services/shared.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { FormcadastroService } from 'src/app/services/formcadastro.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.css'],
  providers: [MessageService]
})
export class TrocarSenhaComponent implements OnInit {
  usuario: Usuario = new Usuario();
  senha: string;
  confirmarSenha: string;
  msgs: Message[] = [];

  constructor(private sharedService: SharedService,
              private formCadastroService: FormcadastroService,
              private messageService: MessageService,
              private router: Router) { }

  ngOnInit() {
    const user: Usuario = this.sharedService.getSessionUsuario();
    this.formCadastroService.getLogin(user.login).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.usuario = event.body['data'][0];
      }
    });
  }

  trocarSenha() {
    this.msgs = [];
    if (this.verificarSenha() == true) {
      this.usuario.password = this.senha;
      console.log(this.usuario);
      this.formCadastroService.salvarTrocarSenha(this.usuario).subscribe(data => {
        console.log(data);
        this.messageService.add({key: 'popup', severity: 'success', summary: 'Sucesso!', detail: 'Alterações salvas!'});
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      });
    } else {
      if (this.senha == undefined || this.confirmarSenha == undefined) {
        this.msgs.push({severity: 'error', summary: 'Erro ao alterar a senha!', detail: 'O tamanho mínimo é de 8 caractéres!'});
      } else if (this.senha.length < 8 || this.confirmarSenha.length < 8) {
        this.msgs.push({severity: 'error', summary: 'Erro ao alterar a senha!', detail: 'O tamanho mínimo é de 8 caractéres!'});
      }

      if (this.senha != this.confirmarSenha) {
        this.msgs.push({severity: 'error', summary: 'Erro ao alterar a senha!', detail: 'As senhas não coincidem!'});
      }
    }
  }

  cancelar() {
    this.router.navigate(['/home']);
  }

  verificarSenha() {
    if (this.senha == undefined || this.confirmarSenha == undefined) {
      return false;
    } else if ((this.senha == this.confirmarSenha) && (this.senha.length >= 8) && (this.confirmarSenha.length >= 8)) {
      return true;
    } else {
      return false;
    }
  }
}
