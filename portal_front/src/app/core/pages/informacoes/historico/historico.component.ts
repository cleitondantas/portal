import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  ponto: any[];

  constructor() { }

  ngOnInit() {
    this.ponto = [
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
    ]
  }

}
