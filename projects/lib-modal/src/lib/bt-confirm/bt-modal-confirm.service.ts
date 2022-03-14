import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { BtModalService } from '@modal/bt/bt-modal.service';
import { BtModalConfirmComponent } from './bt-modal-confirm/bt-modal-confirm.component';
import { Observable, Subscriber } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class BtModalConfirmService {
  private observer: Subscriber<any> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private sanitizer: DomSanitizer,
    private btModalService: BtModalService,
  ) {
    //
  }

  public show(title: string, text: string): Observable<any> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BtModalConfirmComponent)
      .create(this.injector);

    const tplRef = (componentRef.instance as BtModalConfirmComponent).tplModal;
    if (tplRef) {
      this.btModalService.show(tplRef, {
        title: title,
        text: this.sanitizer.bypassSecurityTrustHtml(text),
      });
    }

    (componentRef.instance as BtModalConfirmComponent).setService(this);

    return new Observable((observer) => {
      this.observer = observer;
    });
  }

  public hide(confirmed?: boolean): void {
    if (this.observer) {
      this.observer.next(confirmed);
      this.observer.complete();
      this.observer = undefined;
    }

    this.btModalService.hide();
  }
}
