import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analise-credito',
  templateUrl: './analise-credito.component.html',
  styleUrls: ['./analise-credito.component.css']
})
export class AnaliseCreditoComponent implements OnInit {
  selected: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
