import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private indicadores: IndicadoresService) { }

  ngOnInit(): void {    
    this.loadDashboard();
    this.prepareData();
    this.refresh();
  }
  

  loadDashboard() { 
    setTimeout(() => {
      this.indicadores.findIndicadorSolicitacaoDoacaoByTipoSanguineo(this.entidadeId).subscribe(response => {
        this.dashboardSolicitacaoDoacaoTipoSanguineo = response;
      });
    }, 200);      
  }

  prepareData() {
    if(this.dashboardSolicitacaoDoacaoTipoSanguineo && this.dashboardSolicitacaoDoacaoTipoSanguineo != null){
      this.solicitacoesDoacao = this.dashboardSolicitacaoDoacaoTipoSanguineo.solicitacoesDoacao;      
    }    
  }

  refresh() {
    setTimeout(() => {
      this.loadDashboard();
      this.prepareData();
    }, 100);
  }

  dataIsLoad(){
    if(this.solicitacoesDoacao.length > 0){
      return true;
    }
    return false;
  }

}
