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
      name: "Urgencias",
      key: "urgencias",
      text: "Atención Clínica de Urgencia",
      img: "http://tolkien.consalud.cl/contents/controlada/img/chapitas-2012/urgencia.png"
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
  loc = null;
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

  getDistanceFromLatLon(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d * 1000; // distance in mts
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  bearing(lat1, lng1, lat2, lng2) {
    var _toRad = function(deg) {
      return deg * Math.PI / 180;
    };
    var _toDeg = function(rad) {
      return rad * 180 / Math.PI;
    };
    var dLon = lng2 - lng1;
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    var brng = _toDeg(Math.atan2(y, x));
    return 360 - (brng + 360) % 360;
  }
}
