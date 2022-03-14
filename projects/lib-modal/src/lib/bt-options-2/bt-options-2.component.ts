import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BtModalOptions2Service} from './bt-options-2.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-bt-options2',
  templateUrl: './bt-options-2.component.html',
  styleUrls: ['./bt-options-2.component.scss'],
})
export class BtOptions2Component {
  @ViewChild('tplModal', { static: true }) tplModal!: TemplateRef<any>;

  public active = 0;

  private service: BtModalOptions2Service | undefined;

  constructor() {}

  // ngOnInit(): void {}

  public setService(service: BtModalOptions2Service): void {
    this.service = service;
  }

  public onclick(options: any): void {
    this.service?.hide(options);
  }

  public onselect(option: any, value: string): void {
    if (!option.selected) {
      option.selected = [];
    } else {
      option.selected.pop();
    }
    option.selected.push(value);
  }

  public checkActive(option: any, value: string): boolean {
    if (!option.selected) option.selected = [];
    const selected = option.selected.filter((x: string) => x === value)[0];
    return !!selected;
  }
}
