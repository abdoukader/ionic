import { TestBed } from '@angular/core/testing';

import { EnvoieService } from './envoie.service';

describe('EnvoieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvoieService = TestBed.get(EnvoieService);
    expect(service).toBeTruthy();
  });
});
