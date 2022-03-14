import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'modal-bs-msg',
  templateUrl: './bs-modal-msg.component.html',
  styleUrls: ['./bs-modal-msg.component.scss']
})
export class BsModalMsgComponent implements OnInit {

  @ViewChild('tplMsg', {static: true}) tplMsg: TemplateRef<any> | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
