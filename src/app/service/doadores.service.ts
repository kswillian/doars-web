import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DoadorDTO } from '../shared/model/dto/DoadorDTO';
import { DoadorForm } from '../shared/model/form/DoadorForm';

@Injectable({
  providedIn: 'root'
})
export class DoadoresService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/doadores";

  register(doador: DoadorForm): Observable<DoadorDTO>{ 
    return this.httpClient.post<DoadorDTO>(this.URL_API, doador);
  }

}
