import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/service/indicadores.service';
import { DashboardGeral } from 'src/app/shared/model/DashboardGeral';

@Component({
  selector: 'app-card-dashboard-geral',
  templateUrl: './card-dashboard-geral.component.html',
  styleUrls: ['./card-dashboard-geral.component.css']
})
export class CardDashboardGeralComponent implements OnInit {

  entidades: number = 0;
  doadores: number = 0;
  solicitacoes: number = 0;
  dataAtualizacao: string;
  dashboardGeral: DashboardGeral;

  constructor(private indicadores: IndicadoresService) { }

  ngOnInit(): void {
    this.loadDashboard(); 
    this.prepareData();   
  }

  loadDashboard() {
    this.indicadores.findAllGerais().subscribe(response => {  
      this.dashboardGeral = response;                      
    })
  }

  prepareData() {
    setTimeout(() => { 
      if(this.dashboardGeral && this.dashboardGeral != null){
        this.doadores = this.dashboardGeral.doadores;
        this.entidades = this.dashboardGeral.entidades;
        this.solicitacoes = this.dashboardGeral.solicitacoes;
        this.dataAtualizacao = this.dashboardGeral.dataAtualizacao;
      }
    }, 200);    
  }

  refresh() {
    setTimeout(() => {
      this.loadDashboard();
      this.prepareData();
    }, 300);
  }

}