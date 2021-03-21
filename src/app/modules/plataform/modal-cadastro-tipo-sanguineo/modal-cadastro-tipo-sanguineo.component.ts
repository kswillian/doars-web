import { Component, OnInit } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { TiposSanguineosService } from 'src/app/service/tipos-sanguineos.service';
import { TipoSanguineo } from 'src/app/shared/model/TipoSanguineo';
import { TipoSanguineoForm } from 'src/app/shared/model/TipoSanguineoForm';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-modal-cadastro-tipo-sanguineo',
  templateUrl: './modal-cadastro-tipo-sanguineo.component.html',
  styleUrls: ['./modal-cadastro-tipo-sanguineo.component.css']
})
export class ModalCadastroTipoSanguineoComponent implements OnInit {

  descricao: string;
  tipoSanguineoForm: TipoSanguineoForm;
  util: Utils = new Utils();

  campoErro: string[];
  mensagemErro: string[];
  messagesFormat: string[];

  success: boolean;

  constructor(
    private modal: NgbModal,        
    private tipoSanguineoService: TiposSanguineosService) { }

  ngOnInit(): void {    
    this.success =true;
  }

  close(){
    this.modal.dismissAll();    
  }

  register(){

    this.tipoSanguineoForm = new TipoSanguineoForm(this.descricao);
    this.tipoSanguineoService.register(this.tipoSanguineoForm).subscribe(
      response => {
        this.close();
        this.success = true;
      },
      error => {
        this.success = false;
        this.campoErro = error.error.campos;
        this.mensagemErro = error.error.mensagemCampos;
        this.formatErrorMessage(this.campoErro, this.mensagemErro);  
      }
    );

  }

  formatErrorMessage(field: string[], message: string[]){
    this.messagesFormat = this.util.prepareFildError(field, message);
  }

}
