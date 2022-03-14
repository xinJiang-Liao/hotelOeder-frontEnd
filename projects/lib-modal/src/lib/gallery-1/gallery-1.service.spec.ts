import { TestBed } from '@angular/core/testing';

import { Gallery1Service } from './gallery-1.service';

describe('Gallery1Service', () => {
  let service: Gallery1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gallery1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
