import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { BsModalMsgComponent } from './bs-modal-msg/bs-modal-msg.component';
import { BsModalService } from '../bs/bs-modal.service';

@Injectable({
  providedIn: 'root',
})
export class BsModalMsgService {
  private componentRef: ComponentRef<BsModalMsgComponent> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private bsModalService: BsModalService
  ) {}

  public show(title: string, text: string, options?: any): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BsModalMsgComponent)
      .create(this.injector);

    const tplRef = (componentRef.instance as BsModalMsgComponent).tplMsg;
    if (tplRef)
      this.bsModalService.show(tplRef, { head: title, body: text }, options);

    this.componentRef = componentRef;
  }

  // public hide(): void {
  //   if (this.componentRef) {
  //     // (this.componentRef.instance as BsModalMsgComponent).show = false;
  //
  //     setTimeout(() => {
  //       this.applicationRef.detachView(this.componentRef.hostView);
  //       this.componentRef.destroy();
  //       this.componentRef = null;
  //     }, 500);
  //   }
  // }
}
