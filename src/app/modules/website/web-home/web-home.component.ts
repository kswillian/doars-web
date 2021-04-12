import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WebModalDoadorComponent } from '../web-modal-doador/web-modal-doador.component';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css']
})
export class WebHomeComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModalRegisterDoador(){
    this.modal.open(WebModalDoadorComponent);
  }

}
