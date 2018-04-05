import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditItemsComponent } from './editItems/editItems.component';
import { HttpModule } from '@angular/http';

import { EditItemsService } from './editItems/editItems.service';
import { DataStorageService } from './sharedServices/dataStorage.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent, EditItemsComponent ],
  providers : [EditItemsService,DataStorageService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
