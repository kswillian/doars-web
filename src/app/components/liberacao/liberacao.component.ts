import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiberacaoDTO } from 'src/app/shared/model/dto/LiberacaoDTO';
import { LiberacaoForm } from 'src/app/shared/model/form/LiberacaoForm';
import { LiberacaoService } from './liberacao.service';

@Component({
  selector: 'app-liberacao',
  templateUrl: './liberacao.component.html',
  styleUrls: ['./liberacao.component.css']
})
export class LiberacaoComponent implements OnInit {

  constructor(
    private liberacaoService: LiberacaoService,
    private router: Router
  ) { }

  email: string;
  codigo: string;
  message: string = '';

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.isFormParamsValid()) {
      this.liberacaoService.activate(this.getFormParams()).subscribe(
        success => {
          let liberacaoDTO: LiberacaoDTO = success;
          this.navitateToPlataform();
        },
        error => {
          this.message = error.error.mensagem;
        }
      );
    }

  }

  navitateToPlataform() {
    this.router.navigate(['login']);
  }

  isFormParamsValid() {

    if (this.getFormParams().email == null || this.getFormParams().codigo == null) {
      this.message = 'Preencha todos os campos';
      return false;
    }

    return true;

  }

  getFormParams() {
    const liberacaoForm: LiberacaoForm = new LiberacaoForm();
    liberacaoForm.email = this.email;
    liberacaoForm.codigo = this.codigo;
    return liberacaoForm;
  }

}
