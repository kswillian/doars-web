import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SolicitacaoSangue } from '../shared/model/SolicitacaoSangue';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoSangueService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/notificacoes/doacoes";
  
  findAll(entidadeId: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '?entidadeId=' + entidadeId);    
  }

  findPage(entidadeId: number, page: number, size: number):  Observable<SolicitacaoSangue[]>{
    return this.httpClient.get<SolicitacaoSangue[]>(this.URL_API + '?entidadeId=' + entidadeId + '&page=' + page + '&size=' + size);    
  }

  findById(id: number){
    return this.httpClient.get<SolicitacaoSangue>(this.URL_API + '/' + id);  
  }

}
