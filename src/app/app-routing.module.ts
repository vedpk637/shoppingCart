import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AllCategoriesComponent } from './modules/all-categories/all-categories.component';
import { BreadsComponent } from './modules/breads/breads.component';
import { DairyComponent } from './modules/dairy/dairy.component';
import { FruitsComponent } from './modules/fruits/fruits.component';
import { SeasoningComponent } from './modules/seasoning/seasoning.component';
import { VegitablesComponent } from './modules/vegitables/vegitables.component';
import { PurchaseComponent } from './modules/purchase/purchase.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';


const routes: Routes = [
  {path:'',component:DefaultComponent,
  children:[{
    path:'',component:AllCategoriesComponent
  },
  { path:'breads',component:BreadsComponent },
  { path:'dairy',component:DairyComponent },
  { path:'fruits',component:FruitsComponent },
  { path:'seasoning',component:SeasoningComponent },
  { path:'vegitables',component:VegitablesComponent },
  { path:'purchase',component:PurchaseComponent},
  { path:'checkout',component:CheckoutComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
