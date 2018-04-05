import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCuGAr2KGujOD2YUSSfuf5ExTypq4B8W6k",
      authDomain: "storeinvoice-383d2.firebaseapp.com",
    });
  }
}
