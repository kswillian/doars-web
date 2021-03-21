import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Estado } from '../shared/model/Estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/localidades/estados";

  findAll(): Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(this.URL_API);
  }
  
}
