import SoapBase from "../Base";

class CityService extends SoapBase {
  public async getCities() {
    return await this._.GetCitiesAsync();
  }
}
