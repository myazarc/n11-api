import SoapBase from "../Base";
import { IOrderListRequest, IOrderListResponse } from "../../Interfaces/IOrderService";

class OrderService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/OrderService.wsdl";
  }

  public orderList(request: IOrderListRequest): Promise<[IOrderListResponse, string, any, string]> {
    request.auth = this.getAuth();

    return this._.StopSellingProductBySellerCodeAsync(request);
  }
}

export default OrderService;
