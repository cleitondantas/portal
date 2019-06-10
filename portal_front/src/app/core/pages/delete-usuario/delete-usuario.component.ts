import { Component, OnInit } from '@angular/core';
import { FormcadastroService } from 'src/app/services/formcadastro.service';
import { HttpResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { Role } from 'src/app/models/role';
import { FormCadastroLogicaService } from 'src/app/services/form-cadastro-logica.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css'],
  providers: [MessageService]
})
export class DeleteUsuarioComponent implements OnInit {
  usuario: string;
  nickname: string;

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


  deleteUser() {
    this.formcadastro.deleteUpdate(this.usuarioForm).subscribe(data => {
      console.log(data);
    });
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

    if (dado == false) {
      this.formcadastro.getLogin(this.nickname).subscribe(event => {
        if (event instanceof HttpResponse) {
          const dadosBaixados: Usuario = event.body['data'][0];

          this.usuarioForm = dadosBaixados;
          this.usuarioForm.password = null;

          setTimeout(() => {
            this.showLoad = false;
            this.showForm = true;
          }, 500);
        }
      });
    } else if (dado == true) {
      const slice = this.usuario.indexOf(' ');

      this.formcadastro.getNome(this.usuario.slice(0, slice)).subscribe(event => {
        if (event instanceof HttpResponse) {
          const dadosBaixados: Usuario = event.body['data'][0];

          this.usuarioForm = dadosBaixados;
          this.usuarioForm.password = null;

          setTimeout(() => {
            this.showLoad = false;
            this.showForm = true;
          }, 500);
        }
      });
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

}
