import { Component, OnInit } from '@angular/core';
import { faBars, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from "../sidebar/sidebar.service";
import { ConfigService } from "../../../../../../lib-services/src/lib/config.service";
import { OrderService } from "../../../../../../lib-services/src/lib/order.service";
import { BsModalMsgService } from "../../../../../../lib-modal/src/lib/bs-msg/bs-modal-msg.service";
import { message3error, goto, policy2scope2 } from "../../../../../../lib-services/src/lib/_utils";
import { Router } from "@angular/router";
import { timer } from "rxjs";
import { NAVBAR_CHECK } from "./navbar.data";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public faBars = faBars;
  public faCog = faCog;
  // public faUndo = faUndo;
  // public faBed = faBed;
  // public faTruck = faTruck;

  public menuOp = [{text: '退出登录', icon: faSignOutAlt, link: 'goto:/login?action=signout'}];
  public notices: any[] = [];
  public noticeCount: number = 0;
  public noticeUpdatedAt: Date | undefined;
  public user: any;

  // public bottom: HTMLElement | null = null;

  private noticeResources: any[] = NAVBAR_CHECK;
  //   [
  //   {type: 'reserve', resource: 'jinkeh:reports:reservation:', refresher: this.checkReserve},
  //   {type: 'refund', resource: 'jinkeh:goods:refund:*', refresher: this.checkRefund},
  //   {
  //     type: 'shipping',
  //     resource: 'jinkeh:goods:shipping:*',
  //     text: '待发货订单',
  //     icon: faTruck,
  //     path: 'goto:/admin/good/shipping'
  //   }
  // ];

  private noticeRefresh: any[] = [];
  private playing = false;
  private playnum = 0;

  constructor(private router: Router,
              private sidebarService: SidebarService,
              private config: ConfigService,
              private orderService: OrderService,
              private bsModalMsgService: BsModalMsgService) {

  }

  ngOnInit(): void {
    this.user = this.config.get('user');
    this.prepareNoticesRefresh();
    // this.checkReserve();

    // this.bottom = document.getElementById('bottom');
  }

  public onsidebar(): void {
    this.sidebarService.triggleStatic();
  }

  public goto(path: string): void {
    goto(path);
  }

  public prepareNoticesRefresh(): void {
    for (const r of this.noticeResources) {
      const scope = policy2scope2(r.resource, this.user.policy);
      if (['*', 'hotel'].filter(x => x === scope).length > 0) this.noticeRefresh.push(r);
    }
    if (this.noticeRefresh.length > 0) {
      const interval = this.user.role === 'admin' ? 10 * 60 * 1000 : 60 * 1000;
      timer(0, interval).subscribe(() => this.refreshNotices());
    }
  }

  private refreshNotices(): void {
    this.noticeCount = 0;
    this.notices = [];
    for (const r of this.noticeRefresh) {
      // if (typeof r === 'function') r.apply(this);
      this.check(r);
    }
  }

  private check(resource: any): void {
    this.orderService.check(resource.type).subscribe(
      response => {
        if (response.entity.length > 0) {
          this.noticeCount += response.entity.length;
          const notice = {
            text: `${response.entity.length}个 ${resource.text}`,
            time: response.entity[0].updatedAt,
            icon: resource.icon,
            path: resource.path
          };
          this.notices.push(notice);
          this.playNotice();
        }
        this.noticeUpdatedAt = new Date();
      },
      error => this.bsModalMsgService.show('错误', message3error(error))
    );
  }

  private playNotice(): void {
    if (this.noticeCount > 0 && !this.playing) {
      this.playing = true;
      const subscription = timer(0, 1000 * 4).subscribe(() => {
          if (this.playnum < 3) {
            try {
              const audio = new Audio();
              audio.src = 'assets/audio/dingdong_order.mp3';
              audio.load();
              audio.play();
            } catch (e) {
              console.log('error when play;', e);
            }
            this.playnum++;
          } else {
            subscription.unsubscribe();
            this.playnum = 0;
            this.playing = false;
          }
        }
      );
    }
  }

}

