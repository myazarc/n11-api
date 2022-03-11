import SoapBase from "../Base";

class CityService extends SoapBase {
  public getCities() {
    return this._.GetCitiesAsync();
  }
}
