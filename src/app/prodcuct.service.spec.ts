import { TestBed } from '@angular/core/testing';

import { ProdcuctService } from './prodcuct.service';

describe('ProdcuctService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdcuctService = TestBed.get(ProdcuctService);
    expect(service).toBeTruthy();
  });
});
