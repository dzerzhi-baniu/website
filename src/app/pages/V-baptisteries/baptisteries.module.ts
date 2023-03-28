import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaptisteriesPage} from './baptisteries.page';
import {BaptisteriesRoutingModule} from "./baptisteries-routing.module";


@NgModule({
  declarations: [
    BaptisteriesPage
  ],
  exports: [
    BaptisteriesPage
  ],
  imports: [
    CommonModule,
    BaptisteriesRoutingModule
  ]
})
export class BaptisteriesModule {
}
