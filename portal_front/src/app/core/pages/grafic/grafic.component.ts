import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})
export class GraficComponent implements OnInit {
  data: any;
  constructor() { 
    this.data = {
      labels: ['Malote','Conferencia','Liberação'],
      datasets: [
          {
              data: [50, 50, 50],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6380",
                  "#36A280",
                  "#FFCE80"
              ]
          }]    
      };
  }

  ngOnInit() {
  }

}
