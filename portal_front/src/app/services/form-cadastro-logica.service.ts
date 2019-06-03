import { Injectable } from '@angular/core';
import { FormcadastroService } from './formcadastro.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FormCadastroLogicaService {

  constructor(private formcadastro: FormcadastroService) { }

  filtroClientePorNome(query, clienteQuery: Usuario[]) {
  const filtered: any[] = [];
  for (let i = 0; i < clienteQuery.length; i++) {
   // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
      filtered.push(clienteQuery[i].nome + ' ' + clienteQuery[i].sobrenome);
   // }
  }
  return filtered;
  }

  filtroClientePorLogin(query, clienteQuery: Usuario[]) {
    const filtered: any[] = [];
    for (let i = 0; i < clienteQuery.length; i++) {
     // if(clienteQuery[i].nomecliente.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(clienteQuery[i].login);
     // }
    }
    return filtered;
  }
}
