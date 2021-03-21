import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from 'src/app/shared/model/Pais';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/localidades/paises";

  findAll(): Observable<Pais[]>{
    return this.httpClient.get<Pais[]>(this.URL_API);    
  }

}
