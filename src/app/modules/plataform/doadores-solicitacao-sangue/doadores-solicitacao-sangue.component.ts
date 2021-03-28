import { Component, Input, OnInit } from '@angular/core';
import { SolicitacaoSangueService } from 'src/app/service/solicitacao-sangue.service';

import { Doador } from 'src/app/shared/model/Doador';

@Component({
  selector: 'app-doadores-solicitacao-sangue',
  templateUrl: './doadores-solicitacao-sangue.component.html',
  styleUrls: ['./doadores-solicitacao-sangue.component.css']
})
export class DoadoresSolicitacaoSangueComponent implements OnInit {

  @Input() 
  solicitacaoId: number;
  doadores: Array<Doador>;
  
  constructor(private solicitacaoService: SolicitacaoSangueService) { }

  ngOnInit(): void {
    this.loadAllDoadores();
  }

  loadAllDoadores(){    
    this.doadores = null;
    if(this.solicitacaoId && this.solicitacaoId != null){      
      setTimeout(() => {
        this.solicitacaoService.findAllDoadoresBySolicitacao(this.solicitacaoId).subscribe(response => {          
          this.doadores = response;
        });
      }, 400);
    }
  }

  doadoresIsLoad(){
    if(this.doadores != null || this.doadores.length == 0){
      return true;
    }    
    return false;
  }

}
