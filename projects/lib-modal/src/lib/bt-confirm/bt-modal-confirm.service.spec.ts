import { TestBed } from '@angular/core/testing';

import { BtModalConfirmService } from './bt-modal-confirm.service';

describe('BsModalMsgService', () => {
  let service: BtModalConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtModalConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
