import { Component, OnInit } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { CadastroLogicaService } from 'src/app/services/cadastro-logica.service';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  fid: any;
  ponto: any[];

  constructor(private cadastroLogicaService: CadastroLogicaService, private chamadaService: AnaliseChamadasService) { }

  ngOnInit() {
    this.visualizarCadInfo();

    this.chamadaService.buscarInformacoes.subscribe(dado => {
      if (dado == true) {
      this.visualizarCadInfo();
      }
    });

    this.ponto = [
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
      {data: 'a', historico: 'b', usuario: 'c', fase: 'd', sintese: 'e'},
    ];
  }

  visualizarCadInfo() {
    const cadastroSelecionado = sessionStorage.getItem('CADASTRODADOS');
    const cadInfoSelecionado = sessionStorage.getItem('CADASTROINFO');
    if (cadastroSelecionado != 'undefined' && cadastroSelecionado != null) {
      const comprador: Compradores = this.cadastroLogicaService.getDadosCadastrais(cadastroSelecionado);

      this.comprador = comprador;
      this.fid = JSON.parse(sessionStorage.getItem('fid'));
    }

    if (cadInfoSelecionado != 'undefined' && cadastroSelecionado != null) {
      const cadInfo: CadastroInformacao = this.cadastroLogicaService.getCadInfo(cadInfoSelecionado);
      this.cadInfo = cadInfo;
    }
  }
}
