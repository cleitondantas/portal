import { TestBed } from '@angular/core/testing';

import { HomeChamadasService } from './home-chamadas.service';

describe('HomeChamadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeChamadasService = TestBed.get(HomeChamadasService);
    expect(service).toBeTruthy();
  });
});
