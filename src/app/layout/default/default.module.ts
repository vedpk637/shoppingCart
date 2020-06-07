import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from 'src/app/modules/all-categories/all-categories.component';
import { BreadsComponent } from 'src/app/modules/breads/breads.component';
import { DairyComponent } from 'src/app/modules/dairy/dairy.component';
import { FruitsComponent } from 'src/app/modules/fruits/fruits.component';
import { SeasoningComponent } from 'src/app/modules/seasoning/seasoning.component';
import { VegitablesComponent } from 'src/app/modules/vegitables/vegitables.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from 'src/app/shared/product.module';
import { PurchaseComponent } from 'src/app/modules/purchase/purchase.component';
import { CheckoutComponent } from 'src/app/modules/checkout/checkout.component';
import { DashboardComponent } from 'src/app/modules/dailog/dailog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllCategoriesComponent,
    BreadsComponent,
    DairyComponent,
    FruitsComponent,
    SeasoningComponent,
    VegitablesComponent,
    DefaultComponent,
    PurchaseComponent,
    CheckoutComponent,
    DashboardComponent
  ],
  entryComponents:[DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class DefaultModule { }
