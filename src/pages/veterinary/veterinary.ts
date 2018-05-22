import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
@Component({
  selector: "page-veterinary",
  templateUrl: "veterinary.html"
})
export class VeterinaryPage {
  veterinary: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.veterinary = this.navParams.get("veterinary");
  }

  openMap() {
    window.open(
      `geo:${this.veterinary.latlng.lat},${this.veterinary.latlng.lng}?q=${this.veterinary.latlng.lat},${this.veterinary.latlng.lng}`,
      "_system"
    );
  }

  ionViewDidLoad() {}
}
