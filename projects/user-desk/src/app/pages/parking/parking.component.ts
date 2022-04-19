import { Component, OnInit, ElementRef } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
// import { ParkingService } from '@service/parking.service';
import { saveas } from '@service/_saveas';
import { b64toBlob } from '@service/_utils';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss'],
})
export class ParkingComponent implements OnInit {
  faArrowAltCircleDown = faArrowAltCircleDown;
  faSyncAlt = faSyncAlt;

  public token?: string;
  public parkingCouponLink?: string;
  public parkingLink?: string;
  public width: number = 512;
  public hotelId: number = 36;

  constructor(
    // public parkingService: ParkingService,
    public elementRef: ElementRef,
    public snackbar: MatSnackBar
  ) {
    // if (screen.width > 1024) {
    //   this.width = 168;
    // } else {
    //   this.width = 512;
    // }
  }

  ngOnInit(): void {
    let link = '/menus';
    /*Math.floor(Math.random()*10) // 可均衡获取 0 到 9 的随机整数*/
    this.parkingLink = `${window.location.origin}${link}?${
      'position=堂食&desk_code=C' + Math.floor(Math.random() * 10)
    }`;

    console.log(window.location.origin);
    // if (window.location.origin === 'https://test.jkh.mobi') {
    //     //   this.hotelId = 7;
    //     // }

    this.getLink();
    // /*重庆金科大酒店酒店ID ：36*/
    // this.parkingService.get(this.hotelId).subscribe((response: any) => {
    //   this.getLink(response.detail);
    // });
  }

  update() {
    // /*重庆金科大酒店酒店ID ：36*/
    // this.parkingService.update(this.hotelId).subscribe((response: any) => {
    //   // console.log('11111', response);
    //   this.getLink(response!.detail);
    //   this.snackbar.open('更新成功!', '', { duration: 3000 });
    // });
  }

  getLink(detail?: any) {
    this.token = detail;
    // console.log('token=', this.token);
    const path = '/menus';
    this.parkingCouponLink = `${window.location.origin}${path}?${
      'position=客房&desk_code=A' + Math.floor(Math.random() * 10)
    }`;
  }

  /*定位图片并使用b64toBlob方法和saveas方法转换后下载图片*/
  public downloadQrcodes(event: any) {
    const qrcode = this.elementRef.nativeElement.querySelector(event);
    const img = qrcode?.querySelector('img');

    if (img) {
      const datas = img.src.split(',');
      const blob = b64toBlob(datas[1], datas[0].split(';')[0].split(':')[1]);
      saveas(blob, `${qrcode.id}.png`);
      this.snackbar.open('下载中!', '', { duration: 1000 });
    }
  }
}
