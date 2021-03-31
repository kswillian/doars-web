import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitacaoSangueService } from 'src/app/service/solicitacao-sangue.service';
import { TiposSanguineosService } from 'src/app/service/tipos-sanguineos.service';
import { SolicitacaoSangueForm } from 'src/app/shared/model/SolicitacaoSangueForm';
import { TipoSanguineo } from 'src/app/shared/model/TipoSanguineo';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-modal-cadastro-solicitacao-sangue',
  templateUrl: './modal-cadastro-solicitacao-sangue.component.html',
  styleUrls: ['./modal-cadastro-solicitacao-sangue.component.css']
})
export class ModalCadastroSolicitacaoSangueComponent implements OnInit {

  @Input()
  idEntidade: number;

  tiposSanguineos: TipoSanguineo[] = [];
  tiposSanguineosForm: number[] = [];
  descricao: string;
  distancia: number;

  campoErro: string[];
  mensagemErro: string[];
  messagesFormat: string[];
  success: boolean;

  util: Utils = new Utils();
  solicitacaoSangueForm: SolicitacaoSangueForm;

  constructor(
    private modal: NgbModal,
    private router: Router,
    private tipoSanguineoService: TiposSanguineosService,
    private solicitacaoSangueService: SolicitacaoSangueService) { }

  ngOnInit(): void {
    this.getTiposSanguineos();
  }

  close() {
    this.modal.dismissAll();
  }

  getTiposSanguineos() {
    setTimeout(() => {
      this.tipoSanguineoService.findAll().subscribe(response => {
        this.tiposSanguineos = response
      }, erro => {
        this.close();
        this.router.navigate(['/login']);
      });
    }, 200);
  }

  addRemoveTipoSanguineo(tipoSanguineoId: number) {
    if (!this.isSelected(tipoSanguineoId)) {
      this.tiposSanguineosForm.push(tipoSanguineoId);
    } else {
      this.tiposSanguineosForm = this.tiposSanguineosForm.filter(tipoSanguineo => tipoSanguineo != tipoSanguineoId);
    }
  }

  isSelected(tipoSanguineoId: number) {
    for (let i = 0; i < this.tiposSanguineosForm.length; i++) {
      if (this.tiposSanguineosForm[i] == tipoSanguineoId) {
        return true;
      }
    }
    return false;
  }

  register() {

    this.solicitacaoSangueForm = new SolicitacaoSangueForm(this.idEntidade, this.tiposSanguineosForm, this.descricao, this.distancia);
    console.log(this.solicitacaoSangueForm);
    this.solicitacaoSangueService.register(this.solicitacaoSangueForm).subscribe(
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

  tiposSanguineosIsLoad(): boolean {
    if (this.tiposSanguineos.length > 0) {
      return true;
    }
    return false;
  }

  formatErrorMessage(field: string[], message: string[]) {
    this.messagesFormat = this.util.prepareFildError(field, message);
  }

}
