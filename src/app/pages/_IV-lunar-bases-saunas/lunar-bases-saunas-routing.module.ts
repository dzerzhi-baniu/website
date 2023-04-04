import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LunarBasesSaunasPage} from "./lunar-bases-saunas.page";


const routes: Routes = [
  {
    path: '',
    component: LunarBasesSaunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LunarBasesSaunasRoutingModule {
}
