import { Component, OnInit } from '@angular/core';
import { TiposSanguineosService } from 'src/app/service/tipos-sanguineos.service';
import { TipoSanguineo } from 'src/app/shared/model/TipoSanguineo';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCadastroTipoSanguineoComponent } from '../modal-cadastro-tipo-sanguineo/modal-cadastro-tipo-sanguineo.component';

@Component({
  selector: 'app-tipos-sanguineos',
  templateUrl: './tipos-sanguineos.component.html',
  styleUrls: ['./tipos-sanguineos.component.css']
})
export class TiposSanguineosComponent implements OnInit {

  descricao: any;
  tiposSanguineos: TipoSanguineo[] = [];  

  constructor(
    private modal: NgbModal,
    private tipoSanguineoService: TiposSanguineosService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.tipoSanguineoService.findAll().subscribe(response => {    
        this.tiposSanguineos = response
    });
  }

  openCadastroModal() {    
    let modalView = this.modal.open(ModalCadastroTipoSanguineoComponent, { size: 'lg' });
  }

}
