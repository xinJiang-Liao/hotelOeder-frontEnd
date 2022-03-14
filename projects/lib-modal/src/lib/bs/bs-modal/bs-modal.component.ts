import { Component, TemplateRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BsModalService } from '../bs-modal.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal-bs',
  templateUrl: './bs-modal.component.html',
  styleUrls: ['./bs-modal.component.scss'],
  animations: [
    trigger('openClose', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0, transform: 'translateY(-100%)' })),
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
export class BsModalComponent {
  public show = false;
  public options: any;
  public tplRef: TemplateRef<any> | undefined;
  public context: any;
  public faTimes = faTimes;

  private service: BsModalService | undefined;

  constructor() {}

  // ngOnInit(): void {}

  public onbackdrop(event: any): void {
    if (event.target.id === 'contrainer' && !(this.options && this.options.backdropIngore))
      this.hide();
  }

  public hide(): void {
    if (this.service) this.service.hide();
    // if (this.service && !(this.options && this.options.backdropIngore)) this.service.hide();
  }

  public setService(service: BsModalService): void {
    this.service = service;
  }
}
