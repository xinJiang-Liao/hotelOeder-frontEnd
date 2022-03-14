import { Injectable } from '@angular/core';
import { StorageService } from '../../../../../../lib-services/src/lib/storage.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private status: any;
  private menu: any;
  private expandedMenu = '';

  constructor(private storageService: StorageService) {
    // console.log(this.config);
  }

  public init(status: any, menu: any[]): void {
    this.menu = menu;
    this.status = status;
    this.status.static = !!this.storageService.get('sidebar_static');
  }

  // public setStatus(status: any): void {
  //   this.status = status;
  //   this.status.static = this.storageService.get('sidebar_static');
  // }

  public triggleStatic(): void {
    this.status.static = !this.status.static;
    this.storageService.set('sidebar_static', this.status.static);
    this.collapse(this.status.static);
  }

  public collapse(open: boolean): void {
    if (open) {
      this.status.expand = true;
      for (const m of this.menu) {
        if (m.text === this.expandedMenu) {
          m.expanded = true;
        }
      }
    } else {
      this.status.expand = false;
      for (const m of this.menu) {
        if (m.expanded) {
          this.expandedMenu = m.text;
          m.expanded = false;
        }
      }
    }
  }

  public onmenu(menu: any, sub?: any): void {
    this.menu.forEach((m: any) => {
      if (m.text === menu.text) {
        if (m.items) {
          if (sub) this.activeMenu(m, sub);
          else m.expanded = !m.expanded;
        } else {
          m.active = true;
        }
      } else {
        if (sub || !menu.items) this.disactiveMenu(m);
      }
    });
  }

  private activeMenu(m: any, sub: any): void {
    m.active = true;
    m.items.forEach((x: any) => {
      if (x.text === sub.text) x.active = true;
      else delete x.active;
    });

    // if (sub) this.triggleStatic();
  }

  private disactiveMenu(m: any): void {
    m.active = false;
    if (m.items) {
      m.expanded = false;
      m.items.map((x: any) => {
        delete x.active;
      });
    }
  }
}
