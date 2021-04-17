import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFormularioEmailComponent } from './web-formulario-email.component';

describe('WebFormularioEmailComponent', () => {
  let component: WebFormularioEmailComponent;
  let fixture: ComponentFixture<WebFormularioEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFormularioEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebFormularioEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
