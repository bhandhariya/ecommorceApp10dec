import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin.routing';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [AdminComponent, CategoryComponent, SubcategoryComponent, SubsubcategoryComponent, BrandComponent, ProductComponent],
  imports: [
    CommonModule,AdminRoutingModule
  ]
})
export class AdminModule { }
