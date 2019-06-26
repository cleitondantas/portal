import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AnaliseGuard } from './guards/analise.guard';

const routes: Routes = [
  { path: 'informacoes', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'analise', canActivate: [AuthGuard, AnaliseGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'importar', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'cadastrousuario', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'updateusuario', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'deleteusuario', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'resetusuario', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'trocarsenha', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'home',  canActivate: [AuthGuard],  component: HomeComponent},
  { path: 'grafic', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'cadastro', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'lista', canActivate: [AuthGuard], loadChildren: './core/core.module#CoreModule'},
  { path: 'login', loadChildren: './core/core.module#CoreModule'},
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
