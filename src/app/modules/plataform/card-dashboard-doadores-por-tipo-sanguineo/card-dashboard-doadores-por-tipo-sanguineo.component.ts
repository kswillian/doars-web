import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private indicadores: IndicadoresService) { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard() {
    this.indicadores.findIndicadorDoadoresByTipoSanguineo().subscribe(response => {
      this.dashboardDoadoresTipoSanguineo = response;
      this.prepareData();
    }, erro => {
      this.router.navigate(['/login']);
    });    
  }

  prepareData() {
    this.doadoresTipoSanguineo = this.dashboardDoadoresTipoSanguineo.doadoresTipoSanguineo;
  }

  refresh() {
    this.loadDashboard();
    this.prepareData();
  }

  dataIsLoad() {
    if (this.doadoresTipoSanguineo.length > 0) {
      return true;
    }
    return false;
  }

}
