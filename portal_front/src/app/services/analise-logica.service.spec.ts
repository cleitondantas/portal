import { TestBed } from '@angular/core/testing';

import { AnaliseLogicaService } from './analise-logica.service';

describe('AnaliseLogicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnaliseLogicaService = TestBed.get(AnaliseLogicaService);
    expect(service).toBeTruthy();
  });
});
