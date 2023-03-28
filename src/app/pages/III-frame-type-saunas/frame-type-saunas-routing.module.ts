import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrameTypeSaunasPage} from "./frame-type-saunas.page";


const routes: Routes = [
  {
    path: '',
    component: FrameTypeSaunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameTypeSaunasRoutingModule {
}
