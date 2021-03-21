import { Component, OnInit } from '@angular/core';
import { EntidadeService } from 'src/app/service/entidade.service';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  entidadeNome: string;
  util: Utils = new Utils();

  constructor(private entidadeService: EntidadeService) { }

  ngOnInit(): void {    
    this.getEntidadeNome();
  }  

  getEntidadeNome() {
    let email = this.util.getSubJwt();
    this.entidadeService.getByEmail(email).subscribe( response => {
      this.entidadeNome = response.nome
    });
  }

}
