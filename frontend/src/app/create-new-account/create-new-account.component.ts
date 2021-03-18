import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  password: String = 'Mahi';

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
    console.log("Create Password")
  }
}
