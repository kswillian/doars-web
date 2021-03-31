import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private estadoService: EstadosService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.estadoService.findAll().subscribe( response => {
      this.estados = response;
    }, erro => {
      this.router.navigate(['/login']);
    });
  }

}
