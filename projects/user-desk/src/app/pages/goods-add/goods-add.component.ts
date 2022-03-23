import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-goods-add',
  templateUrl: './goods-add.component.html',
  styleUrls: ['./goods-add.component.scss'],
})
export class GoodsAddComponent implements OnInit {
  public goods: any = {};
  constructor() {}

  ngOnInit(): void {}

  public onsave(event: any): void {
    this.saving.save = true;
    this.saving.text = '上传主图';
    this.uploadImages(this.mainWrap)
      .pipe(
        mergeMap((next) => {
          this.saving.text = '上传详情图';
          return this.uploadImages(this.detailWrap);
        }),
        mergeMap((next) => {
          this.saving.text = '上传详情中的图片';
          return this.uploadImages(this.detailEditor);
        }),
        mergeMap((next) => {
          this.saving.text = '上传使用说明中的图片';
          return this.uploadImages(this.usageEditor);
        }),
        mergeMap((next) => {
          this.saving.text = '校验数据';
          this.saving.progress = 5;

          const verify = this.verifyGoods();
          if (verify) {
            this.bsModalMsgService.show('商品数据验证提示', verify);
            return of(null);
          }

          const update = this.getUpdate();
          if (!update) {
            this.bsModalMsgService.show('提示', '商品数据没有更新，无需保持');
            return of(null);
          }

          this.saving.text = '上传数据';
          this.saving.progress = 10;
          return this.goodsService.save(update);
        })
      )
      .subscribe(
        (response) => {
          if (response) {
            if (!this.goods.id) this.goods.id = response.entity.id;
            this.ssGoods = JSON.parse(JSON.stringify(this.goods));
            this.bsModalMsgService.show('已保存', '商品数据已保存');
          }

          this.saving.save = false;
          this.saving.text = '';
          this.saving.progress = 0;
        },
        (error) => {
          this.bsModalMsgService.show('错误', message3error(error));
          this.saving.save = false;
          this.saving.text = '';
          this.saving.progress = 0;
        }
      );
  }
}
