import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { FormBuilder } from '@angular/forms';
import { FormcadastroService } from 'src/app/services/formcadastro.service';
import { SelectItem } from 'primeng/api';
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
  roles: SelectItem[];
  selectRoles: Role[];
  roleArray: any;
  usuario: Usuario = new Usuario();
  shared: SharedService;
  user: Usuario;
  item: Role;
  confirmarSenha: string;
  confirmarNickName: string;

  constructor(private service: FormcadastroService) {
    this.shared = SharedService.getInstance();
   }

  ngOnInit() {

    this.getRoles();
  }


  getRoles() {
    let items = [];
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
    if (this.validaForm() == true) {
      this.service.createOrUpdateUsuer(this.usuario).subscribe(res => {
        this.showConfirm();
        this.clearUser(this.usuario);
      }, err => {
        console.log(err);
      });
    } else {
      console.log('os campos nao coincidem')
    }
  }

  showConfirm() {
    this.shared.messengerService.clear();
    this.shared.messengerService.add({key: 'ok', severity: 'success', summary: 'Ação Realizada', detail: 'Ação Realizada com Sucesso!'});
  }

  clearUser(usuario: Usuario) {
    usuario.cpf = '';
    usuario.email = '';
    usuario.login = '';
    usuario.nome = '';
    usuario.password = '';
    usuario.perfis = null;
    usuario.sobrenome = '';
    usuario.telefone = '';
  }

  validaForm() {
    const cpf: boolean = isValidCpf(this.usuario.cpf);
    const cnpj: boolean = isValidCnpj(this.usuario.cpf);
    let controle: boolean = false;

    if ((cpf || cnpj == true) && (this.usuario.cpf !== null)) {
      controle =  true;
    } else {
      controle =  false;
    }
    
    if ((this.usuario.login == this.confirmarNickName) && (this.usuario.password == this.confirmarSenha) && (controle == true)) {
      return true
    } else {
      return false;
    }
  }

}
