import SoapBase from "../Base";

import { IGetProductListRequest, IGetProductListResponse, IProduct, ISaveProductRequest, ISaveProductResponse } from "../../Interfaces/IProductService";
import { IPagingData } from "../../Interfaces/IUtils";

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
}

export default ProductService;
