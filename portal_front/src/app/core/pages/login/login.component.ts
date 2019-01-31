import { Component, OnInit ,isDevMode } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../models/usuario';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private usuario: Usuario = new Usuario();
shared : SharedService;
mensagemErro ='';

user = new Usuario();
  constructor(private authService: AuthService) {
    this.shared = SharedService.getInstance();
    this.shared.showError.subscribe(
      erro => this.mensagemErro = erro
    )
   }


  ngOnInit() {
  }


  fazerLogin(from : NgForm){
    this.authService.fazerLogin(from,this.user)
  }

}
