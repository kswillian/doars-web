import { Component, OnInit } from '@angular/core';
import { EntidadeService } from 'src/app/service/entidade.service';
import { Entidade } from 'src/app/shared/model/Entidade';
import { Utils } from 'src/app/shared/util/Utils';

@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.css']
})
export class EntidadeComponent implements OnInit {

  util: Utils = new Utils();
  entidade: Entidade;

  constructor(private entidadeService: EntidadeService) { }

  ngOnInit(): void {
    this.findEntidade();  
  }

  findEntidade(){
    let email = this.util.getSubJwt();
    this.entidadeService.getByEmail(email).subscribe( response => {
      this.entidade = response
    });
  }

}
