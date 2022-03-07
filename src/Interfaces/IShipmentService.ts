import { DeliveryFeeType, ShipmentMethod } from "../n11/Helpers/Utils";
import { IMainRequest, IMainResponse } from "./IUtils";

interface IGetShipmentTemplateListRequest extends IMainRequest {}

interface IShipmentCompany {
  name: string;
  shortName: string;
}

interface ICity {
  code: number;
  name: string;
}

interface IDeliverableCities {
  city: ICity[];
}

interface IDistrict {
  id: number;
  name: string;
}
interface IAddress {
  address: string;
  postalCode: string;
  title: string;
  city: ICity;
  district: IDistrict;
}

interface IShipmentCompanyies {
  shipmentCompany: IShipmentCompany[];
}

interface IShipmentTemplate {
  claimShipmentCompany: IShipmentCompany;
  combinedShipmentAllowed: boolean;
  deliverableCities: IDeliverableCities;
  deliveryFeeType: DeliveryFeeType;
  exchangeAddress: IAddress;
  shipmentCompanies: IShipmentCompanyies;
  shipmentMethod: ShipmentMethod;
  specialDelivery: boolean;
  templateName: string;
  warehouseAddress: IAddress;
}

interface IShipmentTemplates {
  shipmentTemplate: IShipmentTemplate[];
}

interface IGetShipmentTemplateListResponse extends IMainResponse {
  shipmentTemplates: IShipmentTemplates;
}

export { IGetShipmentTemplateListRequest, IGetShipmentTemplateListResponse };
