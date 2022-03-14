import { TestBed } from '@angular/core/testing';

import { BtsModalService } from './bts-modal.service';

describe('BsModalMsgService', () => {
  let service: BtsModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
