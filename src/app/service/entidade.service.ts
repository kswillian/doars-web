import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { EntidadeDTO } from '../shared/model/dto/EntidadeDTO';
import { Entidade } from '../shared/model/Entidade';
import { EntidadeForm } from '../shared/model/form/EntidadeForm';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/entidades";

  getByEmail(email: string): Observable<Entidade>{
    return this.httpClient.get<Entidade>(this.URL_API + '/email/' + email);
  }

  register(entidade: EntidadeForm): Observable<EntidadeDTO>{ 
    return this.httpClient.post<EntidadeDTO>(this.URL_API, entidade);
  }

}
