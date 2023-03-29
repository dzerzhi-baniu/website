import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontsPage} from './fonts.page';
import {FontsRoutingModule} from "./fonts-routing.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    FontsPage
  ],
  exports: [FontsPage],
  imports: [
    CommonModule,
    FontsRoutingModule,
    ComponentsModule
  ]
})
export class FontsModule {
}
