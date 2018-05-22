import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { VeterinaryPage } from "../veterinary/veterinary";
@Component({
  selector: "page-vet-search",
  templateUrl: "vet-search.html"
})
export class VetSearchPage {
  vets: any = [];
  query = "";
  veterinarias = true;
  tiendas = true;
  medicina = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewctrl: ViewController, public api: ApiProvider) {}

  ionViewDidLoad() {
    this.filter();
  }

  dismiss() {
    this.viewctrl.dismiss();
  }

  filter() {
    var q = this.query.toLowerCase();
    this.vets = this.api.vets.filter((vet) => {
      if (this.byCategory(vet)) {
        return vet.name.toLowerCase().indexOf(q) > -1 || vet.description.toLowerCase().indexOf(q) > -1;
      }
    });

    console.log(this.vets);
  }

  byCategory(item) {
    if (this.veterinarias && item.categories.indexOf("consulta veterinaria") > -1) {
      return true;
    }
    if (this.tiendas && item.categories.indexOf("pet shop") > -1) {
      return true;
    }
    if (this.medicina && item.categories.indexOf("farmacia") > -1) {
      return true;
    }

    return false;
  }

  select(item) {
    this.navCtrl.push(VeterinaryPage, { veterinary: item }, { animation: "ios" });
  }
}
