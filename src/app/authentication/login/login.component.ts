import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.email])
  });

  hide = true;

  constructor(private route: Router,) { }

  ngOnInit(): void {
  }

  onLogin(form: {email:string,password:string}) {
    this.route.navigate(['/']);
  }

}
