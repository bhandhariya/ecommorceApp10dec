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
    this.getAllSubSUbCategory();
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
      this.getAllSubSUbCategory();
    }
  }
  SubSubCategory;
  getSubSubCategoryList(i){
    this.SubSubCategory=i.getcategorySubcategory;
  }
  getAllSubSUbCategory(){
    this.ssCatService.getAllSubSUbCategory().subscribe(this.getAllSubSUbCategoryCB)
  }
  SubSubCategories;
  getAllSubSUbCategoryCB=(dt)=>{
    this.SubSubCategories=dt;
    console.log(this.SubSubCategories)
  }
  a="";
  editsubsubCategory(c){
    console.log(c)
    this.a=c._id;
    this.subSubCategoryEditForm.get('id').setValue(c._id);
    this.subSubCategoryEditForm.get('categoryid').setValue(c.categoryid);
    this.subSubCategoryEditForm.get('subcategoryid').setValue(c.subcategoryid);
    this.subSubCategoryEditForm.get('name').setValue(c.name);
    this.subSubCategoryEditForm.get('description').setValue(c.description);
  }
  deleteSubSubCategory(id){
    console.log(id)
  }
  cancleEditCategory(){
    this.a="";
  }
  subSubCategoryEditForm=new FormGroup({
    id:new FormControl(''),
    categoryid:new FormControl(''),
    subcategoryid:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  });
  subSubCategoryEditFormSubmit(r){
    console.log(r);
    this.ssCatService.editbyID(r).subscribe(this.subSubCategoryEditFormSubmitCB)
  }
  subSubCategoryEditFormSubmitCB=(dt)=>{
    console.log(dt);
    this.a="";
    this.getAllSubSUbCategory();
  }
}
