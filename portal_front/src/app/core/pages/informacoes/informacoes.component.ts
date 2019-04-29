import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {
  load: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnDestroy() {
    const storage = ['CADASTRODADOS', 'ANALISEDADOS', 'fid', 'codcadastro', 'CADASTROINFO'];
    for (let i = 0; i < storage.length; i++) {
        if (sessionStorage.getItem(storage[i]) !== null || undefined || 'undefined') {
            sessionStorage.removeItem(storage[i]);
        }
    }
  }

  ngOnInit() {
    this.sharedService.showLoader.subscribe(dado => {
      this.load = dado;
    })
  }

}
