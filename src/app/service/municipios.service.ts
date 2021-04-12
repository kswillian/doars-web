import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Municipio } from '../shared/model/Municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipiosService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/localidades/municipios";

  findAll(): Observable<Municipio[]>{
    return this.httpClient.get<Municipio[]>(this.URL_API);    
  }

  findPage(page, size){
    return this.httpClient.get(this.URL_API + '?page=' + page + '&size=' + size);
  }

  findListByEstado(id: number): Observable<any>{
    return this.httpClient.get(this.URL_API + '/estados/id/' + id);
  }

  findAllByEstado(sigla: string, page, size){
    return this.httpClient.get(this.URL_API + '/estados/' + sigla + '?page=' + page + '&size=' + size);
  }  

  findById(municipioId: number) {
    return this.httpClient.get<Municipio>(this.URL_API + '/' + municipioId);
  }


}
