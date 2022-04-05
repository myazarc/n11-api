import { ShipmentMethod, DeliveryFeeType } from "../n11/Helpers/Utils";
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

interface IShipmentCompany {
  id: string;
  name: string;
}
interface IShipmentInfo {
  shipmentCompany: IShipmentCompany;
  shipmentMethod: ShipmentMethod;
}

enum OrderItemStatus {
  PRODUCT = "1", //: Ürün Sipariş Kalemi
  SERVICE = "2", //: Servis Sipariş Kalemi
  GSM = "3", //: Gsm Sipariş Kalemi
  GEZI = "4", //: Gezi Sipariş Kalemi
}

interface IOrderItem {
  commission: number;
  dueAmount: number;
  id: number;
  installmentChargeWithVAT: number;
  mallDiscount: number;
  price: number;
  productId: string;
  productName: string;
  productSellerCode: string;
  quantity: number;
  sellerCouponDiscount: number;
  sellerDiscount: number;
  sellerInvoiceAmount: number;
  shipmentInfo: IShipmentInfo;
  shipmentDate: string;
  status: OrderItemStatus;
  totalMallDiscountPrice: number;
  version: string;
}
interface IOrderItemList {
  orderItem: IOrderItem[];
}

interface IOrder {
  citizenshipId: string;
  createDate: string;
  id: number;
  orderNumber: string;
  status: OrderStatus;

  totalAmount?: number;
  totalDiscountAmount?: number;
  orderItemList?: IOrderItemList;
  deliveryFeeType?: DeliveryFeeType;
  paymentType?: PaymentType;
}

interface IOrderList {
  order: IOrder[];
}

//#region OrderList
interface IOrderListRequest extends IMainRequest {
  searchData?: ISearchData;
  pagingData?: IPagingData;
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

//#region DetailedOrderList
interface IDetailedOrderListRequest extends IMainRequest {
  searchData?: ISearchData;
  pagingData?: IPagingData;
}

interface IDetailedOrderListResponse extends IMainResponse {
  paymentType: PaymentType;
  orderList: IOrderList;
  pagingData?: IPagingData;
  deliveryFeeType?: DeliveryFeeType;
}

//#endregion

export { IOrderListRequest, IOrderListResponse, IDetailedOrderListRequest, IDetailedOrderListResponse };
