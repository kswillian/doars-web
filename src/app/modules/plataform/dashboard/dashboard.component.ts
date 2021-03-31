import { Component, OnInit } from '@angular/core';
import { EntidadeService } from 'src/app/service/entidade.service';
import { Entidade } from 'src/app/shared/model/Entidade';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }  

}
