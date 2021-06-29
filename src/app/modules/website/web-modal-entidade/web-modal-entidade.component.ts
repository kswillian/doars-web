import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntidadeService } from 'src/app/service/entidade.service';
import { EstadosService } from 'src/app/service/estados.service';
import { MunicipiosService } from 'src/app/service/municipios.service';
import { Entidade } from 'src/app/shared/model/Entidade';
import { ContatoForm } from 'src/app/shared/model/form/ContatoForm';
import { EnderecoForm } from 'src/app/shared/model/form/EnderecoForm';
import { EntidadeForm } from 'src/app/shared/model/form/EntidadeForm';
import { Usuario } from 'src/app/shared/model/Usuario';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-web-modal-entidade',
  templateUrl: './web-modal-entidade.component.html',
  styleUrls: ['./web-modal-entidade.component.css']
})
export class WebModalEntidadeComponent implements OnInit {

  tipoEntidades: Array<string> = ['HOSPITAL', 'HEMOCENTRO'];
  diasFuncionamento: Array<string> = ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO'];
  estados: Array<any> = [];
  municipios: Array<any> = [];

  isValid: boolean = true;
  success: boolean = true;
  errorMessage: string;
  fieldMessage: any[] = [];
  errorMessages: any[] = [];
  messagesFormated: any[] = [];

  nome: string = '';
  cnpj: string = '';
  email: string = '';
  descricao: string = '';
  celular: string = '';
  telefone: string = '';

  perfil: string = 'Entidade';
  senha: string = '';

  idEstado: number = 0;
  idMunicipio: number = 0;
  logradouro: string;
  numero: string;

  tipoEntidade: string;

  util: Utils = new Utils();
  
  constructor(
    private modal: NgbModal,
    private entidadeService: EntidadeService,
    private estadosService: EstadosService,
    private municipiosService: MunicipiosService
    ) { }

  ngOnInit(): void {
    this.loadEssentialData();
  }

  close() {
    this.modal.dismissAll();
  }

  loadEssentialData() {
    this.loadEstados();
  }

  loadEstados() {
    this.estadosService.findAll().subscribe(response => {
      this.estados = response;
    });
  }

  loadMunicipiosByEstado(event: any) {
    this.municipiosService.findListByEstado(event).subscribe(response => {
      this.municipios = response;
    });
  }

  getFormParams(){

    const entidade: EntidadeForm = new EntidadeForm();

    entidade.nome = this.nome;
    entidade.cnpj = this.cnpj;
    entidade.descricao = this.descricao;
    entidade.endereco = new EnderecoForm(this.idEstado, this.idMunicipio, this.logradouro, this.numero);
    entidade.contato = new ContatoForm(this.email, this.telefone, this.celular);
    entidade.tipoEntidade = this.tipoEntidade;
    entidade.usuario = new Usuario(this.email, this.perfil, this.senha);
    entidade.horaFinalFuncionamento = null;
    entidade.horaInicialFuncionamento = null;
    entidade.diasSemanaList = this.diasFuncionamento;

    return entidade;

  }

  register(){

    this.isFormValid();
    if(this.isFormValid()){      
      
      this.entidadeService.register(this.getFormParams()).subscribe(
        success => {
          this.success = true;
          this.close();
        },
        error => {
          this.success = false;
          this.messagesFormated.push(error.error.mensagem);        
        
          if(error.error.campos){          
            this.fieldMessage = error.error.campos;
            this.errorMessages = error.error.mensagemCampos;
            this.formatErrorMessage(this.fieldMessage, this.errorMessages);
          }
        }
      );
      
    }

  }

  formatErrorMessage(field: string[], message: string[]) {
    this.messagesFormated = this.util.prepareFildError(field, message);
  }

  isFormValid(){    

    if(
      this.nome != '' &&
      this.email != '' &&
      this.cnpj != '' &&
      this.tipoEntidade != '' &&
      this.senha != '' &&
      this.idEstado != 0 &&
      this.idMunicipio != 0
    ){
      this.isValid = true;
    }    

    return this.isValid;

  }
}
