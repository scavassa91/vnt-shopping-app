import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input("item") private listItem: any;
  public deleted: boolean = false;

  constructor(private myShoppingListService: ShoppingListService) { }

  public removeItem () {
    this.myShoppingListService.remove(this.listItem).subscribe(
      response => {
        console.log('Deu certo!');
        this.deleted= true;
      },
      error => { console.log('Deu erro!') }
    );
  }

  public crossItem () {
    let itemEdited = {
      key: this.listItem.key,
      name: this.listItem.name,
      disabled: true
    };
    this.listItem.disabled = true;
    this.myShoppingListService.edit(itemEdited).subscribe(
      response => {
        console.log("Item editado!");
        this.listItem.disabled = true;
      },
      error => { console.log("Erro ao editar o item!") }
    );
  }

  ngOnInit() {
  }

}
