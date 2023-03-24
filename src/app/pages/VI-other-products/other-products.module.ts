import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherProductsPage } from './other-products.page';



@NgModule({
  declarations: [
    OtherProductsPage
  ],
  exports: [OtherProductsPage],
  imports: [
    CommonModule
  ]
})
export class OtherProductsModule { }
