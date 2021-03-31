import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MunicipiosService } from 'src/app/service/municipios.service';
import { Municipio } from 'src/app/shared/model/Municipio';

@Component({
  selector: 'app-model-municipios',
  templateUrl: './model-municipios.component.html',
  styleUrls: ['./model-municipios.component.css']
})
export class ModelMunicipiosComponent  implements OnInit { 

  @Input()
  municipioId: number;
  municipio: Municipio;

  constructor(
    private modal: NgbModal,
    private router: Router,
    private municipioService: MunicipiosService) { }

  ngOnInit(): void {  
    this.findMunicipioById();     
  }

  ngOnDestroy(): void{
    this.municipioId = null;
  }

  close(){
    this.modal.dismissAll();    
  }

  findMunicipioById() {
    setTimeout(() => {
      this.municipioService.findById(this.municipioId).subscribe(response => {
        this.municipio = response;
      }, erro => {
        this.router.navigate(['/login']);
      });
    }, 400);    
  }

  municipioIsLoad(): boolean{
    if(this.municipio != null){
      return true;
    }
    return false;    
  }

}
