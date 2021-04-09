import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlataformModule } from './modules/plataform/plataform.module';
import { WebsiteModule } from './modules/website/website.module';

import { LoginComponent } from './components/login/login.component';
import { PlataformComponent } from './components/plataform/plataform.component';
import { WebsiteComponent } from './components/website/website.component';

import { LoginService } from './components/login/login.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { PaisesService } from './service/paises.service';
import { EstadosService } from './service/estados.service';
import { MunicipiosService } from './service/municipios.service';
import { TiposSanguineosService } from './service/tipos-sanguineos.service';
import { EntidadeService } from './service/entidade.service';
import { SolicitacaoSangueService } from './service/solicitacao-sangue.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlataformComponent,
    WebsiteComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    NgbModule,
    PlataformModule,
    WebsiteModule
  ],
  providers: [
    LoginService,
    PaisesService,
    EstadosService,
    MunicipiosService,
    TiposSanguineosService,
    EntidadeService,
    SolicitacaoSangueService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
