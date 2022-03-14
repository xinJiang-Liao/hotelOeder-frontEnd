import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { BsModalComponent } from './bs-modal/bs-modal.component';
import { BS_MODAL_WIDTH } from './bs-modal/bs-modal.interface';

@Injectable({
  providedIn: 'root',
})
export class BsModalService {
  private componentRefs: ComponentRef<BsModalComponent>[] | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) {
    //
  }

  public show(tplRef: TemplateRef<any>, context?: any, options?: any): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BsModalComponent)
      .create(this.injector);

    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    if (!this.componentRefs) this.componentRefs = [];
    this.componentRefs.push(componentRef);

    const component = componentRef.instance as BsModalComponent;
    component.show = true;
    component.options = options || {};
    if (!component.options.position) component.options.position = 'top';
    if (!component.options.width) component.options.width = BS_MODAL_WIDTH.default;
    if (screen.width <= 480 && component.options.showClose !== false) {
      component.options.showClose = true;
    }

    component.tplRef = tplRef;
    component.context = { $implicit: context };
    component.setService(this);
  }

  public hide(): void {
    if (!this.componentRefs) return;

    const componentRef = this.componentRefs.pop();
    if (componentRef) {
      (componentRef.instance as BsModalComponent).show = false;

      setTimeout(() => {
        this.applicationRef.detachView(componentRef.hostView);
        componentRef.destroy();
        // componentRef = null;
      }, 500);
    }
  }
}
