import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  name: string;
  number: number;
  price: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: '西冷牛排', number: 1, price: 128 },
  { name: '北京烤鸭', number: 1, price: 68 },
  { name: '蒸鹿茸', number: 1, price: 228 },
  { name: '蒸白糕', number: 2, price: 26 },
  { name: '意大利面', number: 1, price: 36 },
  { name: '西瓜汁', number: 2, price: 40 },
  { name: '惠灵顿牛排', number: 1, price: 88 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['select','name', 'number', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}

  selection = new SelectionModel<PeriodicElement>(true, []);

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
  }

  /**
   * The label for the checkbox on the passed row
   *
   * 传递行上复选框的标签
   *
   */
  checkboxLabel(row?: PeriodicElement): any {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.number + 1
    }`;
  }
}
