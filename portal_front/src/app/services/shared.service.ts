import { Injectable, EventEmitter, Output } from '@angular/core';

import { Usuario } from '../models/usuario';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static instance: SharedService = null;
  user : Usuario;
  token: string;

  @Output() messengerService = new MessageService();
  showTemplate = new EventEmitter<boolean>();
   @Output() showError = new EventEmitter<string>();

  constructor() { 
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn():boolean {
    /*if(this.user == null){
      return false;
    }
    return this.user.email != '';*/

    return true;
  }

  
}
