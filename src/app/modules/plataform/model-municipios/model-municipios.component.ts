import { Component, OnInit ,Input } from '@angular/core';
import { Municipio } from 'src/app/shared/model/Municipio';

@Component({
  selector: 'app-model-municipios',
  templateUrl: './model-municipios.component.html',
  styleUrls: ['./model-municipios.component.css']
})
export class ModelMunicipiosComponent  implements OnInit { 

  @Input()
  municipioDetails: Municipio;

  constructor() { }

  ngOnInit(): void {       
  }

  ngOnDestroy(): void{
    this.municipioDetails=null;
  }

}
