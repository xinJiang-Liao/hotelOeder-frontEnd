import { Injectable } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable({
  providedIn: 'root',
})
export class SwiperHammerService extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y',
      recognizers: [[Hammer.Pan]],
    });
    return mc;
  }
}
