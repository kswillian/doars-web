import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/model/Pais';
import { PaisesService } from '../../../service/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  pais: Pais;
  
  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.paisService.findAll().subscribe(response => {    
        this.paises = response
    });
  }

}
