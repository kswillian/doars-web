import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSobreComponent } from './web-sobre.component';

describe('WebSobreComponent', () => {
  let component: WebSobreComponent;
  let fixture: ComponentFixture<WebSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSobreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
