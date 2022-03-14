import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  AnimationEvent,
} from '@angular/animations';
import { DomHandler } from './../../../../lib-services/src/lib/domhandler';

@Component({
  selector: 'lib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  animations: [
    trigger('animation', [
      state(
        'void',
        style({
          transform: 'scaleY(0.8)',
          opacity: 0,
        })
      ),
      state(
        'close',
        style({
          opacity: 0,
        })
      ),
      state(
        'open',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('void => open', animate('{{showTransitionParams}}')),
      transition('open => close', animate('{{hideTransitionParams}}')),
    ]),
  ],
})
export class OverlayComponent implements OnInit {
  @Input() dismissable: boolean = true;
  @Input() showCloseIcon: boolean = false;
  // @Input() style: any;
  // @Input() styleClass: string = '';
  @Input() appendTo: any;
  @Input() position: string = '';
  @Input() align: string = '';
  // @Input() autoZIndex: boolean = true;
  // @Input() ariaCloseLabel: string = '';
  // @Input() baseZIndex: number = 0;
  // @Input() focusOnShow: boolean = true;
  @Input() showTransitionOptions: string = '.12s cubic-bezier(0, 0, 0.2, 1)';
  @Input() hideTransitionOptions: string = '.1s linear';
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  // @ContentChildren(PrimeTemplate) templates: QueryList<any> | undefined;

  public render: boolean = false;
  public visible: boolean = false;

  private container: HTMLDivElement | undefined;
  private isContainerClicked: boolean = true;
  private target: any;
  private documentClickListener: any;
  private documentResizeListener: any;
  private destroyCallback: Function | undefined;
  // willHide: boolean = false;
  // contentTemplate: TemplateRef<any> | undefined;

