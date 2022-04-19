import { EventEmitter, Injectable } from '@angular/core';

export interface foods {
  type?: string;
  foodName?: string;
  volume?: string;
  number?: number;
  price?: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrderCartService {
  defaultFoods: foods[] = [];
  FoodsEventer: EventEmitter<foods[]> = new EventEmitter();
}
