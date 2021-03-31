import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EntidadeService } from 'src/app/service/entidade.service';
import { Utils } from 'src/app/shared/util/Utils';
import { ModalSairComponent } from '../modal-sair/modal-sair.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  entidadeNome: string;
  util: Utils = new Utils();

  constructor(
    private modal: NgbModal,
    private router: Router,
    private entidadeService: EntidadeService) { }

  ngOnInit(): void {    
    this.getEntidadeNome();
  }  

  getEntidadeNome() {
    let email = this.util.getSubJwt();
    this.entidadeService.getByEmail(email).subscribe( response => {
      this.entidadeNome = response.nome
    }, erro => {
      this.router.navigate(['/login']);
    });
  }

  openModal(){
    this.modal.open(ModalSairComponent, { size: 'sn' });
  }

}
