import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }
  
  gotoRegister(){
    this.router.navigateByUrl('register');
  }

  LoginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  LoginFormSubmit(r){
    console.log(r);
    this.http.post('http://localhost:3000/users/login',r).subscribe(this.LoginFormSubmitCB)
  }
  LoginFormSubmitCB=(dt)=>{
    console.log(dt);
    if(dt._id){
      alert('login successfull');
    }else{
      alert('login falied')
    }
  }

}
