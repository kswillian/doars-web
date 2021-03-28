import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Storage } from 'src/app/shared/util/Storage';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-modal-sair',
  templateUrl: './modal-sair.component.html',
  styleUrls: ['./modal-sair.component.css']
})
export class ModalSairComponent implements OnInit {

  storage: Storage = new Storage();

  constructor(
    private router: Router,
    private modal: NgbModal) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.storage.removeAccessTokenToLocalStorage();
    this.storage.removeAccessTokenToSessionStorage();
    this.close();
    this.router.navigate(['/']);    
  }

  close(){
    this.modal.dismissAll();
  }

}
