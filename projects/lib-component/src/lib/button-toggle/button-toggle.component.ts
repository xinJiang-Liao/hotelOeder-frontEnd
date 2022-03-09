import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {
  @Input() date:any
  constructor() {
    // console.log('输出：'+this.date)
  }



  ngOnInit(): void {
  }

}
