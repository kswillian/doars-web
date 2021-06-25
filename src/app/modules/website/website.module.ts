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
import { WebModalContatoEmailComponent } from './web-modal-contato-email/web-modal-contato-email.component';
import { WebFormularioEmailComponent } from './web-formulario-email/web-formulario-email.component';
import { WebModalEntidadeComponent } from './web-modal-entidade/web-modal-entidade.component';

@NgModule({
  declarations: [
    WebNavbarComponent,
    WebHomeComponent,    
    WebSobreComponent,
    WebContatoComponent,
    WebFooterComponent,
    WebModalDoadorComponent,
    WebModalContatoEmailComponent,
    WebFormularioEmailComponent,
    WebModalEntidadeComponent
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
    WebModalDoadorComponent,
    WebModalContatoEmailComponent,
    WebFormularioEmailComponent,
    WebFooterComponent
  ]
})
export class WebsiteModule { }
