import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Observable, of, Subscriber } from "rxjs";
import { BtModalService } from "@modal/bt/bt-modal.service";
import { BtCateringPackageComponent } from "@modal/bt-catering-package/bt-catering-package.component";

@Injectable({
  providedIn: 'root'
})
export class BtModalCateringPackageService {

  private observer: Subscriber<any> | undefined;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector,
              private btModalService: BtModalService) {
  }

  public show(dish: any): Observable<any> {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(BtCateringPackageComponent)
      .create(this.injector);

    const tplRef = (componentRef.instance as BtCateringPackageComponent).tplModal;
    if (!tplRef) return of(null);

    this.btModalService.show(tplRef, dish, {height: '92.5%'});
    (componentRef.instance as BtCateringPackageComponent).setService(this);

    return new Observable(observer => {
      this.observer = observer;
    });
  }

  public click(event: any): void {
    if (this.observer) this.observer.next(event);
  }

  public hide(): void {
    if (this.observer) {
      this.observer.complete();
      this.observer = undefined;
    }

    this.btModalService.hide();
  }
}
