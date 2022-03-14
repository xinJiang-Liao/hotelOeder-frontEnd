import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private prefix: string;

  constructor(private config: ConfigService) {
    this.prefix = this.config.get('name');
  }

  public keys(): string[] {
    return Object.keys(localStorage)
      .filter(k => k.indexOf(`${this.prefix}|`) === 0)
      .map(k => k.replace(`${this.prefix}|`, ''));
  }

  public set(key: string, value: any, type?: string): void {
    if (!type || type === 'local') {
      localStorage.setItem(`${this.prefix}|${key}`, typeof value === 'number' ? String(value) : JSON.stringify(value));
    } else if (type === 'session') {
      sessionStorage.setItem(`${this.prefix}|${key}`, typeof value === 'number' ? String(value) : JSON.stringify(value));
    }
  }

  public get(key: string, type?: string): any {
    if (!type || type === 'local') {
      return JSON.parse(<string>localStorage.getItem(`${this.prefix}|${key}`));
    } else if (type === 'session') {
      return JSON.parse(<string>sessionStorage.getItem(`${this.prefix}|${key}`));
    } else {
      return null;
    }
  }

  public remove(key: any, type?: string): void {
    if (!type || type === 'local') {
      localStorage.removeItem(`${this.prefix}|${key}`);
    } else if (type === 'session') {
      sessionStorage.removeItem(`${this.prefix}|${key}`);
    }
  }

  public destroy(type?: string): void {
    if (!type || type === 'local') {
      Object.keys(localStorage)
        .filter(k => {
          return k.indexOf(`${this.prefix}|`) === 0;
        })
        .map(k => {
          // console.log(k);
          this.remove(k.split('|')[1]);
        });
    } else if (type === 'session') {
      Object.keys(sessionStorage)
        .filter(k => {
          return k.indexOf(`${this.prefix}|`) === 0;
        })
        .map(k => {
          // console.log(k);
          this.remove(k.split('|')[1]);
        });
    }
  }

}
