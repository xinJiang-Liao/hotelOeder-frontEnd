import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { Gallery1Component } from '@modal/gallery-1/gallery-1.component';
import { BsModalComponent } from '@modal/bs/bs-modal/bs-modal.component';

@Injectable({
  providedIn: 'root',
})
export class Gallery1Service {
  private componentRefs: ComponentRef<Gallery1Component>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  public show(images: any[], index?: number): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(Gallery1Component)
      .create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.componentRefs.push(componentRef);

    const component = componentRef.instance as Gallery1Component;
    component.show = true;
    component.setImages(images, index);
    // component.images = images;
    // if (index && index >= 0) component.gotoIndex(index);
    // component.context = {$implicit: context};
    component.setService(this);
  }

  public hide(): void {
    const componentRef = this.componentRefs.pop();
    if (componentRef) {
      (componentRef.instance as Gallery1Component).show = false;
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
      // setTimeout(() => {
      //   this.applicationRef.detachView(componentRef.hostView);
      //   componentRef.destroy();
      //   // componentRef = null;
      // }, 500);
    }
  }
}
