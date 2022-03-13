import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: any = { time: new Date().getTime() };

  constructor() {
    // console.log(this.config);
  }

  public get(key: string): any {
    return this.config[key];
  }

  public set(key: string, value: any): void {
    this.config[key] = value;
  }
}
