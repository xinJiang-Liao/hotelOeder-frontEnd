import { TestBed } from '@angular/core/testing';

import { BsModalConfirmService } from './bs-modal-confirm.service';

describe('BsModalMsgService', () => {
  let service: BsModalConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsModalConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
