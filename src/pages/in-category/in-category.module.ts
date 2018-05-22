import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InCategoryPage } from './in-category';

@NgModule({
  declarations: [
    InCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(InCategoryPage),
  ],
})
export class InCategoryPageModule {}
