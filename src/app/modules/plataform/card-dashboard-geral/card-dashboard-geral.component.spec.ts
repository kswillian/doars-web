import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDashboardGeralComponent } from './card-dashboard-geral.component';

describe('CardDashboardGeralComponent', () => {
  let component: CardDashboardGeralComponent;
  let fixture: ComponentFixture<CardDashboardGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDashboardGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDashboardGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
