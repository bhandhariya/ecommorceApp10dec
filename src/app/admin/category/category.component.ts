import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAllCategories();
  }

  CategoryForm=new FormGroup({
    name:new FormControl(''),
    description:new FormControl('')
  })
  CategoryFormSubmit(r){
    console.log(r);
    this.http.post('/api/category/create',r).subscribe(this.CategoryFormSubmitCB)
  }
  CategoryFormSubmitCB=(dt)=>{
    console.log(dt);
    this.CategoryForm.reset();
    this.getAllCategories();
    
    
  }
  getAllCategories(){
    this.http.get('/api/category/getAllCategories').subscribe(this.getAllCategoriesCB)
  }
  Categories;
  getAllCategoriesCB=(dt)=>{
    console.log(dt);
    this.Categories=dt;
  }
  a;
  editCategory(i){
    this.a=i._id;
    this.categoryEditForm.get('id').setValue(i._id);
    this.categoryEditForm.get('name').setValue(i.name);
    this.categoryEditForm.get('description').setValue(i.description);
    this.categoryEditForm.get('description').setValue(i.description);
  }
  cancleEditCategory(){
    this.a=""
  }
  categoryEditForm=new FormGroup({
    name:new FormControl(''),
    description:new FormControl(''),
    date:new FormControl(Date.now()),
    id:new FormControl('')
  })
  categoryEditFormSubmit(r){
    this.a="";
    console.log(r);
    this.http.post('/api/category/editCategorybyID',r).subscribe(this.categoryEditFormSubmitCB)
  }
  categoryEditFormSubmitCB=(dt)=>{
    console.log(dt);
    this.getAllCategories();
  }
  deleteCategory(i){
    var obj={
      id:i
    }
    this.http.post('/api/category/deleteCategorybyID',obj).subscribe(this.categoryEditFormSubmitCB)
  }

}
