import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiberacaoDTO } from 'src/app/shared/model/dto/LiberacaoDTO';
import { LiberacaoForm } from 'src/app/shared/model/form/LiberacaoForm';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiberacaoService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/usuarios/ativar";

  activate(LiberacaoForm: LiberacaoForm): Observable<LiberacaoDTO>{
    return this.httpClient.post<LiberacaoDTO>(this.URL_API, LiberacaoForm);
  }

}