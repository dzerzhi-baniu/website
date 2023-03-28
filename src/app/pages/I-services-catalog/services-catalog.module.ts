import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCatalogPage } from './services-catalog.page';
import {ServicesCatalogRoutingModule} from "./services-catalog-routing.module";



@NgModule({
  declarations: [
    ServicesCatalogPage
  ],
  exports: [
    ServicesCatalogPage
  ],
  imports: [
    CommonModule,
    ServicesCatalogRoutingModule
  ]
})
export class ServicesCatalogModule { }
