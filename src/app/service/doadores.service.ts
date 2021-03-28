import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoadoresService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/notificacoes/doadores";

}
