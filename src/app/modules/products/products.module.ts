import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsBoardComponent } from './components/products-board/products-board.component';
import { CoffeeBeansComponent } from './components/coffee-beans/coffee-beans.component';

@NgModule({
  declarations: [ProductsBoardComponent, CoffeeBeansComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
