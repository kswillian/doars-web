import { TestBed } from '@angular/core/testing';

import { SolicitacaoSangueService } from './solicitacao-sangue.service';

describe('SolicitacaoSangueService', () => {
  let service: SolicitacaoSangueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacaoSangueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
