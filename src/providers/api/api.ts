import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import veterinaries from "../../vets";
import { Storage } from "@ionic/storage";
@Injectable()
export class ApiProvider {
  vets = veterinaries;
  categories = [];
  services = [];
  _categories = [
    {
      name: "Pet Shop",
      key: "pet shop",
      text: "Tiendas y mas",
      img: "https://www.colourbox.com/preview/8016039-shop-flat-icon.jpg"
    },
    {
      name: "Consulta Veterinaria",
      key: "consulta veterinaria",
      text: "Consulta General y servicios medicos",
      img:
        "https://thumbs.dreamstime.com/b/bot%C3%B3n-en-l%C3%ADnea-de-la-consulta-del-trabajador-medicina-m%C3%A9dico-icon-clinics-hospital-99190493.jpg"
    },
    {
      name: "Peluquería",
      key: "peluqueria",
      text: "Cortes y secados",
      img: "https://png.pngtree.com/element_origin_min_pic/16/08/26/2057c037c7f1b87.jpg"
    },
    {
      name: "Guardería",
      key: "guarderia",
      text: "Cuidado de primera",
      img: "http://www.sallypetschool.com/wp-content/uploads/2016/11/ico-hotel.png"
    },
    {
      name: "Farmacia",
      key: "farmacia",
      text: "Ventas de medicinas",
      img:
        "https://st3.depositphotos.com/4177785/18492/v/1600/depositphotos_184929210-stock-illustration-pet-medicine-color-icon-veterinary.jpg"
    },
    {
      name: "Hotel",
      key: "hotel",
      text: "Viaja tranquilo",
      img: "http://www.petstyle.com.mx/wp-content/uploads/2017/05/icon_pet-04.png"
    },
    {
      name: "Colegio",
      key: "colegio",
      text: "Entrena tu mascota",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDv76KVEKAOCZK0SARK9mIHjLHxMkS0kfTRd4etHn2aoj7Dlc"
    }
  ];
  user = null;
  constructor(public http: HttpClient, public storage: Storage) {
    this.prepareFilters();
    this.storage.get("user").then((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  prepareFilters() {
    var onlyUnique = function(value, index, self) {
      return self.indexOf(value) === index;
    };
    var categories = [];
    var services = [];
    this.vets.forEach((vet) => {
      categories = categories.concat(vet.categories);
      services = services.concat(vet.services);
    });

    this.categories = categories.filter(onlyUnique);
    this.services = services.filter(onlyUnique);
  }
}
