import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-bt-qrcode',
  templateUrl: './bt-qrcode.component.html',
  styleUrls: ['./bt-qrcode.component.scss'],
})
export class BtQrcodeComponent {
  @ViewChild('tplMsg', { static: true }) tplMsg!: TemplateRef<any>;

  @Output() closed: EventEmitter<any> = new EventEmitter();

  constructor() {}

  // ngOnInit(): void {}

  public onclose(): void {
    this.closed.emit();
  }
}
