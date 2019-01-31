import { TestBed } from '@angular/core/testing';

import { AnaliseChamadasService } from './analise-chamadas.service';

describe('AnaliseChamadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnaliseChamadasService = TestBed.get(AnaliseChamadasService);
    expect(service).toBeTruthy();
  });
});
