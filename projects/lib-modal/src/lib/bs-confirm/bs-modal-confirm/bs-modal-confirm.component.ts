import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalConfirmService} from '../bs-modal-confirm.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-bs-confirm',
  templateUrl: './bs-modal-confirm.component.html',
  styleUrls: ['./bs-modal-confirm.component.scss'],
})
export class BsModalConfirmComponent {
  @ViewChild('tplModal', { static: true }) tplModal: TemplateRef<any> | undefined;

  private service: BsModalConfirmService | undefined;

  constructor() {}

  public setService(service: BsModalConfirmService): void {
    this.service = service;
  }

  onclose(confirm?: boolean): void {
    if (this.service) this.service.hide(confirm);
  }
}
