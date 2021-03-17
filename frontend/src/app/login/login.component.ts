import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
  }

  login(){
    console.log("clicked on login");
  }

  forgotPassword() {
    console.log("Forgot password");
  }

  createNewAccount() {
    this.router.navigate(['/createNewAccount']);
  }
}
