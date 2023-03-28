import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherProductsPage } from './other-products.page';
import {OtherProductsRoutingModule} from "./other-products-routing.module";



@NgModule({
  declarations: [
    OtherProductsPage
  ],
  exports: [OtherProductsPage],
  imports: [
    CommonModule,
    OtherProductsRoutingModule
  ]
})
export class OtherProductsModule { }
