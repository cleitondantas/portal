import { TestBed } from '@angular/core/testing';

import { HistoricoLogicaService } from './historico-logica.service';

describe('HistoricoLogicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoricoLogicaService = TestBed.get(HistoricoLogicaService);
    expect(service).toBeTruthy();
  });
});