  // private static showing: number = 0;
  // private showingIndex: number | undefined;

  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    public cd: ChangeDetectorRef,
    private zone: NgZone
  ) {
    // console.log('OverlayComponent constructor');
  }

  ngOnInit(): void {
    // console.log('OverlayComponent ngOnInit');
    // this.templates?.forEach((item) => {
    //   switch (item.getType()) {
    //     case 'content':
    //       this.contentTemplate = item.template;
    //       break;
    //
    //     default:
    //       this.contentTemplate = item.template;
    //       break;
    //   }
    //
    //   this.cd.markForCheck();
    // });
  }

  ngOnDestroy() {
    this.target = null;
    this.destroyCallback = undefined;
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
  }

  public toggle(event: any, target?: any) {
    if (this.visible) {
      if (this.hasTargetChanged(event, target)) {
        this.destroyCallback = () => {
          this.show(null, target || event.currentTarget || event.target);
        };
      }

      this.hide();
    } else {
      this.show(event, target);
    }
  }

  public show(event: any, target?: any) {
    this.target = target || event.currentTarget || event.target;
    this.visible = true;
    this.render = true;
    this.cd.markForCheck();

    // this.showingIndex = ++OverlayComponent.showing;
  }

  public hide() {
    this.visible = false;
    this.cd.markForCheck();
    // OverlayComponent.showing--;
  }

  public onAnimationStart(event: AnimationEvent) {
    if (event.toState === 'open') {
      this.container = event.element;
      this.onShow.emit(null);
      this.appendContainer();
      this.alignPosition();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();

      // if (this.focusOnShow) {
      this.focus();
      // }
    }
  }

  public onAnimationEnd(event: AnimationEvent) {
    switch (event.toState) {
      case 'void':
        if (this.destroyCallback) {
          this.destroyCallback();
          this.destroyCallback = undefined;
        }
        break;

      case 'close':
        this.onContainerDestroy();
        this.onHide.emit({});
        this.render = false;
        break;
    }
  }

  public onContainerClick() {
    this.isContainerClicked = true;
  }

  private bindDocumentClickListener() {
    if (!this.documentClickListener && this.dismissable) {
      this.zone.runOutsideAngular(() => {
        let documentEvent = DomHandler.isIOS() ? 'touchstart' : 'click';
        const documentTarget: any = this.el
          ? this.el.nativeElement.ownerDocument
          : 'document';

        this.documentClickListener = this.renderer.listen(
          documentTarget,
          documentEvent,
          (event) => {
            if (
              !this.container?.contains(event.target) &&
              this.target !== event.target &&
              !this.target.contains(event.target) &&
              !this.isContainerClicked &&
              this.dismissable
            ) {
              this.zone.run(() => {
                this.hide();
              });
            }

            this.isContainerClicked = false;
            this.cd.markForCheck();
          }
        );
      });
    }
  }

  private unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  private hasTargetChanged(event: any, target: any) {
    return (
      this.target != null &&
      this.target !== (target || event.currentTarget || event.target)
    );
  }

  private appendContainer() {
    if (this.appendTo && this.container) {
      if (this.appendTo === 'body') document.body.appendChild(this.container);
      else DomHandler.appendChild(this.container, this.appendTo);
    }
  }

  private restoreAppend() {
    if (this.container && this.appendTo) {
      this.el.nativeElement.appendChild(this.container);
    }
  }

  private alignPosition() {
    // if (this.autoZIndex && this.container) {
    // this.container.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
    if (this.container)
      this.container.style.zIndex = String(++DomHandler.zindex);

    DomHandler.absolutePosition(
      this.container,
      this.target,
      this.position,
      this.align
    );
    if (
      DomHandler.getOffset(this.container).top <
      DomHandler.getOffset(this.target).top
    ) {
      DomHandler.addClass(this.container, 'overlay-flipped');
    }
    // if (Math.floor(DomHandler.getOffset(this.container).left) < Math.floor(DomHandler.getOffset(this.target).left)
    //   && DomHandler.getOffset(this.container).left > 0) {
    //   DomHandler.addClass(this.container, 'overlay-shifted');
    // }

    // this.alignRight();
  }

  private focus() {
    let focusable = DomHandler.findSingle(this.container, '[autofocus]');
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }

  // private onCloseClick(event: any) {
  //   this.hide();
  //   event.preventDefault();
  // }

  private onWindowResize(event?: any) {
    this.hide();
  }

  private bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }

  // private unbindDocumentResizeListener() {
  //   if (this.documentResizeListener) {
  //     window.removeEventListener('resize', this.documentResizeListener);
  //     this.documentResizeListener = null;
  //   }
  // }

  private onContainerDestroy() {
    this.target = null;
    this.unbindDocumentClickListener();
    // this.unbindDocumentResizeListener();
  }

  // getHostOffset() {
  //   if (this.appendTo === 'body' || this.appendTo === 'target') {
  //     let offset = this.el.nativeElement.getBoundingClientRect();
  //     let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
  //     let targetTop = offset.top + DomHandler.getWindowScrollTop();
  //
  //     return {left: targetLeft, top: targetTop};
  //   } else {
  //     return {left: 0, top: 0};
  //   }
  // }
  //
  // alignRight() {
  //   if (!this.container) return;
  //
  //   // this.preAlign('right');
  //   let hostOffset = this.getHostOffset();
  //   let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
  //   let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
  //   this.container.style.left = left + 'px';
  //   this.container.style.top = top + 'px';
  // }
  //
  // alignLeft() {
  //   if (!this.container) return;
  //
  //   this.preAlign('left');
  //   let hostOffset = this.getHostOffset();
  //   let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
  //   let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
  //   this.container.style.left = left + 'px';
  //   this.container.style.top = top + 'px';
  // }
  //
  // alignTop() {
  //   if (!this.container) return;
  //
  //   this.preAlign('top');
  //   let hostOffset = this.getHostOffset();
  //   let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
  //   let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
  //   this.container.style.left = left + 'px';
  //   this.container.style.top = top + 'px';
  // }
  //
  // alignBottom() {
  //   if (!this.container) return;
  //
  //   this.preAlign('bottom');
  //   let hostOffset = this.getHostOffset();
  //   let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
  //   let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
  //   this.container.style.left = left + 'px';
  //   this.container.style.top = top + 'px';
  // }
  //
  // preAlign(position: string) {
  //   if (!this.container) return;
  //   this.container.style.left = -999 + 'px';
  //   this.container.style.top = -999 + 'px';
  //
  //   // let defaultClassName = 'p-tooltip p-component p-tooltip-' + position;
  //   // this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
  // }
}
