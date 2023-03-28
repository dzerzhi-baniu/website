import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarrelSaunasPage} from "./barrel-saunas.page";


const routes: Routes = [
  {
    path: '',
    component: BarrelSaunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarrelSaunasRoutingModule {
}
