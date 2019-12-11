import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SubCategoryForm=new FormGroup({
    name:new FormControl(''),
    description:new FormControl('')
  })

}
