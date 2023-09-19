import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ContentComponent } from '../components/content/content.component';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent, ContentComponent, HomeComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [HomeComponent],
})
export class HomeModule {}
