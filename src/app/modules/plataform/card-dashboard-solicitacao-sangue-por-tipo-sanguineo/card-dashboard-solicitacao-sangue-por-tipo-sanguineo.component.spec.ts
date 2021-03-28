import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardSolicitacaoSanguePorTipoSanguineoComponent } from './card-dashboard-solicitacao-sangue-por-tipo-sanguineo.component';

describe('CardDashboardSolicitacaoSanguePorTipoSanguineoComponent', () => {
  let component: CardDashboardSolicitacaoSanguePorTipoSanguineoComponent;
  let fixture: ComponentFixture<CardDashboardSolicitacaoSanguePorTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDashboardSolicitacaoSanguePorTipoSanguineoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDashboardSolicitacaoSanguePorTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
