import { TestBed, inject } from '@angular/core/testing';

import { TokenService } from './token.service';
import { ProdcuctService } from './prodcuct.service';

describe('TokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ProdcuctService]
  }));

  it('should be created', inject([ProdcuctService], (service: ProdcuctService) => {
    expect(service).toBeTruthy();
  }));
});
