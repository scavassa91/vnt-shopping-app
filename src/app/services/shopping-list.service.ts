import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor() {
    this.listItems = [{
      name: 'Bread',
      disabled: false
    },{
      name: 'Butter',
      disabled: false
    },{
      name: 'Coffee',
      disabled: false
    },{
      name: 'Cookies',
      disabled: true
    },];
  }

  public findAll () {
    return this.listItems;
  }

}
