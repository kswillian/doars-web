import { Component, OnInit } from '@angular/core';
import { EstadosService } from 'src/app/service/estados.service';
import { Estado } from 'src/app/shared/model/Estado';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  estados: Estado[] = [];
  estado: Estado;

  constructor(private estadoService: EstadosService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.estadoService.findAll().subscribe( response => {
      this.estados = response;
    });
  }

}
