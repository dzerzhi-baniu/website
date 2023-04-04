import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarrelSaunasPage} from './barrel-saunas.page';
import {BarrelSaunasRoutingModule} from "./barrel-saunas-routing.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    BarrelSaunasPage
  ],
  exports: [
    BarrelSaunasPage
  ],
    imports: [
        CommonModule,
        BarrelSaunasRoutingModule,
        ComponentsModule
    ]
})
export class BarrelSaunasModule {
}
