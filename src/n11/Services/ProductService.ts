import SoapBase from "../Base";

import {
  IGetProductListRequest,
  IGetProductListResponse,
  IProduct,
  ISaveProductRequest,
  ISaveProductResponse,
  IUpdateProductPrice,
  IUpdateProductPriceBySellerCodeRequest,
  IUpdateProductPriceBySellerCodeResponse,
} from "../../Interfaces/IProductService";
import { IPagingData } from "../../Interfaces/IUtils";
import { CurrencyType } from "../Helpers/Utils";

class ProductService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/ProductService.wsdl";
  }

  public async saveProduct(product: IProduct): Promise<[ISaveProductResponse, string, any, string]> {
    const request: ISaveProductRequest = {
      auth: this.getAuth(),
      product,
    };
    return await this._.SaveProductAsync(request);
  }

  public async getProductList(pagingData: IPagingData = null): Promise<[IGetProductListResponse, string, any, string]> {
    const request: IGetProductListRequest = {
      auth: this.getAuth(),
    };
    if (pagingData !== null) {
      request.pagingData = pagingData;
    }
    return await this._.GetProductListAsync(request);
  }

  public async updateProductPriceBySellerCode(
    productSellerCode: string,
    price: number,
    currencyType?: CurrencyType,
    product?: IUpdateProductPrice
  ): Promise<[IUpdateProductPriceBySellerCodeResponse, string, any, string]> {
    const request: IUpdateProductPriceBySellerCodeRequest = {
      auth: this.getAuth(),
      productSellerCode,
      price,
    };

    if (currencyType) {
      request.currencyType = currencyType;
    }

    if (product) {
      request.product = product;
    }
    return await this._.UpdateProductPriceBySellerCodeAsync(request);
  }
}

export default ProductService;
