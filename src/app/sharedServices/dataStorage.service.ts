import { Http, Response } from "@angular/http";
import { Item } from '../model/Item';
import { Injectable } from "@angular/core";

@Injectable()
export class DataStorageService {

  constructor(private http: Http) { }

  saveItems(items: Item[]) {
    return this.http.put('https://storeinvoice-383d2.firebaseio.com/items.json', items);
  }

  getItems() {
    return this.http.get('https://storeinvoice-383d2.firebaseio.com/items.json');
  }
}