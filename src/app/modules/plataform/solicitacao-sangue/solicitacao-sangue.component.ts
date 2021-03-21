import { Component, OnInit } from '@angular/core';
import { EntidadeService } from 'src/app/service/entidade.service';
import { SolicitacaoSangueService } from 'src/app/service/solicitacao-sangue.service';
import { Entidade } from 'src/app/shared/model/Entidade';
import { SolicitacaoSangue } from 'src/app/shared/model/SolicitacaoSangue';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-solicitacao-sangue',
  templateUrl: './solicitacao-sangue.component.html',
  styleUrls: ['./solicitacao-sangue.component.css']
})
export class SolicitacaoSangueComponent implements OnInit {

  entidade: Entidade;
  solicitacao: SolicitacaoSangue;
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
    })
  }

  loadAll() {
    setTimeout(() => {
      this.solicitacaoService.findPage(this.entidade.id, this.page, this.size).subscribe(response => {
        this.solicitacoes = response['content'];
        this.lastPage = response['totalPages'];
        this.totalPages = new Array(response['totalPages']);
        this.totalElements = new Array(response['totalElements']);
      });
    }, 100);
  }

}
