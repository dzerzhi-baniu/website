import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurInstallationsPage} from './our-installations.page';
import {OurInstallationsRoutingModule} from "./our-installations-routing.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    OurInstallationsPage
  ],
  exports: [OurInstallationsPage],
  imports: [
    CommonModule,
    ComponentsModule,
    OurInstallationsRoutingModule
  ]
})
export class OurInstallationsModule {
}
