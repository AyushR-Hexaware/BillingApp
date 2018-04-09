import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditItemsComponent } from './editItems/editItems.component';
import { HttpModule } from '@angular/http';

import { EditItemsService } from './editItems/editItems.service';
import { DataStorageService } from './sharedServices/dataStorage.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './login/auth.service';
import { HomeComponent } from './home/home.component';
import { GenerateBillComponent } from './generateBill/generateBill.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environment/environment';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpModule, AppRoutingModule, 
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule],
  declarations: [ AppComponent, EditItemsComponent, LoginComponent, HomeComponent, GenerateBillComponent],
  providers : [EditItemsService, DataStorageService, AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
