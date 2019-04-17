import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { AnaliseCreditoComponent } from './pages/analise-credito/analise-credito.component';
import { ImportComponent } from './pages/import/import.component';
import { CadastrousuarioComponent } from './pages/cadastrousuario/cadastrousuario.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RelatorioListaComponent } from './pages/relatorio-lista/relatorio-lista.component';
import { LoginComponent } from './pages/login/login.component';
import { GraficComponent } from './pages/grafic/grafic.component';

const routes: Routes = [
{ path: 'informacoes', component: InformacoesComponent},
{ path: 'analise', component: AnaliseCreditoComponent},
{ path: 'importar', component: ImportComponent},
{ path: 'cadastrousuario', component: CadastrousuarioComponent},
{ path: 'grafic', component: GraficComponent},
{ path: 'cadastro', component: CadastroComponent},  
{ path: 'lista', component: RelatorioListaComponent},
{ path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
