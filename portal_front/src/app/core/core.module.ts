import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { CadastrousuarioComponent } from './pages/cadastrousuario/cadastrousuario.component';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { RelatorioListaComponent } from './pages/relatorio-lista/relatorio-lista.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { GraficComponent } from './pages/grafic/grafic.component';
import { ChartModule } from 'primeng/primeng';
import { ImportComponent } from './pages/import/import.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TextMaskModule } from 'angular2-text-mask';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


import { DadosCadastraisComponent } from './pages/informacoes/dados-cadastrais/dados-cadastrais.component';
import { HistoricoComponent } from './pages/informacoes/historico/historico.component';
import { AnaliseCreditoComponent } from './pages/analise-credito/analise-credito.component';
import { DadosFaturamentoComponent } from './pages/analise-credito/dados-faturamento/dados-faturamento.component';
import { AnaliseComponent } from './pages/analise-credito/analise/analise.component';

import { PrimeNgCalendarMaskDirective } from 'src/app/directive/maskInput.directive';

@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    ButtonModule,
    PanelModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    PasswordModule,
    CheckboxModule,
    MultiSelectModule,
    ScrollPanelModule,
    ChartModule,
    FileUploadModule,
    InputTextModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    TabMenuModule,
    MenuModule,
    TabViewModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    KeyFilterModule,
    TextMaskModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [
    HomeComponent,
    Error404Component,
    LoginComponent,
    CadastroComponent,
    CadastrousuarioComponent,
    RelatorioListaComponent,
    GraficComponent,
    ImportComponent,
    InformacoesComponent,
    DadosCadastraisComponent,
    HistoricoComponent,
    AnaliseCreditoComponent,
    DadosFaturamentoComponent,
    AnaliseComponent,
    PrimeNgCalendarMaskDirective
    ],
  exports: [
    CadastroComponent,
    LoginComponent,
    Error404Component,
    HomeComponent,
    CadastrousuarioComponent,
    RelatorioListaComponent,
    InformacoesComponent,
    PrimeNgCalendarMaskDirective

  ],
})
export class CoreModule { }
