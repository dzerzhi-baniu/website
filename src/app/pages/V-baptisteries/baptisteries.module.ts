import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaptisteriesPage } from './baptisteries.page';



@NgModule({
  declarations: [
    BaptisteriesPage
  ],
  exports: [
    BaptisteriesPage
  ],
  imports: [
    CommonModule
  ]
})
export class BaptisteriesModule { }
