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

  @Input()
  entidadeId: number;

  constructor(
    private router: Router,
    private indicadores: IndicadoresService) { }

  ngOnInit(): void {    
    this.loadDashboard();        
  }

  loadDashboard() {
    setTimeout(() => {
      this.indicadores.findIndicadorSolicitacaoDoacaoByTipoSanguineo(this.entidadeId).subscribe(response => {
        this.dashboardSolicitacaoDoacaoTipoSanguineo = response;
        this.prepareData();
      }, erro => {
        this.router.navigate(['/login']);
      });
    }, 800);    
  }

  prepareData() {
    this.solicitacoesDoacao = this.dashboardSolicitacaoDoacaoTipoSanguineo.solicitacoesDoacao;   
  }

  refresh() {
    this.loadDashboard();
    this.prepareData();
  }

  dataIsLoad(){
    if(this.solicitacoesDoacao.length > 0){
      return true;
    }
    return false;
  }

}
