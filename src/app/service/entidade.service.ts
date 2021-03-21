import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Entidade } from '../shared/model/Entidade';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/entidades";

  getByEmail(email: string): Observable<Entidade>{
    return this.httpClient.get<Entidade>(this.URL_API + '/email/' + email);
  }

}
