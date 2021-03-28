import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardDoadoresPorTipoSanguineoComponent } from './card-dashboard-doadores-por-tipo-sanguineo.component';

describe('CardDashboardDoadoresPorTipoSanguineoComponent', () => {
  let component: CardDashboardDoadoresPorTipoSanguineoComponent;
  let fixture: ComponentFixture<CardDashboardDoadoresPorTipoSanguineoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDashboardDoadoresPorTipoSanguineoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDashboardDoadoresPorTipoSanguineoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
