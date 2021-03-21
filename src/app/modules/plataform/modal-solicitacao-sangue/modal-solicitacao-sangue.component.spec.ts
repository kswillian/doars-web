import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSolicitacaoSangueComponent } from './modal-solicitacao-sangue.component';

describe('ModalSolicitacaoSangueComponent', () => {
  let component: ModalSolicitacaoSangueComponent;
  let fixture: ComponentFixture<ModalSolicitacaoSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSolicitacaoSangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSolicitacaoSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
