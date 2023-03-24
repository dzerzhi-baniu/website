import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO(DK): Implement me
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: AboutComponent },
  // { path: 'tetris', component: TetrisComponent },
  // { path: 'nine-stars', component: NineStarsComponent },
  // { path: 'cardmatching', component: CardmatchingComponent },
  // { path: 'color-lines', component: ColorLinesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
