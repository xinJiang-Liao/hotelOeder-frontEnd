import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { BtModalService } from '@modal/bt/bt-modal.service';
import { Observable, of, Subscriber } from 'rxjs';
import { BtOptions2Component } from '@modal/bt-options-2/bt-options-2.component';

@Injectable({
  providedIn: 'root',
})
export class BtModalOptions2Service {
  private observer: Subscriber<any> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private btModalService: BtModalService,
  ) {}

  public show(options: any[], setting?: any): Observable<any> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BtOptions2Component)
      .create(this.injector);

    const tplRef = (componentRef.instance as BtOptions2Component).tplModal;
    if (!tplRef) return of(null);

    this.btModalService.show(
      tplRef,
      { options: options },
      setting || {
        height: '82.5%',
        backdropIngore: true,
        hideClose: true,
      },
    );

    (componentRef.instance as BtOptions2Component).setService(this);

    return new Observable((observer) => {
      this.observer = observer;
    });
  }

  public hide(event: any): void {
    if (this.observer) {
      this.observer.next(event);
      this.observer.complete();
      this.observer = undefined;
    }

    this.btModalService.hide();
  }
}
