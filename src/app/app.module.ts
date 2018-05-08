import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { VetPage } from "../pages/vet/vet";

@NgModule({
  declarations: [MyApp, HomePage, ListPage, VetPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), LeafletModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, VetPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
