import SoapBase from "../Base";
import {
  IGetCitiesResponse,
  IGetCitiesRequest,
  IGetCityRequest,
  IGetCityResponse,
  IGetDistrictRequest,
  IGetDistrictResponse,
  IGetNeighborhoodsRequest,
  IGetNeighborhoodsResponse
} from "../../Interfaces/ICityService";

class CityService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/CityService.wsdl";
  }

  public getCities(): Promise<[IGetCitiesResponse, string, any, string]> {
    const request: IGetCitiesRequest = {
      auth: this.getAuth(),
    };

    return this._.GetCitiesAsync(request);
  }

  public getCity(cityCode: string | number): Promise<[IGetCityResponse, string, any, string]> {
    const request: IGetCityRequest = {
      auth: this.getAuth(),
      cityCode: cityCode,
    };

    return this._.GetCityAsync(request);
  }

  public getDistrict(cityCode: string | number): Promise<[IGetDistrictResponse, string, any, string]> {
    const request: IGetDistrictRequest = {
      auth: this.getAuth(),
      cityCode: cityCode,
    };

    return this._.GetDistrictAsync(request);
  }

  public getNeighborhoods(districtId: string | number): Promise<[IGetNeighborhoodsResponse, string, any, string]> {
    const request: IGetNeighborhoodsRequest = {
      auth: this.getAuth(),
      districtId: districtId,
    };

    return this._.GetNeighborhoodsAsync(request);
  }
}

export default CityService;