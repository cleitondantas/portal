import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TemplateModule } from './modules/template/template.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AnaliseGuard } from './guards/analise.guard';
import { CadastroGuard } from './guards/cadastro.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { ConfirmationService } from 'primeng/api';
import { CalendarUTCDirective } from './directive/calendar-utc.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalendarUTCDirective
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    AnaliseGuard,
    CadastroGuard,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
        ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
