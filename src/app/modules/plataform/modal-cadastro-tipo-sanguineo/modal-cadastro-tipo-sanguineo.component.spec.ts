import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroTipoSanguineoComponent } from './modal-cadastro-tipo-sanguineo.component';

describe('ModalCadastroTipoSanguineoComponent', () => {
  let component: ModalCadastroTipoSanguineoComponent;
  let fixture: ComponentFixture<ModalCadastroTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastroTipoSanguineoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastroTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
