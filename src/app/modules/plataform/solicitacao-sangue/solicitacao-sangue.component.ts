import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntidadeService } from 'src/app/service/entidade.service';
import { SolicitacaoSangueService } from 'src/app/service/solicitacao-sangue.service';
import { Entidade } from 'src/app/shared/model/Entidade';
import { SolicitacaoSangue } from 'src/app/shared/model/SolicitacaoSangue';
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

  tiposSanguineos: Array<any>;
  solicitacoes: Array<any>;

  pageCount: number = 1;
  page: number = 0;
  size: number = 50;

  firstPage: number = 0;
  lastPage: number;

  totalPages: Array<number>;
  totalElements: Array<number>;

  util: Utils = new Utils();

  constructor(
    private modal: NgbModal,
    private entidadeService: EntidadeService,
    private solicitacaoService: SolicitacaoSangueService) { }

  ngOnInit(): void {
    this.getEntidade();
    this.loadAll();
  }

  getEntidade() {
    let email = this.util.getSubJwt();
    this.entidadeService.getByEmail(email).subscribe(response => {
      this.entidade = response;
    });
  }

  entidadeIsLoad(): boolean{
    if(this.entidade != null){
      return true;
    }
    return false;    
  }

  loadAll() {
    setTimeout(() => {
      this.solicitacaoService.findPage(this.entidade.id, this.page, this.size).subscribe(response => {
        this.solicitacoes = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    }, 200);
  }

  search() {    
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

  clean() {
    this.page = 0;
    this.pageCount = 1;
  }

  openViewModal(solicitacaoId: number){
    let modalView = this.modal.open(ModalSolicitacaoSangueComponent, { size: 'xl' });
    modalView.componentInstance.solicitacaoId = solicitacaoId;
  }

  openCadastroModal(){
    let modalView = this.modal.open(ModalCadastroSolicitacaoSangueComponent, { size: 'xl' });
    modalView.componentInstance.idEntidade = this.entidade.id;   
  }

}
