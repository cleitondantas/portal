import { Message } from 'primeng/api';
import { Component, OnInit , isDevMode } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../models/usuario';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private usuario: Usuario = new Usuario();
shared: SharedService;
mensagemErro = '';
msgs: Message[] = [];
hidden = true;

user = new Usuario();
  constructor(private authService: AuthService) {
    this.shared = SharedService.getInstance();
    this.shared.showError.subscribe(
      erro => this.mensagemErro = erro
    );
   }

  ngOnInit() {
  }

  fazerLogin(from: NgForm) {
    this.msgs = [];
    setTimeout(() => {
      this.hidden = false;
    }, 301);
    this.authService.fazerLogin(from, this.user);

    this.authService.msgError.subscribe(dado => {
      setTimeout(() => {
        this.hidden = true;
        if (dado == false) {
          this.msgs = [];
          this.msgs.push({
            severity: 'error',
            summary: 'Erro ao logar!',
            detail: 'Usúario ou senha estão incorretos.'
          });
        } else {
          this.msgs = [];
        }
      }, 301);
    })
  }
}
