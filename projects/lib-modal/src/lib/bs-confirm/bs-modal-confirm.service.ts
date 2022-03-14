import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService } from '../bs/bs-modal.service';
import { BsModalConfirmComponent } from './bs-modal-confirm/bs-modal-confirm.component';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BsModalConfirmService {
  private observer: Subscriber<any> | undefined;

  // private componentRef: ComponentRef<BsModalConfirmComponent> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private sanitizer: DomSanitizer,
    private bsModalService: BsModalService,
  ) {}

  public show(title: string, text: string, options?: any): Observable<any> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BsModalConfirmComponent)
      .create(this.injector);

    const tplRef = (componentRef.instance as BsModalConfirmComponent).tplModal;
    if (tplRef) {
      this.bsModalService.show(
        tplRef,
        {
          head: title,
          body: this.sanitizer.bypassSecurityTrustHtml(text),
        },
        options,
      );
    }

    (componentRef.instance as BsModalConfirmComponent).setService(this);

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

    this.bsModalService.hide();
  }
}
