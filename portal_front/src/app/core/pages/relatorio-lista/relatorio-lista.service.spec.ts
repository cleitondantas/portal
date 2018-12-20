import { TestBed, inject } from '@angular/core/testing';

import { RelatorioListaService } from './relatorio-lista.service';

describe('RelatorioListaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatorioListaService]
    });
  });

  it('should be created', inject([RelatorioListaService], (service: RelatorioListaService) => {
    expect(service).toBeTruthy();
  }));
});
