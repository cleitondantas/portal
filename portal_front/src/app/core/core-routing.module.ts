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
import { ChatComponent } from './pages/chat/chat.component';
import { UpdateUsuarioComponent } from './pages/update-usuario/update-usuario.component';
import { DeleteUsuarioComponent } from './pages/delete-usuario/delete-usuario.component';
import { ResetUsuarioComponent } from './pages/reset-usuario/reset-usuario.component';

const routes: Routes = [
{ path: 'informacoes', component: InformacoesComponent},
{ path: 'analise', component: AnaliseCreditoComponent},
{ path: 'importar', component: ImportComponent},
{ path: 'cadastrousuario', component: CadastrousuarioComponent},
{ path: 'updateusuario', component: UpdateUsuarioComponent},
{ path: 'deleteusuario', component: DeleteUsuarioComponent},
{ path: 'resetusuario', component: ResetUsuarioComponent},
{ path: 'grafic', component: GraficComponent},
{ path: 'cadastro', component: CadastroComponent},
{ path: 'lista', component: RelatorioListaComponent},
{ path: 'login', component: LoginComponent},
{ path: 'chat', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
