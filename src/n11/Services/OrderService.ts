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
  IOrderItemRejectResponse,
  IOrderItemRejectRequest,
  ISearchData,
} from "../../Interfaces/IOrderService";
import { RejectReasonType } from "../Helpers/Utils";
import { IPagingData } from "../../Interfaces/IUtils";

class OrderService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/OrderService.wsdl";
  }

  public orderList(searchData: ISearchData = null, paggingData: IPagingData = null): Promise<[IOrderListResponse, string, any, string]> {
    const request: IOrderListRequest = {
      auth: this.getAuth(),
    };
    if (searchData) {
      request.searchData = searchData;
    }

    if (paggingData) {
      request.pagingData = paggingData;
    }

    return this._.OrderListAsync(request);
  }

  public detailedOrderList(searchData: ISearchData = null, paggingData: IPagingData = null): Promise<[IDetailedOrderListResponse, string, any, string]> {
    const request: IDetailedOrderListRequest = {
      auth: this.getAuth(),
    };
    if (searchData) {
      request.searchData = searchData;
    }

    if (paggingData) {
      request.pagingData = paggingData;
    }
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

  public orderItemReject(id: string | number, rejectReasonType: RejectReasonType, rejectReason: string): Promise<[IOrderItemRejectResponse, string, any, string]> {
    const request: IOrderItemRejectRequest = {
      auth: this.getAuth(),
      orderItemList: {
        orderItem: {
          id,
        },
      },
      rejectReason,
      rejectReasonType,
    };

    return this._.OrderItemRejectAsync(request);
  }
}

export default OrderService;
