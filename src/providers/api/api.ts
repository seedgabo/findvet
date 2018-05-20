import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import veterinaries from "../../vets";
@Injectable()
export class ApiProvider {
  vets = veterinaries;
  categories = [];
  services = [];
  constructor(public http: HttpClient) {
    this.prepareFilters();
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
