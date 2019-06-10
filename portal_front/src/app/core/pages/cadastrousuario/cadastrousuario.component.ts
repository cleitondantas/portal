import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormcadastroService } from 'src/app/services/formcadastro.service';
import { SelectItem, Message } from 'primeng/api';
import { Role } from '../../../models/role';
import { SharedService } from '../../../services/shared.service';
import isValidCpf from '@brazilian-utils/is-valid-cpf';
import isValidCnpj from '@brazilian-utils/is-valid-cnpj';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario2.component.html',
  styleUrls: ['./cadastrousuario.component.css']
})


export class CadastrousuarioComponent implements OnInit {
  @ViewChild('form', { read: NgForm }) form: any;

  roles: SelectItem[];
  selectRoles: Role[];
  roleArray: any;
  usuario: Usuario = new Usuario();
  shared: SharedService;
  user: Usuario;
  item: Role;
  msgs: Message[] = [];
  confirmarSenha: string;
  confirmarNickName: string;

  constructor(private service: FormcadastroService) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {

    this.getRoles();
  }


  getRoles() {
    const items = [];
    this.service.getRoles().subscribe(data => {
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

  onSubmit(form: FormBuilder) {
    this.msgs = [];
    if (this.validaForm() == true) {
      this.service.createOrUpdateUsuer(this.usuario).subscribe(res => {
        this.showConfirm();
        this.clearUser(this.usuario);
      }, err => {
        console.log(err);
      });
    } else {
      this.msgErro();
    }
  }

  showConfirm() {
    this.shared.messengerService.clear();
    this.shared.messengerService.add({key: 'ok', severity: 'success', summary: 'Ação Realizada', detail: 'Ação Realizada com Sucesso!'});
  }

  clearUser(usuario: Usuario) {
    this.form.reset();
    this.msgs = [];
  }

  validaForm() {
    const cpf: boolean = isValidCpf(this.usuario.cpf);
    const cnpj: boolean = isValidCnpj(this.usuario.cpf);
    let controle = false;

    if ((cpf || cnpj == true) && (this.usuario.cpf !== null)) {
      controle =  true;
    } else {
      controle =  false;
    }

    if ((this.usuario.login == this.confirmarNickName) && (this.usuario.password == this.confirmarSenha) && (controle == true) && (this.usuario.login != '') && (this.usuario.password != '')) {
      return true;
    } else {
      return false;
    }
  }

  msgErro() {
    const forms = ['login', 'confirmarNickName', 'senha', 'confirmarSenha', 'cpf'];
    for (let i = 0; i < forms.length; i++) {
      this.form.controls[forms[i]].status = 'VALID';
    }

    if (this.usuario.login != this.confirmarNickName) {
      this.form.controls['confirmarNickName'].status = 'INVALID';
      this.form.controls['login'].status = 'INVALID';
      this.form.controls['confirmarNickName'].pristine = false;
      this.form.controls['login'].pristine = false;

      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao cadastrar usuário!',
        detail: `Os campos de nickname não coincidem.`
      });
    }

    if (this.usuario.login == '' || this.confirmarNickName == '') {
      this.form.controls['confirmarNickName'].status = 'INVALID';
      this.form.controls['login'].status = 'INVALID';
      this.form.controls['confirmarNickName'].pristine = false;
      this.form.controls['login'].pristine = false;

      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao cadastrar usuário!',
        detail: `Os campos de nickname estão em branco.`
      });
    }

    if (this.usuario.password != this.confirmarSenha) {
      this.form.controls['confirmarSenha'].status = 'INVALID';
      this.form.controls['senha'].status = 'INVALID';
      this.form.controls['confirmarSenha'].pristine = false;
      this.form.controls['senha'].pristine = false;

      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao cadastrar usuário!',
        detail: `As senhas não coincidem.`
      });
    }

    if (this.usuario.password == '' || this.confirmarSenha == '') {
      this.form.controls['confirmarSenha'].status = 'INVALID';
      this.form.controls['senha'].status = 'INVALID';
      this.form.controls['confirmarSenha'].pristine = false;
      this.form.controls['senha'].pristine = false;

      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao cadastrar usuário!',
        detail: `Os campos de senha estão em branco.`
      });
    }

    if ((isValidCpf(this.usuario.cpf) != true) && (isValidCnpj(this.usuario.cpf) != true)) {
      this.form.controls['cpf'].status = 'INVALID';
      this.form.controls['cpf'].pristine = false;

      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao cadastrar usuário!',
        detail: `O CPF não é válido.`
      });
    }

    if (this.usuario.cpf == '') {
      this.form.controls['cpf'].status = 'INVALID';
      this.form.controls['cpf'].pristine = false;

      this.msgs.push({
        severity: 'error',
        summary: 'Erro ao cadastrar usuário!',
        detail: `O campo de CPF está em branco.`
      });
    }
  }
}
