import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from "../category/category.service";
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private catService:CategoryService) { }

  ngOnInit() {
    this.getCategoryDetails();
  }
  SubCategoryForm=new FormGroup({
    categoryid:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  })
  SubCategoryFormSubmit(r){
    console.log(r)
  }

  getCategoryDetails(){
    this.catService.getAllCategories().subscribe(this.getCategoryDetailsCB)
  }
  CategoriesData;
  getCategoryDetailsCB=(dt)=>{
    this.CategoriesData=dt;
  }

}
