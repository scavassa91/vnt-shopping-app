import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ShoppingListService {

  private listItems: Array<any>;

  // Angular firebase properties
  public listItemsFireBase: Observable<any[]>;
  private listItemsRef: AngularFireList<any>;

  constructor(private httpCliente: HttpClient, private db: AngularFireDatabase) {
    this.listItems = [];
    this.listItemsRef = this.db.list('items');

    // Observar as modificações feitas na lista
    this.listItemsFireBase = this.listItemsRef.snapshotChanges().map(
      changes => {
        return changes.map (c => {
          console.log(c.payload.val());
          return ({
            key: c.payload.key,
            name: c.payload.val()['name'],
            disabled: c.payload.val()['disabled']
          })
        })
      }
    );
  };

  public add (item) {
    this.listItemsRef.push(item);
  }

  public remove (item) {
    this.listItemsRef.remove(item.key);
  }

  // We dont use this method
  public removeAll () {
    this.listItemsRef.remove();
  }

  public edit (item) {
    const { key, ...newItem } = item;
    this.listItemsRef.update(item.key, newItem);
  }

}
