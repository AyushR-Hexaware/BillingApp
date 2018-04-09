import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthService {
  token: string;
  tokenChanged = new Subject<string>();
  subscription: Subscription;


  constructor(private router: Router) { }
  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.router.navigate(['home'],{skipLocationChange: true});
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => {
            this.setToken(token);
          }
          )
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  getToken(): string {
    this.subscription = this.tokenChanged.
      subscribe(
      (token: string) => {
        this.token = token;
      }
      )
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
    this.tokenChanged.next(token);
  }
}
