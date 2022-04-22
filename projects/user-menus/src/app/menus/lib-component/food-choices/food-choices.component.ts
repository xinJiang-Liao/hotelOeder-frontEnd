import { Component, OnInit } from '@angular/core';
import { ManuService } from '@service/manu.service';
import { OrderCartService } from '@service/order-cart.service';

@Component({
  selector: 'app-food-choices',
  templateUrl: './food-choices.component.html',
  styleUrls: ['./food-choices.component.scss'],
})
export class FoodChoicesComponent implements OnInit {
  public screen: boolean = false;
  public type: string = '中餐';
  public foodData: any;
  public DropdownMenu?: string;
  public inputData: any = [];

  constructor(
    public manuService: ManuService,
    public orderCartService: OrderCartService
  ) {
    if (window.screen.width > 1024) {
      this.screen = !this.screen;
    }
  }
  ngOnInit(): void {
    this.getFoods(this.type);
  }

  getFoods(type: any) {
    this.DropdownMenu = type;
    this.manuService.getFoods().subscribe((response: any) => {
      let item: any;
      if (type) {
        item = response.filter((x: any) => {
          if (x.type === type) {
            return x;
          }
        });
      } else {
        item = response;
      }
      this.foodData = item;
    });
  }

  public number: any = 0;
  switch(math?: any) {
    if (math == 1) {
      if (this.number == 0) {
        return;
      } else {
        this.number -= 1;
      }
    } else {
      if (this.number == 3) {
        return;
      } else {
        this.number += 1;
      }
    }
    let type: string;
    if (this.number == 0) {
      type = '中餐';
    } else if (this.number == 1) {
      type = '西餐';
    } else if (this.number == 2) {
      type = '小吃';
    } else {
      type = '饮品';
    }
    this.getFoods(type);
  }

  setData() {
    this.orderCartService.FoodsEventer.emit(this.inputData);
  }

  /*-----------------------弹窗---------------------------*/
  isVisible = false;
  isOkLoading = false;
  food: any;

  showModal(data: any): void {
    this.food = data;
    this.food.number = 1;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.inputData = this.inputData.concat([this.food]);
      console.log(this.inputData);
      this.isVisible = false;
      this.isOkLoading = false;
    }, 500);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
