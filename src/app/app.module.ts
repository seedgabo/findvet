import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { VetPage } from "../pages/vet/vet";
import { VetSearchPage } from "../pages/vet-search/vet-search";
import { VeterinaryPage } from "../pages/veterinary/veterinary";
import { ApiProvider } from "../providers/api/api";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [MyApp, HomePage, ProfilePage, VetPage, VeterinaryPage, VetSearchPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp), LeafletModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ProfilePage, VetPage, VeterinaryPage, VetSearchPage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }, ApiProvider]
})
export class AppModule {}
