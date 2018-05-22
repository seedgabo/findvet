import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";

@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  username = "";
  password = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public alert: AlertController) {}

  login() {
    this.api.user = {
      username: this.username,
      name: this.username,
      pets: []
    };
    this.api.storage.set("user", this.api.user);
  }

  register() {
    this.login();
  }
  canLogin() {
    return this.username.length > 4 && this.password.length > 5;
  }

  logout() {
    this.api.user = null;
    this.api.storage.set("user", null);
  }

  addPet() {
    this.alert
      .create({
        title: "Agregar Mascota",
        inputs: [
          {
            name: "name",
            placeholder: "Nombre"
          },
          {
            name: "specie",
            placeholder: "Especie"
          },
          {
            name: "breed",
            placeholder: "Raza"
          }
        ],
        buttons: [
          {
            text: "Agregar",
            handler: (data) => {
              if (data.name && data.specie) {
                this.api.user.pets.push(data);
                this.api.storage.set("user", this.api.user);
              }
            }
          },
          "Cancelar"
        ]
      })
      .present();
  }

  removePet(pet, i) {
    this.api.user.pets.splice(i, 1);
    this.api.storage.set("user", this.api.user);
  }
}
