import { Component } from "@angular/core";
import { NavController, ViewController, NavParams } from "ionic-angular";
import { VeterinaryPage } from "../veterinary/veterinary";
@Component({
  selector: "page-vet",
  templateUrl: "vet.html"
})
export class VetPage {
  vet = {
    name: "Veterinaria",
    color: "#FGBADD",
    address: "Cra. 14 #87-63",
    schedule: "",
    img: "./assets/imgs/pet-marker.png",
    description: "Veteriana test",
    phone_number: "555-55555",
    email: "doggo@doge.com",
    website: "http://itsdoge.com",
    rate: 5,
    distance: null,
    heading: null
  };
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.vet = this.navParams.get("vet");
  }
  ionViewDidLoad() {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openTab() {
    this.navCtrl.push(VeterinaryPage, { veterinary: this.vet }, { animation: "ios" });
    this.dismiss();
  }
}
