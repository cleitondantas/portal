import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/pages/home/home.component';
import { CadastroComponent } from './core/pages/cadastro/cadastro.component';
import { RelatorioListaComponent } from './core/pages/relatorio-lista/relatorio-lista.component';
import { LoginComponent } from './core/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastrousuarioComponent } from './core/pages/cadastrousuario/cadastrousuario.component';
import { GraficComponent } from './core/pages/grafic/grafic.component';
import { ImportComponent } from './core/pages/import/import.component';
import { InformacoesComponent } from './core/pages/informacoes/informacoes.component';
import { AnaliseCreditoComponent } from './core/pages/analise-credito/analise-credito.component';

const routes: Routes = [
  { path: 'informacoes', canActivate: [AuthGuard], component: InformacoesComponent},
  { path: 'analise', canActivate: [AuthGuard], component: AnaliseCreditoComponent},
  { path: 'importar', canActivate: [AuthGuard], component: ImportComponent},
  { path: 'cadastrousuario', canActivate: [AuthGuard],  component: CadastrousuarioComponent},
  { path: 'home',  canActivate: [AuthGuard],  component: HomeComponent},
  { path: 'grafic', canActivate: [AuthGuard], component: GraficComponent},
  { path: 'cadastro', canActivate: [AuthGuard], component: CadastroComponent},
  { path: 'lista', canActivate: [AuthGuard], component: RelatorioListaComponent},
  { path: 'login', component: LoginComponent},
  { path: '', canActivate: [AuthGuard], pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
