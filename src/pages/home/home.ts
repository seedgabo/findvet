import { Component } from "@angular/core";
import { NavController, PopoverController, ModalController } from "ionic-angular";
import { latLng, tileLayer, marker, divIcon, Marker } from "leaflet";
import { VetPage } from "../vet/vet";
import veterinaries from "../../vets";
import { VetSearchPage } from "../vet-search/vet-search";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  view = "map";
  options = {
    layers: [
      tileLayer("https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}", {
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
  vets = veterinaries;
  constructor(public navCtrl: NavController, public popover: PopoverController, public modal: ModalController) {}

  ionViewDidLoad() {
    setTimeout(() => {
      this.addVeterinaries();
    }, 1000);
  }

  addPanel(mark: Marker, vet) {
    this.options.center = mark.getLatLng();
    this.popover
      .create(
        VetPage,
        {},
        {
          cssClass: "vet-panel"
        }
      )
      .present({ animate: true });
  }

  addVeterinaries() {
    this.vets.forEach((vet) => {
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
      var mark = marker([4.7958225 + Math.random() / 5, -74.0925652 + Math.random() / 5], { icon: ico });
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
}
