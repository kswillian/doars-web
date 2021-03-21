import { Component, Input, OnInit } from '@angular/core';
import { SolicitacaoSangueService } from 'src/app/service/solicitacao-sangue.service';
import { SolicitacaoSangue } from 'src/app/shared/model/SolicitacaoSangue';

@Component({
  selector: 'app-modal-solicitacao-sangue',
  templateUrl: './modal-solicitacao-sangue.component.html',
  styleUrls: ['./modal-solicitacao-sangue.component.css']
})
export class ModalSolicitacaoSangueComponent implements OnInit {

  @Input()
  solicitacaoId: number;

  solicitacao: SolicitacaoSangue;

  constructor(private solicitacaoService: SolicitacaoSangueService) { }

  ngOnInit(): void {
    this.findSolicitacaoById();
  }

  ngOnDestroy() {
    this.solicitacaoId = null;
  }

  findSolicitacaoById(){
    setTimeout(() => {
      this.solicitacaoService.findById(this.solicitacaoId).subscribe(response => {
        console.log(response)
        this.solicitacao = response;
      });
    }, 400);    
  }

  solicitacaoIsLoad(): boolean{
    if(this.solicitacao != null){
      return true;
    }
    return false;    
  }


}
