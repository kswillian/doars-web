import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntidadeService } from 'src/app/service/entidade.service';
import { SolicitacaoSangueService } from 'src/app/service/solicitacao-sangue.service';
import { TiposSanguineosService } from 'src/app/service/tipos-sanguineos.service';
import { Entidade } from 'src/app/shared/model/Entidade';
import { SolicitacaoSangue } from 'src/app/shared/model/SolicitacaoSangue';
import { TipoSanguineo } from 'src/app/shared/model/TipoSanguineo';
import { Utils } from 'src/app/shared/util/Utils';
import { ModalCadastroSolicitacaoSangueComponent } from '../modal-cadastro-solicitacao-sangue/modal-cadastro-solicitacao-sangue.component';
import { ModalSolicitacaoSangueComponent } from '../modal-solicitacao-sangue/modal-solicitacao-sangue.component';

@Component({
  selector: 'app-solicitacao-sangue',
  templateUrl: './solicitacao-sangue.component.html',
  styleUrls: ['./solicitacao-sangue.component.css']
})
export class SolicitacaoSangueComponent implements OnInit {

  entidade: Entidade;
  solicitacao: SolicitacaoSangue;
  tipoSanguineo: string;

  searchInput: string = null;
  tiposSanguineosInput: Array<any> = [];

  solicitacoes: Array<any> = [];
  tiposSanguineos: Array<any> = [];  
  tiposSanguineosDescricao: string = "A+,A-,AB+,AB-,B+,B-,O-,O+";

  pageCount: number = 1;
  page: number = 0;
  size: number = 25;

  firstPage: number = 0;
  lastPage: number;

  totalPages: Array<number>;
  totalElements: Array<number>;

  util: Utils = new Utils();

  constructor(
    private modal: NgbModal,
    private entidadeService: EntidadeService,
    private tipoSanguineoService: TiposSanguineosService,
    private solicitacaoService: SolicitacaoSangueService) { }

  ngOnInit(): void {
    this.loadEntidade();
    this.loadTiposSanguineos();
    this.loadAll();
  }

  loadEntidade() {
    let email = this.util.getSubJwt();
    this.entidadeService.getByEmail(email).subscribe(response => {
      this.entidade = response;
    });
  }

  loadTiposSanguineos() {
    this.tipoSanguineoService.findAll().subscribe(response => {
      this.tiposSanguineos = response
    });
  }
  
  addRemoveTipoSanguineo(tipoSanguineoSelected: TipoSanguineo) {
    if (!this.isSelected(tipoSanguineoSelected)) {
      this.tiposSanguineosInput.push(tipoSanguineoSelected);
      this.search();
    } else {
      this.tiposSanguineosInput = this.tiposSanguineosInput.filter(tipoSanguineo => tipoSanguineo != tipoSanguineoSelected);
      this.search();
    }    
  }

  isSelected(tipoSanguineoSelected: TipoSanguineo) {
    for (let i = 0; i < this.tiposSanguineosInput.length; i++) {
      if (this.tiposSanguineosInput[i] == tipoSanguineoSelected) {
        return true;
      }
    }
    return false;
  }

  clearTiposSanguineosInput(){
    this.tiposSanguineosInput = [];
    this.loadAll();
  }
  
  loadAll() {

    this.tiposSanguineosInput = [];

    setTimeout(() => {
      this.solicitacaoService.findAll(this.entidade.id, this.page, this.size).subscribe(response => {
        this.solicitacoes = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    }, 300);
  }

  loadAllBySearch(){
    setTimeout(() => {
      this.solicitacaoService.findAllBySearch(this.entidade.id, this.searchInput, this.page, this.size).subscribe(response => {
        this.solicitacoes = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    }, 300);
  }

  loadAllByTiposSanguineos(){    
    setTimeout(() => {
      this.solicitacaoService.findAllByTiposSanguineos(this.entidade.id, this.prepareListId(), this.page, this.size).subscribe(response => {
        this.solicitacoes = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    }, 300);
  }

  loadAllByTiposSanguineosAndSearch(){    
    setTimeout(() => {
      this.solicitacaoService.findAllByTiposSanguineosAndSearch(this.entidade.id, this.searchInput, this.prepareListId(), this.page, this.size).subscribe(response => {
        this.solicitacoes = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    }, 300);
  }

  prepareListId(){
    const listId = [];
    for(let i = 0; i < this.tiposSanguineosInput.length; i++){
      listId.push(this.tiposSanguineosInput[i].id);
    }
    return listId.toString();
  }

  search() {    

    if(this.tiposSanguineosInput.length > 0 && this.searchInput != null && this.searchInput != ""){      
      this.loadAllByTiposSanguineosAndSearch();
    }else if(this.tiposSanguineosInput.length > 0){
      this.loadAllByTiposSanguineos();
    }else if(this.searchInput != null && this.searchInput != ""){
      this.loadAllBySearch();
    }else{
      this.loadAll();
    }

  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.loadAll();
  }

  navigateToNextPage(event: any) {
    event.preventDefault();

    if (!this.isSearch()) {
      if (this.page < this.lastPage - 1) {
        this.pageCount += 1;
        this.page += 1;
      }
      this.loadAll();
    } else {
      if (this.page < this.lastPage - 1) {
        this.pageCount += 1;
        this.page += 1;
      }
      this.search();
    }

  }

  navigateToPreviousPage(event: any) {
    event.preventDefault();

    if (!this.isSearch()) {
      if (this.page > this.firstPage) {
        this.pageCount -= 1;
        this.page -= 1;
      }
      this.loadAll();
    } else {
      if (this.page > this.firstPage) {
        this.pageCount -= 1;
        this.page -= 1;
      }
      this.search();
    }

  }

  navigateToFirstPage(event: any) {
    event.preventDefault();

    this.pageCount = 1;
    this.page = this.firstPage;

    if (!this.isSearch()) {
      this.loadAll();
    } else {
      this.search();
    }

  }

  navigateToLastPage(event: any) {
    event.preventDefault();

    this.pageCount = this.lastPage;
    this.page = this.lastPage - 1;

    if (!this.isSearch()) {
      this.loadAll();
    } else {
      this.search();
    }

  }

  isSearch(): boolean {
    if (this.tipoSanguineo) {
      return true;
    }
    return false;
  }

  entidadeIsLoad(): boolean {
    if (this.entidade != null) {
      return true;
    }
    return false;
  }

  openViewModal(solicitacaoId: number) {
    let modalView = this.modal.open(ModalSolicitacaoSangueComponent, { size: 'xl' });
    modalView.componentInstance.solicitacaoId = solicitacaoId;
  }

  openCadastroModal() {
    let modalView = this.modal.open(ModalCadastroSolicitacaoSangueComponent, { size: 'xl' });
    modalView.componentInstance.idEntidade = this.entidade.id;
  }

}
