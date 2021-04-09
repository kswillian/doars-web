import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebContatoComponent } from './web-contato.component';

describe('WebContatoComponent', () => {
  let component: WebContatoComponent;
  let fixture: ComponentFixture<WebContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
