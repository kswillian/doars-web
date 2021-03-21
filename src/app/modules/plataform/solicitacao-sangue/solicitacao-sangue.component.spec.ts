import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoSangueComponent } from './solicitacao-sangue.component';

describe('SolicitacaoSangueComponent', () => {
  let component: SolicitacaoSangueComponent;
  let fixture: ComponentFixture<SolicitacaoSangueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoSangueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
