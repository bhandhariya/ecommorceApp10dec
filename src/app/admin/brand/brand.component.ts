import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrandService } from "./brand.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(
    private brandService:BrandService
  ) { }

  ngOnInit() {
    this.getData();
    this.getBrandDaTA();
  }
  BrandForm=new FormGroup({
    categoryid:new FormControl(''),
    subcategoryid:new FormControl(''),
    subsubcategoryid:new FormControl(''),
    name:new FormControl(''),
  })
  BrandFormSubmit(r){
    console.log(r);
    this.brandService.createBrand(r).subscribe(this.BrandFormSubmitCB)
  }
  BrandFormSubmitCB=(dt)=>{
    console.log(dt);
    this.BrandForm.reset();
    this.getBrandDaTA();
  }
  getBrandDaTA(){
    this.brandService.getAllSubSUbCategory().subscribe(this.getBrandDaTACB)
  }
  Brand;
  getBrandDaTACB=(dt)=>{
this.Brand=dt;
console.log(this.Brand)
  }
  getData(){
   this.brandService.getAll().subscribe(this.getDataCB)
  }
  CategoriesData;
  getDataCB=(dt)=>{
    console.log(dt);
    this.CategoriesData=dt;
  }
  SubCategory;
  getSubCategoryList(i){
    console.log(i)
    this.SubCategory=i.getcategorySubcategory;
    console.log(this.SubCategory)
  }
  SubSubCategory;
  getSubSubCategory(j){
    this.SubSubCategory=j.getsubcategorysubsubcategory;
    console.log(this.SubSubCategory)
  }

}
