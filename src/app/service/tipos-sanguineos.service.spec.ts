import { TestBed } from '@angular/core/testing';

import { TiposSanguineosService } from './tipos-sanguineos.service';

describe('TiposSanguineosService', () => {
  let service: TiposSanguineosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposSanguineosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
