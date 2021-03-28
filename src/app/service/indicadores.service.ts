import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { DashboardDoadoresTipoSanguineo } from '../shared/model/DashboardDoadoresTipoSanguineo';
import { DashboardGeral } from '../shared/model/DashboardGeral';
import { DashboardSolicitacaoDoacaoTipoSanguineo } from '../shared/model/DashboardSolicitacaoDoacaoTipoSanguineo';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/indicadores";

  findAllGerais(): Observable<DashboardGeral>{
    return this.httpClient.get<DashboardGeral>(this.URL_API + '/gerais');
  } 
  
  findIndicadorDoadoresByTipoSanguineo(): Observable<DashboardDoadoresTipoSanguineo>{
    return this.httpClient.get<DashboardDoadoresTipoSanguineo>(this.URL_API + '/doadores-tipos-sanguineos');
  }

  findIndicadorSolicitacaoDoacaoByTipoSanguineo(endidadeId: number): Observable<DashboardSolicitacaoDoacaoTipoSanguineo>{
    return this.httpClient.get<DashboardSolicitacaoDoacaoTipoSanguineo>(this.URL_API + '/' + endidadeId + '/solicitacoes-tipos-sanguineos');
  }

}