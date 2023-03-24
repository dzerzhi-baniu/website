import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OurInstallationsPage} from './our-installations.page';


@NgModule({
  declarations: [
    OurInstallationsPage
  ],
  exports: [OurInstallationsPage],
  imports: [
    CommonModule
  ]
})
export class OurInstallationsModule {
}
