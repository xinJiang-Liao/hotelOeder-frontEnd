import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { BsModalService } from '@modal/bs/bs-modal.service';
import { BtModalService } from '@modal/bt/bt-modal.service';

@Injectable({
  providedIn: 'root',
})
export class BtsModalService {
  private service: BtModalService | BsModalService | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private bsModalService: BsModalService,
    private btModalService: BtModalService,
  ) {
    //
  }

  public show(tplRef: TemplateRef<any>, context?: any, options?: any): void {
    this.service = screen.width > 480 ? this.bsModalService : this.btModalService;
    this.service?.show(tplRef, context, options);
  }

  public hide(): void {
    this.service?.hide();
  }
}
