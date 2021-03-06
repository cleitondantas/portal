import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private authService: AuthService) { }
  mostrarMenu = false;

  ngOnInit() {
    this.authService.mostrarsistema.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    if (this.authService.isUsuarioAutenticado()) {
      this.mostrarMenu = true;
    }
  }

  public logOut() {
    this.authService.mostrarsistema.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }


}
