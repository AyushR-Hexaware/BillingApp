import { Item } from '../model/item';
import { DataStorageService } from '../sharedServices/dataStorage.service';
import { Injectable } from "@angular/core";

import { Response } from "@angular/http";
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';


@Injectable()
export class EditItemsService{

  constructor(private dataStorageSvc : DataStorageService){}

  items : Item [] = Array<Item>();
  itemsChanged = new Subject<Item[]>();
  selectedItem: Item = new Item('', 0, 0);


  getItems() {
    this.dataStorageSvc.getItems()
    .map(
      (response: Response) => {
        //console.log('response from get--'+Object.keys(response.json()).values());
        const items: Item[] = response.json().items;
        //console.log('items in response is '+items);
        //console.log('response from get--'+response.json);
        return items;
      }
      )
      .subscribe(
      (items: Item[]) => {
        this.setItems(items);
      }
      );
  }

  addItem(item : Item){
    this.items = this.items!= null ? this.items : [];
    this.items.push(item);
    this.dataStorageSvc.addItem(item)
    .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  setItems (items : Item [])
  {
    this.items = items;
    this.itemsChanged.next(items);
  }
}