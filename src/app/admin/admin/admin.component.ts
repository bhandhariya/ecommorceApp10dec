import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username;
  constructor(private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.paramMap.subscribe(r=>{
      this.username=(r.get('name'))
    })
  }

}
