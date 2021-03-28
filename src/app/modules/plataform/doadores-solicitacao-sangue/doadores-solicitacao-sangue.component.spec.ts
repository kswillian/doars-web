import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadoresSolicitacaoSangueComponent } from './doadores-solicitacao-sangue.component';

describe('DoadoresSolicitacaoSangueComponent', () => {
  let component: DoadoresSolicitacaoSangueComponent;
  let fixture: ComponentFixture<DoadoresSolicitacaoSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoadoresSolicitacaoSangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadoresSolicitacaoSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
