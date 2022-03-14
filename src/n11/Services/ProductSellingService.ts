import {
  IStartSellingProductBySellerCodeRequest,
  IStartSellingProductBySellerCodeResponse,
  IStopSellingProductBySellerCodeRequest,
  IStopSellingProductBySellerCodeResponse,
} from "../../Interfaces/IProductSellingService";
import SoapBase from "../Base";

class ProductSellingService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/ProductSellingService.wsdl";
  }

  public stopSellingProductBySellerCode(productSellerCode: string): Promise<[IStopSellingProductBySellerCodeResponse, string, any, string]> {
    const request: IStopSellingProductBySellerCodeRequest = {
      auth: this.getAuth(),
      productSellerCode,
    };

    return this._.StopSellingProductBySellerCodeAsync(request);
  }

  public startSellingProductBySellerCode(productSellerCode: string): Promise<[IStartSellingProductBySellerCodeResponse, string, any, string]> {
    const request: IStartSellingProductBySellerCodeRequest = {
      auth: this.getAuth(),
      productSellerCode,
    };

    return this._.StopSellingProductBySellerCodeAsync(request);
  }
}

export default ProductSellingService;
