import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaptisteriesPage} from "./baptisteries.page";


const routes: Routes = [
  {
    path: '',
    component: BaptisteriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaptisteriesRoutingModule {
}
