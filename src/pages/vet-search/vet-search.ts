import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";

/**
 * Generated class for the VetSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-vet-search",
  templateUrl: "vet-search.html"
})
export class VetSearchPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewctrl: ViewController) {}

  ionViewDidLoad() {}

  dismiss() {
    this.viewctrl.dismiss();
  }
}
