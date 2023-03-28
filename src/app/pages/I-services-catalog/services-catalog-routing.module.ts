import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServicesCatalogPage} from "./services-catalog.page";


const routes: Routes = [
  {
    path: '',
    component: ServicesCatalogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesCatalogRoutingModule {
}
