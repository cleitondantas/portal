import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-analise-credito',
  templateUrl: './analise-credito.component.html',
  styleUrls: ['./analise-credito.component.css']
})
export class AnaliseCreditoComponent implements OnInit {
  selected = 0;
  disabled = true;

  constructor() { }

  ngOnInit() {
  }

}
