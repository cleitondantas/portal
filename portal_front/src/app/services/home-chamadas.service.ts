import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeChamadasService {

  constructor(private http: HttpClient) { }

  getCadastrosTop() {
    return this.http.request(new HttpRequest('GET', environment.urlpath + '/api/cadastros/top', {
      reportProgress: true
    }));
  }
}
