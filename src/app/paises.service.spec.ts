import { TestBed } from '@angular/core/testing';

import { PaisesService } from './paises.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PaisesService', () => {
  let service: PaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        //RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(PaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
