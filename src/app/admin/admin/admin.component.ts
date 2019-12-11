import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username;email;
  constructor(private aroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
   this.username=localStorage.getItem('username');
   this.email=localStorage.getItem('email');
  }
  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login')
  }

}
