import { IMainRequest, IMainResponse, } from './IUtils';

interface ICity {
  cityCode: string;
  cityName: string;
  cityId: number;
}

interface ICityList {
  city: ICity[];
}

interface IDistrict {
  name: string;
  id: number;
}

interface IDistrictList {
  district: IDistrict[];
}

interface INeighborhood {
  name: string;
  id: number;
}

interface INeighborhoodList {
  neighborhood: INeighborhood[];
}

interface IGetCitiesRequest extends IMainRequest {

}

interface IGetCitiesResponse extends IMainResponse {
  cityList: ICityList;
}

interface IGetCityRequest extends IMainRequest {
  cityCode: number | string;
}

interface IGetCityResponse extends IMainResponse {
  ICity: ICity;
}

interface IGetDistrictRequest extends IMainRequest {
  cityCode: number | string;
}

interface IGetDistrictResponse extends IMainResponse {
  districtList: IDistrictList;
}

interface IGetNeighborhoodsRequest extends IMainRequest {
  districtId: number | string;
}

interface IGetNeighborhoodsResponse extends IMainResponse {
  neighborhoodList: INeighborhoodList;
}

export { IGetCitiesRequest, IGetCitiesResponse, IGetCityRequest, IGetCityResponse, IGetDistrictRequest, IGetDistrictResponse, IGetNeighborhoodsRequest, IGetNeighborhoodsResponse };