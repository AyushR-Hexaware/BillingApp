import { Item } from '../model/item';
import { DataStorageService } from '../sharedServices/dataStorage.service';
import { Injectable } from "@angular/core";

import { Response } from "@angular/http";

@Injectable()
export class EditItemsService{

  constructor(private dataStorageSvc : DataStorageService){}

  items : Item [] = Array<Item>();
  getItems() : Item []{
    this.dataStorageSvc.getItems()
    .map(
      (response: Response) => {
        const items: Item[] = response.json();
        return items;
      }
      )
      .subscribe(
      (items: Item[]) => {
        this.items =items;
      }
      );
    return this.items;
  }

  saveItems(item : Item){
    this.items.push(item);
    this.dataStorageSvc.saveItems(this.items)
    .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  setItems (items : Item [])
  {
    this.items = items;
  }
}