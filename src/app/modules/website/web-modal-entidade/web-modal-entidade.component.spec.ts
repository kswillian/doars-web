import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebModalEntidadeComponent } from './web-modal-entidade.component';

describe('WebModalEntidadeComponent', () => {
  let component: WebModalEntidadeComponent;
  let fixture: ComponentFixture<WebModalEntidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebModalEntidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebModalEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
