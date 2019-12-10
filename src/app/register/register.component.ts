import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,
              private http:HttpClient
              ) { }

  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigateByUrl('login')
  }
  registerForm=new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    rpassword:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    question:new FormControl('',[Validators.required]),
    answer:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
  })
  registerFormSubmit(r){
    console.log(r);
  
    this.http.post('http://localhost:3000/users/register',r).subscribe(this.registerFormSubmitCB)
    // this.registerForm.reset();
  }
  registerFormSubmitCB=(dt)=>{
    console.log(dt);
    if(dt._id){
      Swal.fire('You Are Registered Successfully');
      this.registerForm.reset();
    }
  }

}
