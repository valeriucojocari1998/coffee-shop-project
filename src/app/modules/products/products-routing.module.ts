import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeBeansComponent } from './components/coffee-beans/coffee-beans.component';
import { ProductsBoardComponent } from './components/products-board/products-board.component';

const routes: Routes = [
  {
    path: 'board',
    component: ProductsBoardComponent,
  },
  {
    path: 'beans',
    component: CoffeeBeansComponent,
  },
  {
    path: '**',
    redirectTo: 'board',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
