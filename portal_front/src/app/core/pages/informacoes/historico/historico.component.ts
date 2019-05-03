<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { CadastroLogicaService } from 'src/app/services/cadastro-logica.service';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { Fase } from 'src/app/models/fase';
import { Sintese } from 'src/app/models/sintese';
import { HistoricoAnalise } from 'src/app/models/HistoricoAnalise';
import { UsersService } from 'src/app/services/users.service';
import { HttpResponse } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  comprador: Compradores = new Compradores();
  cadInfo: CadastroInformacao = new CadastroInformacao();
  disabledSintese: boolean = true;
  loadSpin: boolean = false;
  fid: any;
  ponto: any[];
  fases: Fase[];
  sinteses: Sintese[];
  historicoAnalises: HistoricoAnalise[] = [];
  historicoAnalise: HistoricoAnalise = new HistoricoAnalise();


  constructor(
     private cadastroLogicaService: CadastroLogicaService,
     private chamadaService: AnaliseChamadasService,
     private usersService: UsersService,
     private historicoService: HistoricoService,
     private sharedService: SharedService) { }
     
  ngOnInit() {
    this.chamadaService.getDadosCadastrais('fases').subscribe(event => {
      if (event instanceof HttpResponse) {
        this.fases = event.body['data'];
        console.log(this.fases)
      }
    })
    this.visualizarCadInfo();

    this.chamadaService.buscarInformacoes.subscribe(dado => {
      if (dado == true) {
      this.visualizarCadInfo();
      }
    });


    this.getHistorico();  
  }

  changeFases(event){
    this.loadSpin = true;   
    const numfase: Fase = event.value;
    this.historicoService.getSintesePorFaseRequest(numfase.numfase).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.sinteses = event.body['data'];
        setTimeout(() => {
          this.loadSpin = false;
        }, 300);
      }
    })
    this.disabledSintese = false;
  }

  getHistorico(){
   this.historicoService.getHistorico(79).subscribe(data => {
        for (let i = 0; i < data['data'].length; i++) {
            console.log('Historico->'+ data['data'][i].datahistorico);
            this.usersService.getUsuario(data['data'][i].codcadastro);
      }
   });
   
  }

  salvar(data){
    let data2: HistoricoAnalise = new HistoricoAnalise();
    data2 = data;
    data2.datahistorico = new Date().toDateString();
    let user: Usuario = this.sharedService.getSessionUsuario();
    data2.usuario = user.codUsuario;
    this.historicoAnalises.push(data2);
    console.log(this.historicoAnalises);
    this.historicoAnalise = new HistoricoAnalise();
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
=======
import { Component, OnInit } from '@angular/core';
import { Compradores } from 'src/app/models/compradores';
import { CadastroLogicaService } from 'src/app/services/cadastro-logica.service';
import { CadastroInformacao } from 'src/app/models/cadastro-informacao';
import { AnaliseChamadasService } from 'src/app/services/analise-chamadas.service';
import { HistoricoService } from 'src/app/services/historico.service';
import { Fase } from 'src/app/models/fase';
import { Sintese } from 'src/app/models/sintese';
import { HistoricoAnalise } from 'src/app/models/HistoricoAnalise';
import { UsersService } from 'src/app/services/users.service';

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
  fases: Fase[];
  sinteses: Sintese[];
  sintese: Sintese;
  fase: Fase;
  historicoAnalises: HistoricoAnalise[];

  constructor(
     private cadastroLogicaService: CadastroLogicaService,
     private chamadaService: AnaliseChamadasService,
     private usersService: UsersService,
     private historicoService: HistoricoService) { }
     
  ngOnInit() {
    this.visualizarCadInfo();

    this.chamadaService.buscarInformacoes.subscribe(dado => {
      if (dado == true) {
      this.visualizarCadInfo();
      }
    });
    this.getFases();
    this.getSintese();

  }

  getFases(){
    this.historicoService.getFases().subscribe(data =>{
      this.fases =  data['data'];
    });
  }

  getSintese(){
    this.historicoService.getSinteses().subscribe(data => {
      this.sinteses = data['data'];
    })
  }

  changeFases(event){
    console.log(event.value);
    this.historicoService.getSintesePorFase(this.fase.numfase).subscribe(data => {
      this.sinteses = data['data'];
    })
  }


  getHistorico(){
   this.historicoService.getHistorico(79).subscribe(data => {
        for (let i = 0; i < data['data'].length; i++) {
            console.log('Historico->'+ data['data'][i].datahistorico);
      }
   });
  }

  getUsuarios(){
    this.usersService.getUsuario(10001).subscribe(data=>{
     
    })
  }

  salvar(){
    console.log(this.sintese.sintese)
    console.log(this.fase.fase)
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
>>>>>>> Stashed changes
