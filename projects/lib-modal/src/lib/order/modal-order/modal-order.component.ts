import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.scss'],
})
export class ModalOrderComponent implements OnInit {
  @ViewChild('tplMsg', { static: true }) tplMsg: TemplateRef<any> | undefined;

  // @ViewChild("body", {read: ElementRef}) bodyRef: ElementRef<any> | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('ModalOrderComponent ngOnInit');
  }
}
