import { Component, OnInit} from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { AnaliseLogicaService } from 'src/app/services/analise-logica.service';
import { CadastroLogicaService } from 'src/app/services/cadastro-logica.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {
  load: boolean;

  comprador: Compradores = new Compradores();
  analise: Simulacoes = new Simulacoes();
  fid: any;
  dataNascimento: string;
  dataExpedicao: string;
  dataEnvioAoBanco: string;
  contatoDisplay: any[] = [];

  constructor(private chamadaService: AnaliseChamadasService,
              private analiseLogicaService: AnaliseLogicaService,
              private cadastroLogicaService: CadastroLogicaService,
              private sharedService: SharedService) {}

  ngOnDestroy() {
    const storage = ['CADASTRODADOS', 'ANALISEDADOS', 'fid', 'codcadastro'];
    for (let i = 0; i < storage.length; i++) {
        if (sessionStorage.getItem(storage[i]) !== null || undefined || 'undefined') {
            sessionStorage.removeItem(storage[i]);
        }
    }
  }

  ngOnInit() {
    this.visualizarDados();

    this.chamadaService.buscarInformacoes.subscribe(dado => {
      if (dado == true) {
        this.analise = new Simulacoes();
        this.dataEnvioAoBanco = '';
        this.visualizarDados();
      }
    });

    this.sharedService.showLoader.subscribe(dado => {
      this.load = dado;
    })
  }

  visualizarDados() {
    const cadastroSelecionado = sessionStorage.getItem('CADASTRODADOS');
    const analiseSelecionada = sessionStorage.getItem('ANALISEDADOS');

    if (cadastroSelecionado != 'undefined' && cadastroSelecionado != null) {
      const comprador: Compradores = this.cadastroLogicaService.getDadosCadastrais(cadastroSelecionado);

      this.dataNascimento = this.fixUTC(comprador.datanascimento);
      this.dataExpedicao = this.fixUTC(comprador.dataexpedicao);
      this.contatoDisplay = this.cadastroLogicaService.getContatoDisplay(comprador);

      this.comprador = comprador;
      this.fid = JSON.parse(sessionStorage.getItem('fid'));
    }

    if (analiseSelecionada != 'undefined' && analiseSelecionada != null) {
      const analise: Simulacoes = this.analiseLogicaService.getDadosCadastrais(analiseSelecionada);
      this.dataEnvioAoBanco = this.fixUTC(analise.dataenviobanco);

      this.analise = analise;
    } else {
      this.sharedService.getBanco = true;
      this.sharedService.getModalidade = true;
      this.sharedService.getAmortizacao = true;
      this.sharedService.hiddenLoader();
    }
  }

  private fixUTC(date: Date) {
    const ano  = date.getUTCFullYear();
    const mes = date.getUTCMonth();
    const dia = date.getUTCDate();
    const hora = date.getHours();
    const novaData: Date = new Date(Date.UTC(ano, mes, dia, hora + 3));
    const dataString = novaData.toLocaleString('pt-BR');
    const dataSlice = dataString.indexOf(' ');

    return dataString.slice(0, dataSlice);
  }
}
