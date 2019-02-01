import { TestBed } from '@angular/core/testing';

import { CadastroChamadasService } from './cadastro-chamadas.service';

describe('CadastroChamadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroChamadasService = TestBed.get(CadastroChamadasService);
    expect(service).toBeTruthy();
  });
});
