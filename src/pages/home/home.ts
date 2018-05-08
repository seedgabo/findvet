import { Component } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular";
import { latLng, tileLayer, circle, polygon, marker, icon, divIcon } from "leaflet";
import { VetPage } from "../vet/vet";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  options = {
    layers: [
      tileLayer("https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}", {
        maxZoom: 18,
        attribution:
          'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 10,
    center: latLng(4.7958225, -74.0925652)
  };
  layers = [];
  constructor(public navCtrl: NavController, public popover: PopoverController) {}

  ionViewDidLoad() {
    setTimeout(() => {
      this.addMarker();
    }, 1000);
  }

  addPanel() {
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

  addMarker() {
    var html = `
      <div>
        <img src="./assets/imgs/pet-marker.png">
      </div>
    `;
    var ico = divIcon({
      className: "vet-marker",
      html: html
    });
    var mark = marker([4.7958225 + Math.random() / 5, -74.0925652 + Math.random() / 5], { icon: ico });
    mark.on("click", () => {
      this.addPanel();
    });
    this.layers.push(mark);
  }
}
