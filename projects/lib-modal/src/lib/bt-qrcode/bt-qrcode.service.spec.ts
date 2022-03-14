import { TestBed } from '@angular/core/testing';

import { BtQrcodeService } from './bt-qrcode.service';

describe('BtQrcodeService', () => {
  let service: BtQrcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtQrcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
