import { ShipmentMethod, DeliveryFeeType, RejectReasonType } from "../n11/Helpers/Utils";
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
  shortName?: string;
}

enum CampaignNumberStatus {
  USED = "1",
  UNUSED = "2",
}

interface IShipmentInfo {
  shipmentCompany: IShipmentCompany;
  shipmentMethod: ShipmentMethod;

  campaignNumberStatus?: CampaignNumberStatus;
  shipmentCode?: string;
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
interface ServiceItem {
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
  orderItemList?: ServiceItem;
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
  orderList: IOrderList;
  pagingData?: IPagingData;
}

//#endregion

//#region DetailedOrderList
interface IDetailedOrderListRequest extends IMainRequest {
  searchData?: ISearchData;
  pagingData?: IPagingData;
}

interface IDetailedOrderListResponse extends IMainResponse {
  orderList: IOrderList;
  pagingData?: IPagingData;
  deliveryFeeType?: DeliveryFeeType;
}

//#endregion

//#region OrderDetail
interface IOrderRequest {
  id: string | number;
}
interface IOrderDetailRequest extends IMainRequest {
  orderRequest: IOrderRequest;
}

interface IBillingAddress {
  address: string;
  city: string;
  district: string;
  fullName: string;
  gsm: string;
  neighborhood: string;
  postalCode: string;
  taxId: string;
  taxOffice: string;
  tcId: string;
}

interface IBillingTemplate {
  dueAmount: number;
  installmentChargeWithVat: number;
  originalPrice: number;
  sellerInvoiceAmount: number;
  totalMallDiscountPrice: number;
  totalSellerDiscount: number;
  totalServiceItemOriginalPrice: number;
}

interface IBuyer {
  fullName: string;
  id: string | number;
  taxId: string;
  taxOffice: string;
  tcId: string;
  email: string;
}

enum InvoiceType {
  PRIVATE = "1",
  CORPORATE = "2",
}

interface IAttribute {
  name: string;
  value: string;
}

interface IAtttibutes {
  attribute: IAttribute[];
}

interface IServiceItemOrderItemList {
  id: string | number;
}

interface IServiceItem {
  intallmentChargeWithVAT: number;
  orderItemList: IServiceItemOrderItemList;
  orderItemType: OrderItemStatus;
  price: number;
  quantity: number;
  sellerInvoiceAmount: number;
  totalDiscountPrice: number;
}

interface IItem {
  approveDate: string;
  attributes: IAtttibutes;
  commission: number;
  customTextOptionsValues: string;
  sellerInvoiceAmount: number;
  deliveryFeeType: DeliveryFeeType;
  dueAmount: number;
  id: string | number;
  installmentChargeWithVAT: number;
  mallDiscount: number;
  price: number;
  productName: string;
  productSellerCode: string;
  quantity: number;
  sellerCouponDiscount: number;
  sellerDiscount: number;
  shipmentInfo: IShipmentInfo;
  shipmentDate: string;
  status: OrderItemStatus;
  totalMallDiscountPrice: number;
  version: string;
  serviceItem: IServiceItem;
}

interface IItemList {
  item: IItem[];
}

interface IShippingAddress {
  address: string;
  city: string;
  district: string;
  fullName: string;
  gsm: string;
  neighborhood: string;
  postalCode: string | number;
}

interface IOrderDetail {
  citizenshipId: string;
  createDate: string;
  id: string | number;
  orderNumber: string;
  billingAddress: IBillingAddress;
  billingTemplate: IBillingTemplate;
  buyer: IBuyer;
  invoiceType: InvoiceType;
  itemList: IItemList;
  shippingAddress: IShippingAddress;
}
interface IOrderDetailResponse extends IMainResponse {
  paymentType: PaymentType;
  orderDetail: IOrderDetail;
}

//#endregion

//#region OrderItemAccept

interface IServiceOrderItem {
  id: string | number;
}

interface IOrderItemAcceptRequest extends IMainRequest {
  orderItem: IServiceOrderItem;
  numberOfPackages?: number | null;
}

interface IOrderItemList {
  orderItem: IOrderItem;
}

interface IOrderItemAcceptResponse extends IMainResponse {
  orderItemList: IOrderItemList;
}

//#endregion

interface IServiceOrderItemList {
  orderItem: IServiceOrderItem;
}

interface IOrderItemRejectRequest extends IMainRequest {
  orderItemList: IServiceOrderItemList;
  rejectReason: string;
  rejectReasonType: RejectReasonType;
}

interface IOrderItemList {
  orderItem: IOrderItem;
}

interface IOrderItemRejectResponse extends IMainResponse {
  orderItemList: IOrderItemList;
}

//#endregion

export {
  IOrderListRequest,
  IOrderListResponse,
  IDetailedOrderListRequest,
  IDetailedOrderListResponse,
  IOrderDetailRequest,
  IOrderDetailResponse,
  IOrderItemAcceptRequest,
  IOrderItemAcceptResponse,
  IOrderItemRejectRequest,
  IOrderItemRejectResponse,
  ISearchData,
};
