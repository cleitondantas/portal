import { Component, OnInit } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { Simulacoes } from 'src/app/models/simulacoes';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { CadastroChamadasService } from 'src/app/services/cadastro-chamadas.service';
import formatCpf from '@brazilian-utils/format-cpf';
import formatCnpj from '@brazilian-utils/format-cnpj';
import isValidCpf from '@brazilian-utils/is-valid-cpf';
import isValidCnpj from '@brazilian-utils/is-valid-cnpj';
import { Contatos } from 'src/app/models/contatos';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {
  comprador: Compradores = new Compradores()
  analise: Simulacoes = new Simulacoes();
  fid: any;
  dataNascimento: string;
  dataExpedicao: string;
  dataEnvioAoBanco: string;
  contatoDisplay: any[] = [];

  constructor(private chamadaService: AnaliseChamadasService,
              private cadastroChamadaService: CadastroChamadasService) { }

  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA');
    sessionStorage.removeItem('CADASTROSELECIONADO');
    sessionStorage.removeItem('fid');
  }

  ngOnInit() {
    let cadastroSelecionado = sessionStorage.getItem('CADASTROSELECIONADO');
    let analiseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');

    if (cadastroSelecionado != "undefined" && cadastroSelecionado != null) {
      let jsonObj: any = JSON.parse(cadastroSelecionado);
      let comprador: Compradores = <Compradores>jsonObj;

      comprador.cpfcnpj = this.formatCpfCnpj(comprador.cpfcnpj);

      let fimCep = comprador.cepresidencial.slice(5, comprador.cepresidencial.length);
      let comecoCep = comprador.cepresidencial.slice(0, 5);
      comprador.cepresidencial = comecoCep + "-" + fimCep;

      this.cadastroChamadaService.getTipoClientes().subscribe(dados => {
        let dadosBaixados = dados['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (comprador.codtipocliente == dadosBaixados[i].codtipocliente) {
            comprador.codtipocliente = dadosBaixados[i].desctipocliente
          }
        }
      })
      this.cadastroChamadaService.getEstadoCivil().subscribe(dados => {
        let dadosBaixados = dados['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (comprador.codestadocivil == dadosBaixados[i].codestadocivil) {
            comprador.codestadocivil = dadosBaixados[i].descestadocivil
          }
        }
      })

      comprador.datanascimento = new Date(comprador.datanascimento);
      comprador.datanascimento.toUTCString();
      this.dataNascimento = this.fixUTC(comprador.datanascimento);

      comprador.dataexpedicao = new Date(comprador.dataexpedicao);
      comprador.dataexpedicao.toUTCString();
      this.dataExpedicao = this.fixUTC(comprador.dataexpedicao);

      this.cadastroChamadaService.getTipoContato().subscribe(dados => {
        this.contatoDisplay = [];
        let dadosBaixados = dados['data'];
        for (let i = 0; i < comprador.contatos.length; i++) {
          for (let item = 0; item < dadosBaixados.length; item++) {
            if (comprador.contatos[i].codtipocontato == dadosBaixados[item].codtipocontato) {
              var contatoDisplay: Contatos = new Contatos();
              contatoDisplay.tipocontato = dadosBaixados[item].desctipocontato;
              contatoDisplay.desccontato =  comprador.contatos[i].desccontato;
              this.contatoDisplay.push(contatoDisplay);
            }
          }
        }
      })
    
      this.comprador = comprador;
      this.fid = JSON.parse(sessionStorage.getItem('fid'));
    }
    
    if (analiseSelecionada != "undefined" && analiseSelecionada != null) {
      let jsonObj: any = JSON.parse(analiseSelecionada);
      let analise: Simulacoes = <Simulacoes>jsonObj;

      this.chamadaService.getInstFinan().subscribe(dados => {
        let dadosBaixados = dados['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (analise.codinstituicaofinanceira == dadosBaixados[i].codInstituicaoFinanceira) {
            analise.codinstituicaofinanceira = dadosBaixados[i].descInstituicaoFinanceira
          }
        }
      })

      this.chamadaService.getModalidades().subscribe(dados => {
        let dadosBaixados = dados['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (analise.codmodalidadesimulacao == dadosBaixados[i].codModalidadeSimulacao) {
            analise.codmodalidadesimulacao = dadosBaixados[i].descModalidadeSimulacao
          }
        }
      })

      this.chamadaService.getTipoAmortizacao().subscribe(dados => {
        let dadosBaixados = dados['data'];
        for (let i = 0; i < dadosBaixados.length; i++) {
          if (analise.codtipoamortizacao == dadosBaixados[i].codtipoamortizacao) {
            analise.codtipoamortizacao = dadosBaixados[i].desctipoamortizacao
          }
        }
      })

      if (analise.codsicaq == 0) {
        analise.codsicaq = "Possui SICAQ";
      } else if (analise.codsicaq == 1) {
        analise.codsicaq = "Não possui SICAQ";
      }

      analise.dataenviobanco = new Date(analise.dataenviobanco);
      analise.dataenviobanco.toUTCString();
      this.dataEnvioAoBanco = this.fixUTC(analise.dataenviobanco);
    
      this.analise = analise;
    }

    this.chamadaService.buscarInformacoes.subscribe(dado => {
      if (dado == true) {
        this.ngOnInit();
      }
    })
  }

  private fixUTC(date: Date) {
    let ano  = date.getUTCFullYear();
    let mes = date.getUTCMonth();
    let dia = date.getUTCDate();
    let hora = date.getHours();
    let novaData: Date = new Date(Date.UTC(ano, mes, dia, hora + 3))
    let dataString = novaData.toLocaleString('pt-BR');
    let dataSlice = dataString.indexOf(" ");

    return dataString.slice(0, dataSlice);
  }

  formatCpfCnpj(cpfcnpj: string) {
    let cpf: boolean = isValidCpf(cpfcnpj);
    let cnpj: boolean = isValidCnpj(cpfcnpj);

    if (cpf == true) {
      cpfcnpj = formatCpf(cpfcnpj);
    } else if (cnpj == true) {
      cpfcnpj = formatCnpj(cpfcnpj)
    }

    return cpfcnpj;
  }

}
