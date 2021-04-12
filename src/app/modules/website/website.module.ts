import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WebNavbarComponent } from './web-navbar/web-navbar.component';
import { WebHomeComponent } from './web-home/web-home.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebSobreComponent } from './web-sobre/web-sobre.component';
import { WebContatoComponent } from './web-contato/web-contato.component';
import { WebModalDoadorComponent } from './web-modal-doador/web-modal-doador.component';

@NgModule({
  declarations: [
    WebNavbarComponent,
    WebHomeComponent,    
    WebSobreComponent,
    WebContatoComponent,
    WebFooterComponent,
    WebModalDoadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    HttpClientModule
  ],
  exports: [
    WebNavbarComponent,
    WebHomeComponent,
    WebSobreComponent,
    WebContatoComponent,
    WebFooterComponent
  ]
})
export class WebsiteModule { }
