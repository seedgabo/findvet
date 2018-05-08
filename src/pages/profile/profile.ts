import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  user = {};
  username = "";
  password = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
