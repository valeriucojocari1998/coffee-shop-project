import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent, WrapperComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
