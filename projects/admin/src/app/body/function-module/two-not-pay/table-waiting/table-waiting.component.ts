import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  orderID: string;
  phone: string;
  startAt: string;
  pice:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    orderID: '20220310091015',
    phone: '18580423383',
    startAt: '2022-03-10 09:10:15',
    pice:128,
  },
  {
    orderID: '20220310091445',
    phone: '18580423383',
    startAt: '2022-03-10 09:14:45',
    pice:243,
  },
  {
    orderID: '20220310091823',
    phone: '18580423383',
    startAt: '2022-03-10 09:18:23',
    pice:151,
  },
  {
    orderID: '20220310092255',
    phone: '18580423383',
    startAt: '2022-03-10 09:22:55',
    pice:234,
  },
  {
    orderID: '20220310092711',
    phone: '18580423383',
    startAt: '2022-03-10 09:27:11',
    pice:22,
  },
  {
    orderID: '20220310092723',
    phone: '18580423383',
    startAt: '2022-03-10 09:27:23',
    pice:561,
  }, {
    orderID: '20220310093142',
    phone: '13576581212',
    startAt: '2022-03-10 09:31:42',
    pice:24,
  }, {
    orderID: '20220310093212',
    phone: '13576581212',
    startAt: '2022-03-10 09:32:12',
    pice:61,
  },
  {
    orderID: '20220310091041',
    phone: '13576581212',
    startAt: '2022-03-10 09:10:41',
    pice:215,
  },


];

@Component({
  selector: 'app-table-waiting',
  templateUrl: './table-waiting.component.html',
  styleUrls: ['./table-waiting.component.css'],
})
export class TableWaitingComponent implements OnInit {
  displayedColumns: string[] = [
    '订单号',
    '手机号',
    '下单时间',
    '总金额',
    '菜品查看',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length + 1;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return this.selection.isSelected(row) ? 'deselect' : 'select';
  }

  constructor() {}

  ngOnInit(): void {}
}
