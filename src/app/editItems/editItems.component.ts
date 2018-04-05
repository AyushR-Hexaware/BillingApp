import { Component, OnInit } from "@angular/core";
import { Item } from '../model/item';
import { NgForm } from "@angular/forms"
import { EditItemsService } from './editItems.service';

@Component({
  selector: 'app-editItems',
  templateUrl: './editItems.component.html'
})
export class EditItemsComponent implements OnInit {

  items: Item[];
  constructor(private editItemService: EditItemsService) { }

  ngOnInit() {
    console.log('in init');
    this.items = this.editItemService.getItems();
  }

  onSubmit(form: NgForm) {
    console.log(form.value.itemName);
    let item: Item = new Item(form.value.itemName, form.value.itemCost, form.value.barcode);

    this.editItemService.saveItems(item);

  }

}