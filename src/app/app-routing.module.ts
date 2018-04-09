import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { EditItemsComponent } from './editItems/editItems.component';
import { HomeComponent } from './home/home.component';
import { GenerateBillComponent } from './generateBill/generateBill.component';

const appRoutes : Routes = [
  { path : '', component : LoginComponent }, 
  { path : 'home', component : HomeComponent }, 
  { path : 'editItems', component : EditItemsComponent},
  { path : 'generateBill', component : GenerateBillComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
