import { HttpClient } from "@angular/common/http";
import { Item } from '../model/Item';
import { Injectable } from "@angular/core";
import { AuthService } from '../login/auth.service'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class DataStorageService {

  itemsList : AngularFireList<any>;

  constructor(private http: HttpClient,
              private authService : AuthService,
              private firebase : AngularFireDatabase) { }

  saveItems(item: Item) {
    // return this.http.post('https://storeinvoice-383d2.firebaseio.com/items.json?auth=' + this.authService.getToken(), item);
  }

  getItems() {
    // return this.http.get('https://storeinvoice-383d2.firebaseio.com/items.json?auth=' + this.authService.getToken());
    this.itemsList = this.firebase.list('items');
  }

  addItem(item : Item){
    this.itemsList.push({
      itemName : item.itemName,
      itemCost : item.itemCost,
      barcode : item.barcode
    });
  }

  updateItem(item : Item ){
    this.itemsList.update(item.$key,{
      itemName : item.itemName,
      itemCost : item.itemCost,
      barcode : item.barcode
    })
  }

  deleteItem(key : string){
    this.itemsList.remove(key);
  }
}