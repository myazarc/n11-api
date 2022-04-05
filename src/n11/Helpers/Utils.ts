enum ResultStatus {
  SUCCESS = "success",
  FAILURE = "failure",
}

enum ProductCondition {
  NEW = 1,
  SECONDHANG = 2,
}

enum ProductDiscountType {
  AMOUNT = 1,
  RATE = 2,
  PRICE = 3,
}

enum CurrencyType {
  TL = "TL",
  USD = "USD",
  EUR = "EUR",
}

enum SaleStatus {
  BEFORE_SALE = 1,
  ON_SALE = 2,
  OUT_OF_STOCK = 3,
  SALE_CLOSED = 4,
}
enum ApprovalStatus {
  ACTIVE = 1,
  WAIT = 2,
  PROHIBITED = 3,
  OUT_OF_LIST = 4,
  PENDING_APPROVAL = 5,
  REJECTED = 6,
}

enum DeliveryFeeType {
  N11_PAYS = 1,
  BUYER_PAYS = 2,
  STORE_PAYS = 3,
  CONDITIONAL_DELIVERY_BUYER_PAYS = 4,
  CONDITIONAL_DELIVERY_VENDOR_PAYS = 5,
}

enum ShipmentMethod {
  CARGO = 1,
  OTHER = 2,
}

enum RejectReasonType {
  OUT_OF_STOCK = "OUT_OF_STOCK",
  OTHER = "OTHER",
}

export { ResultStatus, ProductCondition, ProductDiscountType, CurrencyType, SaleStatus, ApprovalStatus, DeliveryFeeType, ShipmentMethod, RejectReasonType };
