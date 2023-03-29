import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrameTypeSaunasPage} from './frame-type-saunas.page';
import {FrameTypeSaunasRoutingModule} from "./frame-type-saunas-routing.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    FrameTypeSaunasPage
  ],
  exports: [FrameTypeSaunasPage],
    imports: [
        CommonModule,
        FrameTypeSaunasRoutingModule,
        ComponentsModule
    ]
})
export class FrameTypeSaunasModule {
}
