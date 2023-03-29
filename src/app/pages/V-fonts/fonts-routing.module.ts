import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FontsPage} from "./fonts.page";


const routes: Routes = [
  {
    path: '',
    component: FontsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontsRoutingModule {
}
