import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Array<any>;

  constructor(private myShoppingListService: ShoppingListService) {
    this.listItems = this.myShoppingListService.findAll();
  }

  ngOnInit() {
    console.log(this.listItems);
  }

}
