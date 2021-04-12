import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebModalDoadorComponent } from '../web-modal-doador/web-modal-doador.component';

@Component({
  selector: 'app-web-sobre',
  templateUrl: './web-sobre.component.html',
  styleUrls: ['./web-sobre.component.css']
})
export class WebSobreComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModalRegisterDoador(){
    this.modal.open(WebModalDoadorComponent);
  }

}
