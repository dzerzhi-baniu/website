import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LunarBasesSaunasPage} from './lunar-bases-saunas.page';
import {LunarBasesSaunasRoutingModule} from "./lunar-bases-saunas-routing.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    LunarBasesSaunasPage
  ],
  exports: [LunarBasesSaunasPage],
  imports: [
    CommonModule,
    LunarBasesSaunasRoutingModule,
    ComponentsModule
  ]
})
export class LunarBasesSaunasModule {
}
