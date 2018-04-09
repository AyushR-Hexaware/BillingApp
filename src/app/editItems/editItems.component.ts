import { Component, OnInit, OnDestroy } from "@angular/core";
import { Item } from '../model/item';
import { NgForm } from "@angular/forms"
import { EditItemsService } from './editItems.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-editItems',
  templateUrl: './editItems.component.html',
  styleUrls: ['editItems.component.css']
})
export class EditItemsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  items: Item[];
  itemName: string;
  itemCost: number;
  barcode: number;

  constructor(private editItemService: EditItemsService) { }

  ngOnInit() {
    this.resetForm();
    this.subscription = this.editItemService.itemsChanged.
      subscribe(
      (items: Item[]) => {
        this.items = items;
      }
      )
    this.editItemService.getItems();
  }

  onSubmit(form: NgForm) {

    console.log("form values " + form.value.itemName);
    this.editItemService.addItem(form.value);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.editItemService.selectedItem = {
        $key: null,
        itemName: '',
        itemCost: 0,
        barcode: 0
      }
    }
  }

  onClick(item: Item) {
    this.editItemService.selectedItem = item;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}