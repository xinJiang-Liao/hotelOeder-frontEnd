import { TestBed } from '@angular/core/testing';

import { BtsModalConfirmService } from './bts-confirm-modal.service';

describe('BsModalMsgService', () => {
  let service: BtsModalConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtsModalConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
