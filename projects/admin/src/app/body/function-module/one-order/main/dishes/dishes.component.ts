import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent /*implements OnInit */ {
  @Input() item: any;

  constructor() {}

  // ngOnInit(): void {}
}
