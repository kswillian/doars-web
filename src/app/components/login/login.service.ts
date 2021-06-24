import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginDTO } from 'src/app/shared/model/dto/LoginDTO';
import { LoginForm } from 'src/app/shared/model/form/LoginForm';
import { environment } from '../../../environments/environment';
import { Storage } from 'src/app/shared/util/Storage';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  URL_API: string = environment.apiURLBase + "/v1/usuarios/autenticar";
  
  storage: Storage = new Storage();
  jwtHelperService: JwtHelperService = new JwtHelperService();    

  login(loginForm: LoginForm): Observable<LoginDTO>{
    return this.httpClient.post<LoginDTO>(this.URL_API, loginForm);
  }

  isAuthenticate(): boolean {
    let bearer_token = this.storage.getAccessTokenToLocalStorage();
    if(bearer_token){
      return true;
    }
    return false;
  }

  isTokenNonExpired(): boolean{
    let bearer_token = this.storage.getAccessTokenToLocalStorage();
    if(bearer_token){      
      let isExpired = this.jwtHelperService.isTokenExpired(bearer_token.token);
      return !isExpired;
    }
    return true;
  }

}
