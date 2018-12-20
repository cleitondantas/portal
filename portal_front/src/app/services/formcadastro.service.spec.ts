import { TestBed, inject } from '@angular/core/testing';

import { FormcadastroService } from './formcadastro.service';

describe('FormcadastroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormcadastroService]
    });
  });

  it('should be created', inject([FormcadastroService], (service: FormcadastroService) => {
    expect(service).toBeTruthy();
  }));
});
