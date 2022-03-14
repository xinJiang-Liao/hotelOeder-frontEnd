import { Injectable } from '@angular/core';
import { BsModalConfirmService } from '@modal/bs-confirm/bs-modal-confirm.service';
import { BtModalConfirmService } from '@modal/bt-confirm/bt-modal-confirm.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BtsModalConfirmService {
  private service: BsModalConfirmService | BtModalConfirmService | undefined;

  constructor(
    private bsModalConfirmService: BsModalConfirmService,
    private btModalConfirmService: BtModalConfirmService,
  ) {
    //
  }

  public show(title: string, text: string, options?: any): Observable<any> {
    this.service = screen.width > 480 ? this.bsModalConfirmService : this.btModalConfirmService;
    return this.service ? this.service.show(title, text, options) : of(null);
  }

  // public hide(): void {
  //   this.service?.hide();
  // }
}
