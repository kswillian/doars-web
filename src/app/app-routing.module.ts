import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PlataformComponent } from './components/plataform/plataform.component';

import { DashboardComponent } from './modules/plataform/dashboard/dashboard.component';
import { TiposSanguineosComponent } from './modules/plataform/tipos-sanguineos/tipos-sanguineos.component';

import { AuthGuard } from 'src/app/auth.guard';
import { PaisesComponent } from './modules/plataform/paises/paises.component';
import { EstadosComponent } from './modules/plataform/estados/estados.component';
import { MunicipiosComponent } from './modules/plataform/municipios/municipios.component';
import { EntidadeComponent } from './modules/plataform/entidade/entidade.component';
import { SolicitacaoSangueComponent } from './modules/plataform/solicitacao-sangue/solicitacao-sangue.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'plataforma', component: PlataformComponent, canActivate: [AuthGuard], children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'paises', component: PaisesComponent},
    {path: 'estados', component: EstadosComponent},
    {path: 'municipios', component: MunicipiosComponent},
    {path: 'tipos-sanguineos', component: TiposSanguineosComponent},
    {path: 'entidade', component: EntidadeComponent},
    {path: 'solicitacao/sangue', component: SolicitacaoSangueComponent} 
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }