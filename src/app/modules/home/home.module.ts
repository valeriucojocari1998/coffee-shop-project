import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeBoardComponent } from './components/home-board/home-board.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeBoardComponent],
})
export class HomeModule {}
