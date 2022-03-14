import { Component, TemplateRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BtModalService } from '../bt-modal.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-bt',
  templateUrl: './bt-modal.component.html',
  styleUrls: ['./bt-modal.component.scss'],
  animations: [
    trigger('openClose', [
      state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0, transform: 'translateY(100%)' })),
      transition('void => open', [animate('500ms ease-out')]),
      transition('open => closed', [animate('500ms ease-out')]),
    ]),
    trigger('openHide', [
      state('void', style({ opacity: 0 })),
      state('open', style({ opacity: 0.5 })),
      state('closed', style({ opacity: 0 })),
      transition('void => open', [animate('500ms ease-out')]),
      transition('open => closed', [animate('500ms ease-out')]),
    ]),
  ],
})
export class BtModalComponent {
  public show = false;
  public tplRef: TemplateRef<any> | undefined;
  public options: any;
  public context: any;
  public faChevronDown = faChevronDown;

  // private time = new Date().getTime();

  private service: BtModalService | undefined;

  constructor() {}

  // ngOnInit(): void {
  //   // console.log(this.context);
  //   // console.log(this.options);
  // }

  public hide(): void {
    // if (this.service) this.service.hide();
    if (this.service && !(this.options && this.options.backdropIngore)) this.service.hide();
  }

  public setService(service: BtModalService): void {
    this.service = service;
  }
}
