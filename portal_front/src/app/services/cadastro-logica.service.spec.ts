import { TestBed } from '@angular/core/testing';

import { CadastroLogicaService } from './cadastro-logica.service';

describe('CadastroLogicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroLogicaService = TestBed.get(CadastroLogicaService);
    expect(service).toBeTruthy();
  });
});
