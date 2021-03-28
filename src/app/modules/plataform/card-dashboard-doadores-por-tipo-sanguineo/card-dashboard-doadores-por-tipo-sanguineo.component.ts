import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/service/indicadores.service';
import { DashboardDoadoresTipoSanguineo } from 'src/app/shared/model/DashboardDoadoresTipoSanguineo';

@Component({
  selector: 'app-card-dashboard-doadores-por-tipo-sanguineo',
  templateUrl: './card-dashboard-doadores-por-tipo-sanguineo.component.html',
  styleUrls: ['./card-dashboard-doadores-por-tipo-sanguineo.component.css']
})
export class CardDashboardDoadoresPorTipoSanguineoComponent implements OnInit {

  dashboardDoadoresTipoSanguineo: DashboardDoadoresTipoSanguineo;
  doadoresTipoSanguineo: Array<any> = [];

  constructor(private indicadores: IndicadoresService) { }

  ngOnInit(): void {
    this.loadDashboard();
    this.prepareData();
    this.refresh();
  }

  loadDashboard(){
    this.indicadores.findIndicadorDoadoresByTipoSanguineo().subscribe( response => {
      this.dashboardDoadoresTipoSanguineo = response;      
    });
  }

  prepareData(){
    if(this.dashboardDoadoresTipoSanguineo && this.dashboardDoadoresTipoSanguineo != null){
      this.doadoresTipoSanguineo = this.dashboardDoadoresTipoSanguineo.doadoresTipoSanguineo;      
    }    
  }

  refresh() {
    setTimeout(() => {
      this.loadDashboard();
      this.prepareData();
    }, 200);
  }

  dataIsLoad(){
    if(this.doadoresTipoSanguineo.length > 0){
      return true;
    }
    return false;
  }

}
