import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor(private httpCliente: HttpClient) {
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

  public findAll (): Observable<Object> {
    return this.httpCliente.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add (item): Observable<Object> {
    return this.httpCliente.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  public remove (item) {
    // TODO: Verificar se o item existe
    let index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }

  public cross (item) {
    // TODO: Verificar se o item existe
    let index = this.listItems.indexOf(item);
    this.listItems[index].disabled = true;
  }

}
