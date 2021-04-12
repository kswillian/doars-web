import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebModalDoadorComponent } from './web-modal-doador.component';

describe('WebModalDoadorComponent', () => {
  let component: WebModalDoadorComponent;
  let fixture: ComponentFixture<WebModalDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebModalDoadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebModalDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
