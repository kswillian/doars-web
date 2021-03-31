import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(
    private modal: NgbModal,
    private router: Router,
    private solicitacaoService: SolicitacaoSangueService) { }

  ngOnInit(): void {
    this.findSolicitacaoById();
  }

  ngOnDestroy() {
    this.solicitacaoId = null;
  }

  close(){
    this.modal.dismissAll();    
  }

  findSolicitacaoById(){
    setTimeout(() => {
      this.solicitacaoService.findById(this.solicitacaoId).subscribe(response => {        
        this.solicitacao = response;
      }, erro => {
        this.close();
        this.router.navigate(['/login']);
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
