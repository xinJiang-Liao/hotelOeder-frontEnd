import { TestBed } from '@angular/core/testing';

import { ModalOrderService } from './modal-order.service';

describe('BsModalMsgService', () => {
  let service: ModalOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
