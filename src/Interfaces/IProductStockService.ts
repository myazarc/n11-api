import { IMainRequest, IMainResponse, IPagingData } from "./IUtils";

//#region UpdateStockByStockSellerCode

interface IUpdateProductStockStockItem {
  sellerStockCode: string;
  quantity: number;
  version?: string | number;
}

interface IUpdateProductStockStockItems {
  stockItem: IUpdateProductStockStockItem[];
}

interface IUpdateStockByStockSellerCodeRequest extends IMainRequest {
  stockItems: IUpdateProductStockStockItems;
}

interface IUpdateStockByStockSellerCodeResponse extends IMainResponse {
  stockItems: IUpdateProductStockStockItems;
}

//#endregion

export { IUpdateStockByStockSellerCodeRequest, IUpdateStockByStockSellerCodeResponse, IUpdateProductStockStockItems };
