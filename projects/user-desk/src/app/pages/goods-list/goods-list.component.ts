import { Component, OnInit } from '@angular/core';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { ManuService } from '@service/manu.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

// interface DataItem {
//   name: string;
//   age: number;
//   address: string;
// }

interface DataItem {
  id: number;
  introduce: string;
  foodName: string;
  price: number;
  number: number;
  food_Image: string;
  type: string;
  volume: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
}

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss'],
})
export class GoodsListComponent implements OnInit {
  visible = false;
  public formData!: FormGroup;
  foodsList: any[] = [];

  constructor(
    private manuService: ManuService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    this.manuService.getFoods().subscribe((response) => {
      this.foodsList = response;
    });
  }

  upDate(data: DataItem) {
    this.visible = false;
    this.manuService.upDate(data).subscribe((response) => {
      this.getFoods();
      this.message.create('success', '修改已提交');
      console.log(response);
    });
  }
  open(data: any): void {
    this.visible = true;
    if (data) {
      console.log('data:', data);
      this.formData = this.fb.group({
        id: [data.id, [Validators.required]],
        type: [data.type, [Validators.required]],
        foodName: [data.foodName, [Validators.required]],
        price: [data.price, [Validators.required]],
        volume: [data.volume, [Validators.required]],
        number: [data.number, [Validators.required]],
        food_Image: [data.food_Image, [Validators.required]],
        introduce: [data.introduce, [Validators.required]],
      });
    }
  }

  delete(id: number) {
    this.manuService.deleteFoods(id).subscribe((response: any) => {
      this.visible = false;
      this.getFoods();
      this.message.create('success', '菜品删除成功');
      console.log(response);
    });
  }

  close(): void {
    this.visible = false;
  }

  /*模拟数据*/
  listOfData: DataItem[] = [
    {
      id: 1,
      introduce:
        'John BrownJohn BrownJohn BrownJohn BrownJohn BrownJohn BrownJohn BrownJohn BrownJohn BrownJohn Brown',
      foodName: 'John Brown',
      price: 22,
      number: 33,
      food_Image: 'John Brown',
      type: 'John Brown',
      volume: 'John Brown',
    },
    {
      id: 2,
      introduce: 'John Brown',
      foodName: 'John Brown',
      price: 44,
      number: 55,
      food_Image: 'John Brown',
      type: 'John Brown',
      volume: 'John Brown',
    },
  ];

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  /*根据这个对象来对表格每个列字段的功能和名字进行定义*/
  listOfColumns: any /*ColumnItem*/ = [
    // {
    //   name: 'id',
    //   sortOrder: null,
    //   sortFn: (a: DataItem, b: DataItem) => a.id.localeCompare(b.id),
    //   listOfFilter: [
    //     { text: 'Joe', value: 'Joe' },
    //     { text: 'Jim', value: 'Jim' },
    //   ],
    //   filterFn: (list: string[], item: DataItem) =>
    //     list.some((id) => item.id.indexOf(id) !== -1),
    // },
    {
      name: 'id',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.id - b.id,
      filterFn: null,
    },
    {
      name: 'type',
      listOfFilter: [
        { text: '中餐', value: '中餐' },
        { text: '西餐', value: '西餐' },
        { text: '小吃', value: '小吃' },
        { text: '饮品', value: '饮品' },
      ],
      filterFn: (type: string, item: DataItem) =>
        item.type.indexOf(type) !== -1,
    },
    { name: 'foodName' },
    {
      name: 'price',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.price - b.price,
      filterFn: null,
    },
    { name: 'volume' },
    {
      name: 'number',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.number - b.number,
      filterFn: null,
    },

    { name: 'food_Image' },
    { name: 'introduce' },
    { name: '编辑' },
  ];
}
