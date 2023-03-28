import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OurInstallationsPage} from "./our-installations.page";


const routes: Routes = [
  {
    path: '',
    component: OurInstallationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurInstallationsRoutingModule {
}
