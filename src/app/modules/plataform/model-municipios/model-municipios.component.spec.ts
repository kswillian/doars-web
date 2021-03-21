import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMunicipiosComponent } from './model-municipios.component';

describe('ModelMunicipiosComponent', () => {
  let component: ModelMunicipiosComponent;
  let fixture: ComponentFixture<ModelMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelMunicipiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
