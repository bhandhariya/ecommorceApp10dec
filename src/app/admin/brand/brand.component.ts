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
  a="";
  editBrand(b){
   console.log(b);
   this.a=b._id;
   this.brandEditForm.get('id').setValue(b._id);
   this.brandEditForm.get('categoryid').setValue(b.categoryid);
   this.brandEditForm.get('subcategoryid').setValue(b.subcategoryid);
   this.brandEditForm.get('subsubcategoryid').setValue(b.subsubcategoryid);
   this.brandEditForm.get('name').setValue(b.name);
  }
  deleteBrand(id){
    var obj={
      id:id
    }
    this.brandService.deletebyid(obj).subscribe(this.brandEditFormSubmitCB)
  }
  cancleEditBrand(){
    this.a=""
  }
  brandEditForm=new FormGroup({
    id:new FormControl(''),
    categoryid:new FormControl(''),
    subcategoryid:new FormControl(''),
    subsubcategoryid:new FormControl(''),
    name:new FormControl('')
  });
  brandEditFormSubmit(r){
    this.brandService.editbyid(r).subscribe(this.brandEditFormSubmitCB)
  }
  brandEditFormSubmitCB=(dt)=>{
    this.a="";
    this.getBrandDaTA();
  }
  

}
