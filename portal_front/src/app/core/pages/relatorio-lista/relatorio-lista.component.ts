import { Component, OnInit } from '@angular/core';
import { RelatorioListaService } from './relatorio-lista.service';
import { Historico } from '../../../models/historico';
import * as $ from 'jquery';
import { SelectItem } from 'primeng/api';
import { HistoricoSimples } from '../../../models/HistoricoSimples';

@Component({
  selector: 'app-relatorio-lista',
  templateUrl: './relatorio-lista.component.html',
  styleUrls: ['./relatorio-lista.component.css']
})


export class RelatorioListaComponent implements OnInit {
  proposta: string;
  historicos: Historico[];
  brands: SelectItem[];
  cols: any[];
  historicoSimples: HistoricoSimples[];
  contaPassos: number;
  constructor(private service: RelatorioListaService) {}

  ngOnInit() {

    this.buscarExist(3, 1);
    document.getElementById('idIndex').classList.remove('stylebody');
    this.brands = [
      { label: 'All Area', value: null },
      { label: 'Liberacao', value: 'Liberacao' },
      { label: 'Conferência', value: 'Conferência' },
      { label: 'Malote', value: 'Malote' }
  ];
      this.cols = [
        { field: 'atividade', header: 'Atividade' },
        { field: 'nomeCliente', header: 'Cliente' },
        { field: 'codCadastro', header: 'Cadastro' },
        { field: 'nContrato', header: 'Contrato' },
        { field: 'numProposta', header: 'Proposta' },
        { field: 'area', header: 'Area' },
        { field: 'status', header: 'Status' },
        { field: 'subStatus', header: 'SubStatus' },
        { field: 'obs', header: 'obs' }
    ];
  }
  buscarHistoricoPorProposta() {
    this.service.buscarHistoricoPorProposta(this.proposta).subscribe((data: Historico[]) => this.preencheTabela(data));

  }
  buscarHistoricoPorContrato() {
    this.service.buscarHistoricoPorContrato(this.proposta).subscribe((data: Historico[]) => this.preencheTabela(data));
  }

  buscarHistoricoPorDocumento() {
    this.service.buscarHistoricoPorDocumento(this.proposta).subscribe((data: Historico[]) => this.preencheTabela(data));
  }


  buscarExist(z: number, p: number) {
    let i = 1;
    passos(z, p);
   function passos(m, n) {
        // Quantidade de passos
        if (i < m) {
            do {
                i++;
             //  $('.progressbar li:last').after("<li _ngcontent-c8  id='" + i + "'>Passo " + i + "</li>");
                const wi = 100 / i;
                $('.progressbar li').css({ 'width': wi + '%' });
            } while (i < m);
        }
        // Passos concluídos
        $('#' + n).addClass('active').prevAll().addClass('active');
        // Passos concluídos
        if ($('#' + n).hasClass('active')) {
            $('#' + n).nextAll().removeClass('active');
        } else {
            $('#' + n).addClass('active').prevAll().addClass('active');
        }
    }
  }



  preencheTabela(data: Historico[]) {
    const items = [];
    this.contaPassos = 0;
    for (const item  of  data) {
      if (this.contaPassos <= item.area.codArea) {
        this.contaPassos =  item.area.codArea;
         this.buscarExist(3, this.contaPassos);
      }
    items.push(new HistoricoSimples(
      item.id,
      item.cadastroProposta.cliente.nomeCliente,
      item.cadastroProposta.codCadastro,
      item.cadastroProposta.nContrato,
      item.cadastroProposta.numProposta,
      item.area.descAreaCadastro,
      item.status.descStatus,
      item.subStatus.descSubStatus,
      item.dtAtividade,
      item.obs));
    }

    this.historicoSimples = items;
  }
}
