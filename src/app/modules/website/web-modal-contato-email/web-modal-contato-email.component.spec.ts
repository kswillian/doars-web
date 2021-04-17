import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebModalContatoEmailComponent } from './web-modal-contato-email.component';

describe('WebModalContatoEmailComponent', () => {
  let component: WebModalContatoEmailComponent;
  let fixture: ComponentFixture<WebModalContatoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebModalContatoEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebModalContatoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
