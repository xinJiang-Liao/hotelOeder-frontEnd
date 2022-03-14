import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { BsModalService } from '@modal/bs/bs-modal.service';
import { BtModalService } from '@modal/bt/bt-modal.service';
import { ModalOrderComponent } from '@modal/order/modal-order/modal-order.component';

@Injectable({
  providedIn: 'root',
})
export class ModalOrderService {
  private componentRef!: ComponentRef<ModalOrderComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private bsModalService: BsModalService,
    private btModalService: BtModalService,
  ) {}

  public show(order: any, options?: any): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ModalOrderComponent)
      .create(this.injector);

    const context: any = { id: order.id, type: order.type };
    if (order.type === '点餐') context.link = `/user/catering/ordering?oid=${order.id}`;

    const tplRef = (componentRef.instance as ModalOrderComponent).tplMsg;
    if (tplRef) {
      if (screen.width > 480) this.bsModalService.show(tplRef, context, options);
      else this.btModalService.show(tplRef, context, options);
    }

    this.componentRef = componentRef;
  }
}
