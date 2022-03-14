import { ApprovalStatus, CurrencyType, ProductCondition, ProductDiscountType, SaleStatus } from "../n11/Helpers/Utils";
import { ICategory } from "./ICategoryService";
import { IMainRequest, IMainResponse, IPagingData } from "./IUtils";

//#region SaveProduct
interface IProductImage {
  url: string;
  order: number;
}
interface IProductImages {
  image: IProductImage[];
}

interface IProductAttribute {
  name: string;
  value: string;
}

interface IProductAttributes {
  attribute: IProductAttribute[];
}

interface IProductStockItem {
  quantity: number;
  sellerStockCode?: string;
  optionPrice?: number;
  bundle?: any;
  mpn?: string | number;
  gtin?: string | number;
  oem?: string | number;
  n11CatalogId?: string | number;

  attributes?: IProductAttributes;

  //------------------
  id?: number;
  version?: string | number;
  currencyAmount?: number;
  displayPrice?: number;
  oldOptionPrice?: number;
}

interface IProductStockItems {
  stockItem: IProductStockItem[];
}

interface ISpecialProductInf {
  key: string;
  value: string;
}

interface ISpecialProductInfoList {
  specialProductInf: ISpecialProductInf[];
}

interface IProductDiscount {
  discountType: ProductDiscountType;
  discountValue: number;
  discountStartDate?: string;
  discountEndDate?: string;
}

interface IProduct {
  productSellerCode: string;
  title: string;
  subtitle: string;
  description: string;

  category: ICategory;
  price: number;
  currencyType: CurrencyType;
  images: IProductImages;

  saleStartDate?: string;
  saleEndDate?: string;
  productionDate?: string;
  expirationDate?: string;

  productCondition: ProductCondition;
  preparingDay: number;

  domestic?: boolean;

  shipmentTemplate: string;

  groupAttribute?: string;
  groupItemCode?: string;
  itemName?: string;
  maxPurchaseQuantity?: number;

  attributes?: IProductAttributes;
  specialProductInfoList?: ISpecialProductInfoList;

  stockItems: IProductStockItems;
  discount?: IProductDiscount;

  //-----------------------------------------------------------------------
  currencyAmount?: number;
  displayPrice?: number;
  id?: number;
  oldPrice?: number;
  saleStatus?: SaleStatus;
  approvalStatus?: ApprovalStatus;
  readonly isDomestic?: boolean;
}
interface ISaveProductRequest extends IMainRequest {
  product: IProduct;
}
interface ISaveProductResponse extends IMainResponse {
  product: IProduct;
}
//#endregion

//#region GetProductList
interface IGetProductListRequest extends IMainRequest {
  pagingData?: IPagingData;
}

interface IProducts {
  product: IProduct[];
}

interface IGetProductListResponse extends IMainResponse {
  products: IProducts;
}
//#endregion

//#region GetProductList

interface IUpdateProductPriceStockItem {
  sellerStockCode: string;
  optionPrice: number;
}

interface IUpdateProductPriceStockItems {
  stockItem: IUpdateProductPriceStockItem[];
}

interface IUpdateProductPrice {
  stockItems: IUpdateProductPriceStockItems;
}

interface IUpdateProductPriceBySellerCodeRequest extends IMainRequest {
  productSellerCode: string;
  price: number;
  currencyType?: CurrencyType;
  product?: IUpdateProductPrice;
}

interface IUpdateProductPriceBySellerCodeResponse extends IMainResponse {
  products: IProducts;
}
//#endregion

export {
  ISaveProductRequest,
  ISaveProductResponse,
  IProduct,
  IGetProductListRequest,
  IGetProductListResponse,
  IUpdateProductPriceBySellerCodeRequest,
  IUpdateProductPriceBySellerCodeResponse,
  IUpdateProductPrice,
  IProducts,
};
