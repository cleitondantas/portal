import { TestBed, async, inject } from '@angular/core/testing';

import { AnaliseGuard } from './analise.guard';

describe('AnaliseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnaliseGuard]
    });
  });

  it('should ...', inject([AnaliseGuard], (guard: AnaliseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
