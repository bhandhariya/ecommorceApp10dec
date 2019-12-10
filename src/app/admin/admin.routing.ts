
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { CategoryComponent } from './category/category.component';



const routes: Routes = [
    {
      path : '', component: AdminComponent, children : [
        {path:'cat',component:CategoryComponent},
        {path:'sc',component:SubcategoryComponent},
        {path:'ssc',component:SubsubcategoryComponent},
        {path:'brand',component:BrandComponent},
        {path:'product',component:ProductComponent},
        // {path:'history',component:HistoryComponent},
        // {path:'money',component:MoneyComponent},
        // {path:'movie',component:MovieComponent},
        // {path:'music',component:MusicComponent},
        // {path:'fashion',component:FashionComponent},
        // {path:'political',component:PoliticalComponent},
        // {path:'religion',component:ReligionComponent},
        // {path:'science',component:ScienceComponent},
        // {path:'travel',component:TravelComponent},
        // {path:'sport',component:SportComponent},
        
           
      ]
    }  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }