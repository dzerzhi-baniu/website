import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'services-catalog',
    loadChildren: () => import('./pages/I-services-catalog/services-catalog.module')
      .then(m => m.ServicesCatalogModule)
  },
  {
    path: 'barrel-saunas',
    loadChildren: () => import('./pages/II-barrel-saunas/barrel-saunas.module')
      .then(m => m.BarrelSaunasModule),
  },
  {
    path: 'frame-type-saunas',
    loadChildren: () => import('./pages/III-frame-type-saunas/frame-type-saunas.module')
      .then(m => m.FrameTypeSaunasModule),
  },
  // {
  //   path: 'lunar-bases-saunas',
  //   loadChildren: () => import('./pages/IV-lunar-bases-saunas/lunar-bases-saunas.module')
  //     .then(m => m.LunarBasesSaunasModule),
  // },
  {
    path: 'fonts',
    loadChildren: () => import('./pages/V-fonts/fonts.module')
      .then(m => m.FontsModule),
  },
  {
    path: 'other-products',
    loadChildren: () => import('./pages/VI-other-products/other-products.module')
      .then(m => m.OtherProductsModule),
  },
  {
    path: 'our-installations',
    loadChildren: () => import('./pages/VII-our-installations/our-installations.module')
      .then(m => m.OurInstallationsModule),
  },
  {path: '', redirectTo: 'services-catalog', pathMatch: 'full'},
  {path: '**', redirectTo: 'services-catalog'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
