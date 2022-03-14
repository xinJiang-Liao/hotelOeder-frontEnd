import { TestBed } from '@angular/core/testing';

import { BtModalService } from './bt-modal.service';

describe('BsModalService', () => {
  let service: BtModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
