import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './shared/components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: 'home',
    component: WrapperComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    component: WrapperComponent,
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  // has to be last one
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
