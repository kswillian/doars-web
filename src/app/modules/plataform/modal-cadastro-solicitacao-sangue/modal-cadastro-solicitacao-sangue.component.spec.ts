import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroSolicitacaoSangueComponent } from './modal-cadastro-solicitacao-sangue.component';

describe('ModalCadastroSolicitacaoSangueComponent', () => {
  let component: ModalCadastroSolicitacaoSangueComponent;
  let fixture: ComponentFixture<ModalCadastroSolicitacaoSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastroSolicitacaoSangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCadastroSolicitacaoSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
