import { TestBed } from '@angular/core/testing';

import { BtModalOptions2Service } from './bt-options-2.service';

describe('BtModalOptions2Service', () => {
  let service: BtModalOptions2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtModalOptions2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
