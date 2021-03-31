import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntidadeService } from 'src/app/service/entidade.service';
import { IndicadoresService } from 'src/app/service/indicadores.service';
import { DashboardSolicitacaoDoacaoTipoSanguineo } from 'src/app/shared/model/DashboardSolicitacaoDoacaoTipoSanguineo';
import { Entidade } from 'src/app/shared/model/Entidade';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-card-dashboard-solicitacao-sangue-por-tipo-sanguineo',
  templateUrl: './card-dashboard-solicitacao-sangue-por-tipo-sanguineo.component.html',
  styleUrls: ['./card-dashboard-solicitacao-sangue-por-tipo-sanguineo.component.css']
})
export class CardDashboardSolicitacaoSanguePorTipoSanguineoComponent implements OnInit {

  dashboardSolicitacaoDoacaoTipoSanguineo: DashboardSolicitacaoDoacaoTipoSanguineo;
  solicitacoesDoacao: Array<any> = []

  entidade: Entidade = new Entidade();
  util: Utils = new Utils();

  constructor(
    private router: Router,
    private entidadeService: EntidadeService,
    private indicadores: IndicadoresService) { }

  ngOnInit(): void {
    this.loadEntidade();
  }

  loadEntidade() {
    let email = this.util.getSubJwt();
    this.entidadeService.getByEmail(email).subscribe(response => {
      this.entidade = response;
      this.loadDashboard();
    });
  }

  loadDashboard() {
    if (this.entidade != null) {
      setTimeout(() => {
        this.indicadores.findIndicadorSolicitacaoDoacaoByTipoSanguineo(this.entidade.id).subscribe(response => {
          this.dashboardSolicitacaoDoacaoTipoSanguineo = response;
          this.prepareData();
        });
      }, 500);
    }
  }

  prepareData() {
    this.solicitacoesDoacao = this.dashboardSolicitacaoDoacaoTipoSanguineo.solicitacoesDoacao;
  }

  refresh() {
    this.loadDashboard();
    this.prepareData();
  }

  dataIsLoad() {
    if (this.solicitacoesDoacao.length > 0) {
      return true;
    }
    return false;
  }

}
