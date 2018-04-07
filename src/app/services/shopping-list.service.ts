import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  constructor(private httpCliente: HttpClient) { }

  public findAll (): Observable<Object> {
    return this.httpCliente.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public add (item): Observable<Object> {
    return this.httpCliente.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  public remove (item): Observable<Object> {
    return this.httpCliente.delete(`${environment.firebase.databaseURL}/items/${item.key}.json`);
  }

  public edit (item): Observable<Object> {
    const { key, ...newItem } = item;
    return this.httpCliente.put(`${environment.firebase.databaseURL}/items/${item.key}.json`, newItem);
  }

}
