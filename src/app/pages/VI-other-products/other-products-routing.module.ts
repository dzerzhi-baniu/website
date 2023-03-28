import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OtherProductsPage} from "./other-products.page";


const routes: Routes = [
  {
    path: '',
    component: OtherProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherProductsRoutingModule {
}
