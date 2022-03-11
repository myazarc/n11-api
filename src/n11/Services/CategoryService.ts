import SoapBase from "../Base";

import {
  IGetCategoryAttributesRequest,
  IGetCategoryAttributesResponse,
  IGetSubCategoriesRequest,
  IGetSubCategoriesResponse,
  IGetTopLevelCategoriesRequest,
  IGetTopLevelCategoriesResponse,
} from "../../Interfaces/ICategoryService";
import { IPagingData } from "../../Interfaces/IUtils";

class CategoryService extends SoapBase {
  constructor(appKey: string, appSecret: string) {
    super(appKey, appSecret);
    this.SERVICE_URL = "https://api.n11.com/ws/CategoryService.wsdl";
  }

  public getTopLevelCategories(): Promise<[IGetTopLevelCategoriesResponse, string, any, string]> {
    const request: IGetTopLevelCategoriesRequest = {
      auth: this.getAuth(),
    };
    return this._.GetTopLevelCategoriesAsync(request);
  }

  public getCategoryAttributes(categoryId: number, pagingData: IPagingData = null): Promise<[IGetCategoryAttributesResponse, string, any, string]> {
    const request: IGetCategoryAttributesRequest = {
      categoryId,
      auth: this.getAuth(),
    };
    if (pagingData !== null) {
      request.pagingData = pagingData;
    }
    return this._.GetCategoryAttributesAsync(request);
  }

  public getSubCategories(categoryId: number): Promise<[IGetSubCategoriesResponse, string, any, string]> {
    const request: IGetSubCategoriesRequest = {
      auth: this.getAuth(),
      categoryId,
    };
    return this._.GetSubCategoriesAsync(request);
  }
}

export default CategoryService;
