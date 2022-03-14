import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { BtModalComponent } from './bt-modal/bt-modal.component';

@Injectable({
  providedIn: 'root',
})
export class BtModalService {
  public onHide = new Subject<Component>();

  private componentRefs: ComponentRef<BtModalComponent>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) {}

  public show(tplRef: TemplateRef<any>, context?: any, options?: any): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(BtModalComponent)
      .create(this.injector);

    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    if (options?.parent) options.parent.nativeElement.appendChild(domElem);
    else document.body.appendChild(domElem);

    this.componentRefs.push(componentRef);

    const component = componentRef.instance as BtModalComponent;
    component.show = true;
    component.options = options || {};
    component.options.index = this.componentRefs.length - 1;
    // if (!component.options.position) component.options.position = 'top';
    component.tplRef = tplRef;
    component.context = { $implicit: context };
    component.setService(this);
  }

  // public showInRef(elementRef: ElementRef<any>, tplRef: TemplateRef<any>, context?: any, options?: any): void {
  //   const componentRef = this.componentFactoryResolver.resolveComponentFactory(BtModalComponent)
  //     .create(this.injector);
  //
  //   // elementRef.attachView(componentRef.hostView);
  //   const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  //   this.renderer.appendChild(elementRef, domElem);
  //
  //   if (!this.componentRefs) this.componentRefs = [];
  //   this.componentRefs.push(componentRef);
  //
  //   const component = componentRef.instance as BtModalComponent;
  //   component.show = true;
  //   component.options = options || {};
  //   // if (!component.options.position) component.options.position = 'top';
  //   component.tplRef = tplRef;
  //   component.context = {$implicit: context};
  //   component.setService(this);
  // }

  public hide(): void {
    const componentRef = this.componentRefs.pop();
    if (!componentRef) return;

    (componentRef.instance as BtModalComponent).show = false;
    setTimeout(() => {
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
      // componentRef = null;
    }, 500);

    this.onHide.next(componentRef.instance as Component);
  }
}
