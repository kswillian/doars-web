import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Doador } from '../shared/model/Doador';
import { SolicitacaoSangue } from '../shared/model/SolicitacaoSangue';
import { SolicitacaoSangueForm } from '../shared/model/form/SolicitacaoSangueForm';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoSangueService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/notificacoes/doacoes";

  register(solicitacaoSangue: SolicitacaoSangueForm): Observable<SolicitacaoSangue>{
    return this.httpClient.post<SolicitacaoSangue>(this.URL_API, solicitacaoSangue);
  }
  
  findAll(entidadeId: number, page: number, size: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '/entidade/' + entidadeId + '?page=' + page + '&size=' + size);
  }

  findAllDoadoresBySolicitacao(solicitacaoId: number):  Observable<Doador[]>{
    return this.httpClient.get<Doador[]>(this.URL_API + '/' + solicitacaoId + '/doadores');
  }

  /*
  findPage(entidadeId: number, page: number, size: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '/entidade/' + entidadeId + '?page=' + page + '&size=' + size);    
  }
  */

  findAllBySearch(entidadeId: number, search: string, page: number, size: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '/entidade/' + entidadeId + '?search=' + search + '&page=' + page + '&size=' + size);
  }

  findAllByTiposSanguineos(entidadeId: number, tiposSanguineos: string, page: number, size: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '/entidade/' + entidadeId + '?tiposSanguineos=' + tiposSanguineos + '&page=' + page + '&size=' + size);
  }

  findAllByTiposSanguineosAndSearch(entidadeId: number, search: string, tiposSanguineos: string, page: number, size: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '/entidade/' + entidadeId + '?search='+ search + '&&tiposSanguineos=' + tiposSanguineos + '&page=' + page + '&size=' + size);
  }  

  findById(id: number){
    return this.httpClient.get<SolicitacaoSangue>(this.URL_API + '/' + id);  
  }

}
