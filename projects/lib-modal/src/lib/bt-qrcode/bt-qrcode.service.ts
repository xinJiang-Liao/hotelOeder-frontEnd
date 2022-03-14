import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { BtModalService } from '@modal/bt/bt-modal.service';
import { BtQrcodeComponent } from '@modal/bt-qrcode/bt-qrcode.component';

@Injectable({
  providedIn: 'root',
})
export class BtQrcodeService {
  private componentRef!: ComponentRef<BtQrcodeComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private btModalService: BtModalService,
  ) {}

  public show(data: string, width: number, text: string): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BtQrcodeComponent)
      .create(this.injector);

    const tplRef = (componentRef.instance as BtQrcodeComponent).tplMsg;
    this.btModalService.show(tplRef, { data: data, width: width, text: text });

    this.componentRef = componentRef;
  }

  public hide(): void {
    this.btModalService.hide();
  }
}
