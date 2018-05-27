import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { InCategoryPage } from "./in-category";
import { OrderModule, OrderPipe } from "ngx-order-pipe";

@NgModule({
  declarations: [InCategoryPage],
  imports: [IonicPageModule.forChild(InCategoryPage), OrderModule]
})
export class InCategoryPageModule {}
