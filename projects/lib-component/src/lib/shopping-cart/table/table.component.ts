import {
  Component,
  DoCheck,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { OrderCartService } from '@service/order-cart.service';

export interface foods {
  type: string;
  foodName: string;
  volume: string;
  number: number;
  price: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, DoCheck {
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() newItemEvent2 = new EventEmitter<any>();
  displayedColumns: string[] = ['select', 'name', 'number', 'price'];
  public dataSource: any;

  constructor(public orderCartService: OrderCartService) {}
  ngOnInit(): void {}
  ngDoCheck(): void {
    this.orderCartService.FoodsEventer.subscribe((book) => {
      this.orderCartService.defaultFoods = book;
    });
    this.dataSource = this.orderCartService.defaultFoods;
  }

  selection = new SelectionModel<foods>(true, []);

  summation() {
    let summation: number = 0;

    this.selection.selected.forEach((x) => {
      summation += +x.number * x.price;
      console.log(summation);
      return summation;
    });
    this.newItemEvent.emit(summation);
    this.newItemEvent2.emit(this.selection.selected);
  }
  /**
   * Whether the number of selected elements matches the total number of rows.
   *
   * 所选元素的数量是否与总行数匹配。
   *
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Selects all rows if they are not all selected; otherwise clear selection.
   *
   * 如果没有全部选中，则选择所有行；否则明确选择。
   *
   */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
    console.log(this.selection);
  }

  /**
   * The label for the checkbox on the passed row
   *
   * 传递行上复选框的标签
   *
   */
  checkboxLabel(row?: foods): any {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.number + 1
    }`;
  }
}
