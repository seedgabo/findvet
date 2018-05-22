import { Component } from "@angular/core";
import { NavController, PopoverController, ModalController } from "ionic-angular";
import { latLng, tileLayer, marker, divIcon, Marker, Map } from "leaflet";
import { VetPage } from "../vet/vet";

import { VetSearchPage } from "../vet-search/vet-search";
import { ApiProvider } from "../../providers/api/api";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  view = "list";
  options = {
    layers: [
      // tileLayer("https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}", {
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        minZoom: 3,
        attribution: "."
        // 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 10,
    center: latLng(4.7958225, -74.0925652)
  };
  layers = [];

  constructor(public navCtrl: NavController, public popover: PopoverController, public modal: ModalController, public api: ApiProvider) {}

  ionViewDidLoad() {
    setTimeout(() => {
      this.addVeterinaries();
    }, 1000);
  }

  onMapReady(map: Map) {
    map.locate({ setView: true, maxZoom: 11 });
  }

  addPanel(mark: Marker, vet) {
    this.options.center = mark.getLatLng();
    this.popover
      .create(
        VetPage,
        {
          vet: vet
        },
        {
          cssClass: "vet-panel"
        }
      )
      .present({ animate: true });
  }

  addVeterinaries() {
    this.api.vets.forEach((vet) => {
      var html = `
        <div>
          <img src="./assets/imgs/pet-marker.png">
          <h5>${vet.name}</h5>
        </div>
      `;
      var ico = divIcon({
        className: "vet-marker",
        html: html
      });
      var mark = marker([vet.latlng.lat, vet.latlng.lng], { icon: ico });
      mark.on("click", () => {
        this.addPanel(mark, vet);
      });
      this.layers.push(mark);
    });
  }

  modalSearch() {
    var modal = this.modal.create(VetSearchPage, {});
    modal.present();
    modal.onWillDismiss((data) => {
      if (data) {
      }
    });
  }

  toggle() {
    if (this.view == "map") {
      this.view = "list";
    } else {
      this.view = "map";
    }
  }

  selectCat(cat) {
    var filtered = this.api.vets.filter((vet) => {
      return vet.categories.indexOf(cat.key) > -1;
    });

    this.navCtrl.push("InCategoryPage", { category: cat, veterinaries: filtered }, { animation: "ios" });
  }
}
