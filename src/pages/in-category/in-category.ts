import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { VeterinaryPage } from "../veterinary/veterinary";
import { ApiProvider } from "../../providers/api/api";
import { HomePage } from "../home/home";
@IonicPage({
  segment: "category/{category}"
})
@Component({
  selector: "page-in-category",
  templateUrl: "in-category.html"
})
export class InCategoryPage {
  veterinaries = [];
  category = { name: "" };
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    if (this.navParams.data.veterinaries) this.veterinaries = this.navParams.get("veterinaries");
    if (this.navParams.data.category) {
      this.category = this.navParams.get("category");
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewDidLoad() {}

  openTab(vet) {
    this.navCtrl.push(VeterinaryPage, { veterinary: vet }, { animation: "ios" });
  }
}
