import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuBarComponent } from './components/header-menu-bar/menu-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { CoreModule } from '../../core/core.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {MenuModule} from 'primeng/menu';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';



@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    CoreModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    MenuModule,
    DialogModule,
    PanelModule,
    ButtonModule,
    AutoCompleteModule,
    TableModule
  ],
  declarations: [
    ContentComponent,
    MenuBarComponent,
    FooterComponent,
    MainComponent
  ],
  exports: [
    ContentComponent,
    FooterComponent,
    MainComponent
  ],
})
export class TemplateModule {

 }
