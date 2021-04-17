import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/shared/util/Utils';
import { WebModalContatoEmailComponent } from '../web-modal-contato-email/web-modal-contato-email.component';
import { WebModalDoadorComponent } from '../web-modal-doador/web-modal-doador.component';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css']
})
export class WebHomeComponent implements OnInit {

  util: Utils = new Utils();

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    this.util.storage.removeAccessTokenToLocalStorage();
  }

  openModalRegisterDoador(){
    this.modal.open(WebModalDoadorComponent);
  }

  openModalRegisterDuvida(){
    this.modal.open(WebModalContatoEmailComponent);
  }

}
