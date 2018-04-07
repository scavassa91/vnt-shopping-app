import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private listItems: Object;

  private itemToAdd: string = '';

  constructor(private myShoppingListService: ShoppingListService) {
    this.myShoppingListService.findAll().subscribe(
      response => {
        this.listItems = Object.keys(response).map(id => {
          let item: any = response[id];
          item.key = id;
          return item;
        })
      },
      erro => { console.error(erro) }
    )
  };

  ngOnInit() { }

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
