import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TiposSanguineosComponent } from './tipos-sanguineos/tipos-sanguineos.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';
import { EstadosComponent } from './estados/estados.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { ModelMunicipiosComponent } from './model-municipios/model-municipios.component';
import { ModalCadastroTipoSanguineoComponent } from './modal-cadastro-tipo-sanguineo/modal-cadastro-tipo-sanguineo.component';
import { ToastGlobalComponent } from './toast-global/toast-global.component';
import { EntidadeComponent } from './entidade/entidade.component';
import { SolicitacaoSangueComponent } from './solicitacao-sangue/solicitacao-sangue.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TiposSanguineosComponent,
    FooterComponent,
    PaisesComponent,
    EstadosComponent,
    MunicipiosComponent,
    ModelMunicipiosComponent,
    ModalCadastroTipoSanguineoComponent,
    ToastGlobalComponent,
    EntidadeComponent,
    SolicitacaoSangueComponent
  ],
  imports: [
    CommonModule,    
    RouterModule,
    FormsModule, 
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TiposSanguineosComponent,
    FooterComponent
  ]
})
export class PlataformModule { }
