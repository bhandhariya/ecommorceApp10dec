import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username;email;
  constructor(private aroute:ActivatedRoute) { }

  ngOnInit() {
   this.username=localStorage.getItem('username');
   this.email=localStorage.getItem('email');
  }

}
