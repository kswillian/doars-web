import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-web-modal-contato-email',
  templateUrl: './web-modal-contato-email.component.html',
  styleUrls: ['./web-modal-contato-email.component.css']
})
export class WebModalContatoEmailComponent implements OnInit {

  constructor(
    private modal: NgbModal) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.dismissAll();
  }

}
