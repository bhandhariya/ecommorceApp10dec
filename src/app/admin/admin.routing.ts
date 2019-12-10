
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
    {
      path : '', component: AdminComponent, children : [
        // {path: 'programming',
        // component:ProgrammingComponent
        // },
        // {path: 'dark',
        // component:DarkComponent
        // },
        // {path:'celebrity',component:CelebrityComponent},
        // {path:'dev',component:DevComponent},
        // {path:'explicit',component:ExplicitComponent},
        // {path:'fashion',component:FashionComponent},
        // {path:'food',component:FoodComponent},
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