import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  Company="My Company";
  TagLine="We specialize in blablabla";

  constructor(private authService : AuthService,
  private router: Router,
    private route: ActivatedRoute) { }

  onSubmit(form: NgForm) {
    
    this.authService.signIn(form.value.userId,form.value.password);
    
  }
}
