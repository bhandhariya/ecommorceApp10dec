import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from "../category/category.service";
import { SubcategoryService } from "./subcategory.service";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private catService:CategoryService,
              private subCatService:SubcategoryService,
              private http:HttpClient
    ) { }

  ngOnInit() {
    this.getCategoryDetails();
    this.getAllSubCategoriesWithCategory();
  }
  getCategoryDetails(){
    this.catService.getAllCategories().subscribe(this.getCategoryDetailsCB)
  }
  CategoriesData;
  getCategoryDetailsCB=(dt)=>{
    console.log(dt)
    this.CategoriesData=dt;
  }

  SubCategoryForm=new FormGroup({
    categoryid:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  })
  SubCategoryFormSubmit(r){
    console.log(r);
    this.http.post('/api/subcategory/createSubCategory',r).subscribe(this.SubCategoryFormSubmitCB)
    // this.subCatService.createSubCategory(r);
  }
  SubCategoryFormSubmitCB=(dt)=>{
    alert('added')
    this.SubCategoryForm.reset();
    this.getAllSubCategoriesWithCategory();

  }
  getAllSubCategoriesWithCategory(){
    this.subCatService.getAllSubCategories().subscribe(this.getAllSubCategoriesWithCategoryCB)
  }
  SubCategories;
  getAllSubCategoriesWithCategoryCB=(dt)=>{
    this.SubCategories=dt;
    console.log(this.SubCategories)
  }
  a;
  editSubCategory(i){
    this.a=i._id;
    console.log(i)
    this.subCategoryEditForm.get('name').setValue(i.name);
    this.subCategoryEditForm.get('description').setValue(i.description);
    this.subCategoryEditForm.get('id').setValue(i._id);
    this.subCategoryEditForm.get('categoryid').setValue(i.categoryid);
  }
  subCategoryEditForm=new FormGroup({
    name:new FormControl(''),
    description:new FormControl(''),
    id:new FormControl(''),
    categoryid:new FormControl('')
  })
  subCategoryEditFormSubmit(r){
    this.a=""
    console.log(r);
    // this.subCatService.editCategorybyID(r)
    // this.http.post('http://localhost:3000/api/subcategory/editSubCategorybyID',r)
    
  }

 

}
