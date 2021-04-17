import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailForm } from '../shared/model/form/EmailForm';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/email";

  sendMail(emailForm: EmailForm): Observable<any>{
    return this.httpClient.post<EmailForm>(this.URL_API, emailForm);
  }

}
