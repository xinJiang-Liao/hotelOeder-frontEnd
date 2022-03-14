import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { SIDEBAR_LABEL, SIDEBAR_MENU } from './sidebar.data';
import { SidebarService } from './sidebar.service';
import { goto, policy2scope2 } from '@service/_utils';
import { ConfigService } from '@service/config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menu = JSON.parse(JSON.stringify(SIDEBAR_MENU));
  public label = SIDEBAR_LABEL;
  public faAngleLeft = faAngleLeft;
  public status = { expand: false, static: false };

  constructor(
    private router: Router,
    private location: Location,
    public cd: ChangeDetectorRef,
    // private ngZone: NgZone,
    private sidebarService: SidebarService,
    private config: ConfigService,
  ) {
    //
  }

  ngOnInit(): void {
    this.checkPrivilege();

    this.sidebarService.init(this.status, this.menu);
    this.initActiveMenu(this.location);

    merge(
      fromEvent(document.getElementsByClassName('bar'), 'mouseenter'),
      fromEvent(document.getElementsByClassName('bar'), 'mouseleave'),
    )
      .pipe(debounceTime(50))
      .subscribe((next) => {
        if (this.status.static) return;
        this.sidebarService.collapse(next.type === 'mouseenter');
      });
  }

  public onmenu(menu: any, sub?: any): void {
    this.sidebarService.onmenu(menu, sub);

    if (sub && screen.width < 480) {
      this.sidebarService.triggleStatic();
    }
  }

  public goto(path: string): void {
    goto(path);
  }

  private initActiveMenu(location: Location): void {
    const path = location.path().split('?')[0];

    let menu, sub;
    for (const m of this.menu) {
      if (!m.items && m.link === path) {
        menu = m;
        break;
      }
      if (m.items) {
        for (const s of m.items) {
          if (s.link === path) {
            menu = m;
            sub = s;
            break;
          }
        }
        if (menu && sub) break;
      }
    }

    if (menu) this.sidebarService.onmenu(menu, sub);
  }

  private checkPrivilege(): void {
    const user = this.config.get('user');
    const policy = user.policy;

    this.menu = this.menu.filter((m: any) => {
      if (m.items && m.items.length > 0) {
        m.items = m.items.filter((s: any) => policy2scope2(s.resource, policy));
      }
      return m.items.length > 0 && policy2scope2(m.resource, policy);
    });

    // console.log(user);
    // console.log(policy);
    // console.log(this.menu);
  }
}
