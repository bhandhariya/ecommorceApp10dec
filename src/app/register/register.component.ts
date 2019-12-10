import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigateByUrl('login')
  }
  registerForm=new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    password:new FormControl(''),
    rpassword:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    question:new FormControl(''),
    answer:new FormControl(''),
    gender:new FormControl(''),
  })
  registerFormSubmit(r){
    console.log(r);
    this.registerForm.reset()
  }

}
