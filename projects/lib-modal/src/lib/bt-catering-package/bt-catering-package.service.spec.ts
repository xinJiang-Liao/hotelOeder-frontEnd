import { TestBed } from '@angular/core/testing';

import { BtModalCateringPackageService } from './bt-catering-package.service';

describe('BtModalCateringPackageService', () => {
  let service: BtModalCateringPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtModalCateringPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
