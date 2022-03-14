import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BtModalCateringPackageService } from "@modal/bt-catering-package/bt-catering-package.service";

@Component({
  selector: 'modal-bt-catering-package',
  templateUrl: './bt-catering-package.component.html',
  styleUrls: ['./bt-catering-package.component.scss']
})
export class BtCateringPackageComponent implements OnInit {

  @ViewChild('tplModal', {static: true}) tplModal: TemplateRef<any> | undefined;

  public active = 0;

  private service: BtModalCateringPackageService | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  public setService(service: BtModalCateringPackageService): void {
    this.service = service;
  }

  public onclick(options: any[]): void {
    if (this.service) this.service.click(options[this.active]);
  }

}
