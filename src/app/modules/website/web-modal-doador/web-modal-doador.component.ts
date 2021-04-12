import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoadoresService } from 'src/app/service/doadores.service';
import { EstadosService } from 'src/app/service/estados.service';
import { MunicipiosService } from 'src/app/service/municipios.service';
import { TiposSanguineosService } from 'src/app/service/tipos-sanguineos.service';
import { Endereco } from 'src/app/shared/model/Endereco';
import { ContatoForm } from 'src/app/shared/model/form/ContatoForm';
import { DoadorForm } from 'src/app/shared/model/form/DoadorForm';
import { EnderecoForm } from 'src/app/shared/model/form/EnderecoForm';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-web-modal-doador',
  templateUrl: './web-modal-doador.component.html',
  styleUrls: ['./web-modal-doador.component.css']
})
export class WebModalDoadorComponent implements OnInit {

  doador: DoadorForm;

  estados: Array<any> = [];
  municipios: Array<any> = [];
  tiposSanguineos: Array<any> = [];
  generos: Array<string> = ['MASCULINO', 'FEMININO', 'OUTRO'];

  isValid: boolean = true;
  success: boolean = true;
  errorMessage: string;

  fieldMessage: any[] = [];
  errorMessages: any[] = [];
  messagesFormated: any[] = [];

  nome: string = '';
  sexo: string = '';
  estadoId: number = 0;
  municipioId: number = 0;
  logradouro: string = '';
  numero: string = '';
  email: string = '';
  celular: string = '';
  telefone: string = '';
  tipoSanguineoId: number = 0;

  util: Utils = new Utils();
  
  constructor(
    private modal: NgbModal,
    private estadosService: EstadosService,
    private municipiosService: MunicipiosService,
    private tiposSanguineosService: TiposSanguineosService,
    private doadorService: DoadoresService) { }

  ngOnInit(): void {
    this.loadEssentialData();
  }

  loadEssentialData() {
    this.loadEstados();
    this.loadTiposSanguineos();
  }

  loadEstados() {
    this.estadosService.findAll().subscribe(response => {
      this.estados = response;
    });
  }

  loadTiposSanguineos() {
    this.tiposSanguineosService.findAll().subscribe(response => {
      this.tiposSanguineos = response;
    })
  }

  loadMunicipiosByEstado(event: any) {
    this.municipiosService.findListByEstado(event).subscribe(response => {
      this.municipios = response;
    });
  }

  close() {
    this.modal.dismissAll();
  }

  validForm() {

    if (
      this.nome != '' &&
      this.email != '' &&
      this.sexo != '' &&
      this.estadoId != 0 &&
      this.municipioId != 0 &&
      this.tipoSanguineoId != 0
    ) {
      this.isValid = true;
    }else{
      this.isValid = false;
    }

  }

  formatErrorMessage(field: string[], message: string[]) {
    this.messagesFormated = this.util.prepareFildError(field, message);
  }

  register() {

    this.validForm();
    this.messagesFormated = [];

    if (this.isValid) {

      this.doador = new DoadorForm();
      this.doador.nome = this.nome;
      this.doador.sexo = this.sexo;
      this.doador.endereco = new EnderecoForm(this.estadoId, this.municipioId, this.logradouro, this.numero);
      this.doador.contato = new ContatoForm(this.email, this.telefone, this.celular);
      this.doador.idTipoSanguineo = this.tipoSanguineoId;
      this.doador.ehDoador = false;

      this.doadorService.register(this.doador).subscribe(response => {
        this.success = true;
        this.close();
      },
      error =>{        

        this.success = false;
        this.messagesFormated.push(error.error.mensagem);        
        
        if(error.error.campos){          
          this.fieldMessage = error.error.campos;
          this.errorMessages = error.error.mensagemCampos;
          this.formatErrorMessage(this.fieldMessage, this.errorMessages);
        }
        
      });

    }

  }

}


