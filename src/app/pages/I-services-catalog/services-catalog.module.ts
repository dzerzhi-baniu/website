import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCatalogPage } from './services-catalog.page';



@NgModule({
  declarations: [
    ServicesCatalogPage
  ],
  exports: [
    ServicesCatalogPage
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesCatalogModule { }
