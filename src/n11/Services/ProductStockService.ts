import { IUpdateProductStockStockItems, IUpdateStockByStockSellerCodeRequest, IUpdateStockByStockSellerCodeResponse } from "../../Interfaces/IProductStockService";
import SoapBase from "../Base";

class ProductStockService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/ProductStockService.wsdl";
  }

  public async updateStockByStockSellerCode(stockItems: IUpdateProductStockStockItems): Promise<[IUpdateStockByStockSellerCodeResponse, string, any, string]> {
    const request: IUpdateStockByStockSellerCodeRequest = {
      auth: this.getAuth(),
      stockItems,
    };

    return await this._.UpdateStockByStockSellerCodeAsync(request);
  }
}

export default ProductStockService;
