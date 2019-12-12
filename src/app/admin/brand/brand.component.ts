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
  }
  BrandForm=new FormGroup({
    categoryid:new FormControl(''),
    subcategoryid:new FormControl(''),
    subsubcategoryid:new FormControl(''),
    name:new FormControl(''),
  })
  BrandFormSubmit(r){
    console.log(r)
  }
  getData(){
   this.brandService.getAll().subscribe(this.getDataCB)
  }
  CategoriesData;
  getDataCB=(dt)=>{
    console.log(dt);
    this.CategoriesData=dt;
  }
  SubSubCategory;
  getSubSubCategoryList(i){
    this.SubSubCategory=i.getcategorySubcategory;
  }
}
