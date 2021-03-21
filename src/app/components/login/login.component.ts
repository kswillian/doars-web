import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginForm } from 'src/app/shared/model/LoginForm';
import { LoginDTO } from 'src/app/shared/model/LoginDTO';
import { Storage } from 'src/app/shared/util/Storage';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  
  email: string;
  senha: string;
  success: boolean;

  storage: Storage = new Storage();

  onSubmit(){   

    this.loginService.login(this.getFormParams()).subscribe(
      success => {

        let loginDTO: LoginDTO = success;        
        this.navitateToPlataform();
        this.storage.addAccessTokenToLocalStorage(loginDTO);

      },
      error => {       
        this.storage.removeAccessTokenToLocalStorage();         
      }
    );
    
  }

  navitateToPlataform() {
    this.router.navigate(['plataforma']);
  }

  getFormParams() {
    const loginForm: LoginForm = new LoginForm();
    loginForm.email = this.email;
    loginForm.senha = this.senha;
    return loginForm;
  }

}
