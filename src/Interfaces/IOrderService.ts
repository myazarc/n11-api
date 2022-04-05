import { IMainRequest, IMainResponse, IPagingData } from "./IUtils";

enum OrderStatus {
  NEW = "New",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  SHIPPED = "Shipped",
  DELIVERED = "Delivered",
  COMPLETED = "Completed",
  CLAIMED = "Claimed",
  LATE_SHIPMENT = "LATE_SHIPMENT",
}

interface IPeriod {
  startDate: string;
  endDate: string;
}

interface ISearchData {
  productId?: string;
  status?: OrderStatus;
  buyerName?: string;
  orderNumber?: number;
  productSellerCode?: string;
  recipient?: string;
  period?: IPeriod;
  sortForUpdateDate?: boolean;
}

interface IOrderList {}

//#region OrderList
interface IOrderListRequest extends IMainRequest {
  searchData?: ISearchData;
  pagingData?: IPagingData;
}

interface IOrder {
  citizenshipId: string;
  createDate: string;
  id: number;
  orderNumber: string;
  status: OrderStatus;
}

interface IOrderList {
  order: IOrder[];
}

enum PaymentType {
  CREDIT_CART = "1",
  BKMEXPRESS = "2",
  AKBANKDIREKT = "3",
  PAYPAL = "4",
  MALLPOINT = "5",
  GARANTIPAY = "6",
  GARANTILOAN = "7",
  MASTERPASS = "8",
  ISBANKPAY = "9",
  PAYCELL = "10",
  COMPAY = "11",
  YKBPAY = "12",
  FIBABANK = "13",
  OTHER = "14",
}

interface IOrderListResponse extends IMainResponse {
  paymentType: PaymentType;
  orderList: IOrderList;
}

//#endregion

export { IOrderListRequest, IOrderListResponse };
