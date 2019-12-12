import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from "../category/category.service";
import { SubcategoryService } from "../subcategory/subcategory.service";
import { SubsubcategoryService } from "./subsubcategory.service";
@Component({
  selector: 'app-subsubcategory',
  templateUrl: './subsubcategory.component.html',
  styleUrls: ['./subsubcategory.component.css']
})
export class SubsubcategoryComponent implements OnInit {

  constructor(
    private catService:CategoryService,
    private sCatService:SubcategoryService,
    private ssCatService:SubsubcategoryService
  ) { }

  ngOnInit() {
    this.getCategoryWithSubCategory();
  }
  getCategoryWithSubCategory(){
    this.catService.getAllCategorieswithCategory().subscribe(this.getAllCategoriesCB)
  }
  getAllCategories(){
    this.catService.getAllCategories().subscribe(this.getAllCategoriesCB)
  }
  CategoriesData;
  getAllCategoriesCB=(dt)=>{
    // console.log(dt[0]);
    this.CategoriesData=dt;
  }
  SubSubCategoryForm=new FormGroup({
    categoryid:new FormControl(''),
    subcategoryid:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  })
  SubSubCategoryFormSubmit(r){
    console.log(r);
    this.ssCatService.creatSubSubCategory(r).subscribe(this.SubSubCategoryFormSubmitCB)
  }
  SubSubCategoryFormSubmitCB=(dt)=>{
    console.log(dt);
    if(dt._id){
      this.SubSubCategoryForm.reset();
    }
  }
  SubSubCategory;
  getSubSubCategoryList(i){
    this.SubSubCategory=i.getcategorySubcategory;
  }
}
