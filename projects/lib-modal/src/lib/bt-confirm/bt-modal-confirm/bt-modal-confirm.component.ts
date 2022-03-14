import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BtModalConfirmService } from '../bt-modal-confirm.service';


@Component({
  selector: 'modal-bt-confirm',
  templateUrl: './bt-modal-confirm.component.html',
  styleUrls: ['./bt-modal-confirm.component.scss']
})
export class BtModalConfirmComponent implements OnInit {

  @ViewChild('tplModal', {static: true}) tplModal: TemplateRef<any> | undefined;

  private service: BtModalConfirmService | undefined;


  constructor() {
  }

  ngOnInit(): void {
    //
  }

  public setService(service: BtModalConfirmService): void {
    this.service = service;
  }

  public onclose(confirmed: boolean): void {
    if (this.service) this.service.hide(confirmed);
  }

}
