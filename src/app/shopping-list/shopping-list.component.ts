import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Observable<any[]>;
  private itemToAdd: string = '';

  constructor(private myShoppingListService: ShoppingListService) { };

  ngOnInit() {
    this.listItems = this.myShoppingListService.listItemsFireBase;
  }

  private addObjectToList () {
    // Criar
    let newItem = {
      name: this.itemToAdd,
      disabled: false
    };
    // Adicionar
    this.myShoppingListService.add(newItem);

    this.itemToAdd = '';
  }

}
