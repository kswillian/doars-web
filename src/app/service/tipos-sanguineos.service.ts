import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { TipoSanguineo } from '../shared/model/TipoSanguineo';
import { TipoSanguineoForm } from '../shared/model/TipoSanguineoForm';

@Injectable({
  providedIn: 'root'
})
export class TiposSanguineosService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/tipos-sanguineos";

  findAll(): Observable<TipoSanguineo[]>{
    return this.httpClient.get<TipoSanguineo[]>(this.URL_API);
  }

  register(tipoSanguineo: TipoSanguineoForm): Observable<TipoSanguineo>{
    return this.httpClient.post<TipoSanguineo>(this.URL_API, tipoSanguineo);
  }

}
