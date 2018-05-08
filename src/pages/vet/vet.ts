import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
@Component({
  selector: "page-vet",
  templateUrl: "vet.html"
})
export class VetPage {
  vet = {
    name: "Veterinaria",
    img: "./assets/imgs/pet-marker.png",
    description: "Veteriana test"
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ionViewDidLoad() {}
}
