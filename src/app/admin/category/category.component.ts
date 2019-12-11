import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  editCategory(i){
    console.log(i)
  }

}
