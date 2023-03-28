import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LunarBasesSaunasPage} from './lunar-bases-saunas.page';
import {LunarBasesSaunasRoutingModule} from "./lunar-bases-saunas-routing.module";


@NgModule({
  declarations: [
    LunarBasesSaunasPage
  ],
  exports: [LunarBasesSaunasPage],
  imports: [
    CommonModule,
    LunarBasesSaunasRoutingModule
  ]
})
export class LunarBasesSaunasModule {
}
