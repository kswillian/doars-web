import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/service/estados.service';
import { MunicipiosService } from 'src/app/service/municipios.service';

import { Estado } from 'src/app/shared/model/Estado';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelMunicipiosComponent } from '../model-municipios/model-municipios.component';
import { Municipio } from 'src/app/shared/model/Municipio';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.css']
})
export class MunicipiosComponent implements OnInit {

  municipio: Municipio;
  municipios: Array<any>;
  estado: string;
  estados: Estado[] = [];

  nome: string;
  estadoSigla: string;

  pageCount: number = 1;
  page: number = 0;
  size: number = 50;

  firstPage: number = 0;
  lastPage: number;

  totalPages: Array<number>;
  totalElements: Array<number>;

  constructor(
    private modal: NgbModal,
    private estadoService: EstadosService,
    private municipioService: MunicipiosService) { }

  ngOnInit(): void {
    this.loadAll();
    this.getEstados();
  }

  loadList() {
    this.loadAll();
  }

  loadAll() {
    this.municipioService.findPage(this.page, this.size).subscribe(response => {
      this.municipios = response['content'];      
      this.lastPage = response['totalPages'];
      this.totalPages = new Array(response['totalPages']);
      this.totalElements = new Array(response['totalElements']);
    });
  }

  searchAll() {
    this.clean();
    if (this.estado) {
      this.municipioService.findAllByEstado(this.estado, this.page, this.size).subscribe(response => {
        this.municipios = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    } else {
      this.loadAll();
    }
  }

  search() {

    if (this.estado) {
      this.municipioService.findAllByEstado(this.estado, this.page, this.size).subscribe(response => {
        this.municipios = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    } else {
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

  getEstados() {
    this.estadoService.findAll().subscribe(response => {
      this.estados = response;
    });
  }

  isSearch(): boolean {
    if (this.estado) {
      return true;
    }
    return false;
  }

  clean() {
    this.page = 0;
    this.pageCount = 1;
  }

  findMunicipioById(municipioId: number) {
    this.municipioService.findById(municipioId).subscribe(response => {
      this.municipio = response;
    });
  }

  openViewModal(municipioId: number) {

    this.findMunicipioById(municipioId);

    setTimeout(() => {
      let modalView = this.modal.open(ModelMunicipiosComponent, { size: 'xl' });
      modalView.componentInstance.municipioDetails = this.municipio;
    }, 500);

  }

}