import SoapBase from "../Base";
import { IGetShipmentTemplateListRequest, IGetShipmentTemplateListResponse } from "../../Interfaces/IShipmentService";

class ShipmentService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/ShipmentService.wsdl";
  }

  public async getShipmentTemplateList(): Promise<[IGetShipmentTemplateListResponse, string, any, string]> {
    const request: IGetShipmentTemplateListRequest = {
      auth: this.getAuth(),
    };
    return await this._.GetShipmentTemplateListAsync(request);
  }
}

export default ShipmentService;
