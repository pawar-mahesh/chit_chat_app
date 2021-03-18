import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  userData: User = new User();

  createNewAccountForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    username: [''],
    email: [''],
    mobileNo: [''],
    password: ['']
  });

  ngOnInit(): void {
  }

  createAccount() {

    // set values
    this.userData.username = this.createNewAccountForm.value.username;
    this.userData.password = this.createNewAccountForm.value.password;
    this.userData.Profile.firstName = this.createNewAccountForm.value.firstName;
    this.userData.Profile.lastName = this.createNewAccountForm.value.lastName;
    this.userData.Profile.email = this.createNewAccountForm.value.email;
    this.userData.Profile.mobileNo = this.createNewAccountForm.value.mobileNo;

    this.userService.createNewAccount(this.userData).subscribe(
      (response) => {
        console.log("New user created success");
        this.router.navigate(['']);
      },

      (errorResponse) => {
        console.log("Error: New user creation failed");
      }
    )
  }
}
