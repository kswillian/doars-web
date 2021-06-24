import { Injectable } from '@angular/core';
import { Storage } from 'src/app/shared/util/Storage';
import { LoginDTO } from 'src/app/shared/model/dto/LoginDTO';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  storage: Storage = new Storage();
  loginDTO : LoginDTO;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loginDTO = this.storage.getAccessTokenToLocalStorage();

    if(this.loginDTO){      
      request = request.clone({
        setHeaders: {
          Authorization: this.loginDTO.tipo + ' ' + this.loginDTO.token
        }
      })
    }
    
    return next.handle(request);
  }
}
