import { IMainRequest, IMainResponse, IPagingData } from "./IUtils";
import { IProducts } from "./IProductService";
//#region StopSellingProductBySellerCode

interface IStopSellingProductBySellerCodeRequest extends IMainRequest {
  productSellerCode: string;
}

interface IStopSellingProductBySellerCodeResponse extends IMainResponse {
  products: IProducts;
}

//#endregion

//#region StartSellingProductBySellerCode

interface IStartSellingProductBySellerCodeRequest extends IMainRequest {
  productSellerCode: string;
}

interface IStartSellingProductBySellerCodeResponse extends IMainResponse {
  products: IProducts;
}

//#endregion

export { IStopSellingProductBySellerCodeRequest, IStopSellingProductBySellerCodeResponse, IStartSellingProductBySellerCodeRequest, IStartSellingProductBySellerCodeResponse };
