import { Component, OnInit } from '@angular/core';
import { DadosFaturamento } from 'src/app/models/dadosfaturamento';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { Analise } from 'src/app/models/analise';

@Component({
  selector: 'app-dados-faturamento',
  templateUrl: './dados-faturamento.component.html',
  styleUrls: ['./dados-faturamento.component.css']
})
export class DadosFaturamentoComponent implements OnInit {
  br: any;
  
  constructor(private analiseChamadasService: AnaliseChamadasService) { }

  dadosfaturamento: DadosFaturamento  = new DadosFaturamento()

  ngOnDestroy() {
    sessionStorage.removeItem('ANALISESELECIONADA'); // Remove a variavel  para nao ocorre problema posterior
    console.log("ngOnDestroy()")
  }
  ngOnInit() {
    this.br = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/mm/yy'
    }

    let analiseSelecionada = sessionStorage.getItem('ANALISESELECIONADA');    
    if (analiseSelecionada !== null || undefined) {
      let jsonObj: any = JSON.parse(analiseSelecionada);// Recebe os dados enviados pela busca de cadastro
      let analise: Analise = <Analise>jsonObj;
      this.dadosfaturamento.codanalise= analise.codanalise;
      this.dadosfaturamento.codcadastro = analise.codcadastro;
    }
  }

  salvar(formulario){
    console.log("formulario");
    console.log(formulario);
    console.log("this.dadosfaturamento");
    console.log(this.dadosfaturamento);
    this.analiseChamadasService.postDadosFaturamento(this.dadosfaturamento).subscribe(dados => (console.log(dados['data'])));
  }

  cancelar(){
    this.dadosfaturamento =  new DadosFaturamento();
  }
}
