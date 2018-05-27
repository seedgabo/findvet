import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";
import { ApiProvider } from "../providers/api/api";

import { Geolocation } from "@ionic-native/geolocation";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any; icon: string }>;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public api: ApiProvider,
    public geo: Geolocation
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Veterinarias", component: HomePage, icon: "home" },
      { title: "Perfil", component: ProfilePage, icon: "paw" },
      { title: "Acerca", component: "AboutPage", icon: "help" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.geo
        .getCurrentPosition()
        .then((loc) => {
          console.log(loc);
          this.api.loc = loc;
          this.api.vets.forEach((vet: any) => {
            vet.distance = this.api.getDistanceFromLatLon(loc.coords.latitude, loc.coords.longitude, vet.latlng.lat, vet.latlng.lng);
            vet.heading = this.api.bearing(loc.coords.latitude, loc.coords.longitude, vet.latlng.lat, vet.latlng.lng);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
