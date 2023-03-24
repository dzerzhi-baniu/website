import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LunarBasesSaunasPage} from './lunar-bases-saunas.page';


@NgModule({
  declarations: [
    LunarBasesSaunasPage
  ],
  exports: [LunarBasesSaunasPage],
  imports: [
    CommonModule
  ]
})
export class LunarBasesSaunasModule {
}
