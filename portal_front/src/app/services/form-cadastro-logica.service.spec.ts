import { TestBed } from '@angular/core/testing';

import { FormCadastroLogicaService } from './form-cadastro-logica.service';

describe('FormCadastroLogicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormCadastroLogicaService = TestBed.get(FormCadastroLogicaService);
    expect(service).toBeTruthy();
  });
});
