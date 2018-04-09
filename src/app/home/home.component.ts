import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector : 'app-home',
  templateUrl : './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent{

 welcomeMessage = 'Welcome to the Billing Application';

constructor(private router : Router){}
onEditItem(){
  this.router.navigate(['editItems'],{skipLocationChange: true})
}

onGenerateBill(){
 this.router.navigate(['generateBill'],{skipLocationChange: true}) ;
}

}