import SoapBase from "../Base";
import {
  IDetailedOrderListRequest,
  IDetailedOrderListResponse,
  IOrderListRequest,
  IOrderListResponse,
  IOrderDetailRequest,
  IOrderDetailResponse,
  IOrderItemAcceptResponse,
  IOrderItemAcceptRequest,
} from "../../Interfaces/IOrderService";

class OrderService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/OrderService.wsdl";
  }

  public orderList(request: IOrderListRequest): Promise<[IOrderListResponse, string, any, string]> {
    request.auth = this.getAuth();

    return this._.OrderListAsync(request);
  }

  public detailedOrderList(request: IDetailedOrderListRequest): Promise<[IDetailedOrderListResponse, string, any, string]> {
    request.auth = this.getAuth();

    return this._.DetailedOrderListAsync(request);
  }

  public orderDetail(id: string | number): Promise<[IOrderDetailResponse, string, any, string]> {
    const request: IOrderDetailRequest = {
      auth: this.getAuth(),
      orderRequest: {
        id,
      },
    };

    return this._.OrderDetailAsync(request);
  }

  public orderItemAccept(id: string | number, numberOfPackages: number | null): Promise<[IOrderItemAcceptResponse, string, any, string]> {
    const request: IOrderItemAcceptRequest = {
      auth: this.getAuth(),
      orderItem: {
        id,
      },
    };

    if (numberOfPackages) {
      request.numberOfPackages = numberOfPackages;
    }

    return this._.OrderItemAcceptAsync(request);
  }
}

export default OrderService;
