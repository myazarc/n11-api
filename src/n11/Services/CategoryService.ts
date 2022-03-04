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

  public async getTopLevelCategories(): Promise<[IGetTopLevelCategoriesResponse, string, any, string]> {
    const request: IGetTopLevelCategoriesRequest = {
      auth: this.getAuth(),
    };
    return await this._.GetTopLevelCategoriesAsync(request);
  }

  public async getCategoryAttributes(categoryId: number, pagingData: IPagingData = null): Promise<[IGetCategoryAttributesResponse, string, any, string]> {
    const request: IGetCategoryAttributesRequest = {
      categoryId,
      auth: this.getAuth(),
    };
    if (pagingData !== null) {
      request.pagingData = pagingData;
    }
    return await this._.GetCategoryAttributesAsync(request);
  }

  public async getSubCategories(categoryId: number): Promise<[IGetSubCategoriesResponse, string, any, string]> {
    const request: IGetSubCategoriesRequest = {
      auth: this.getAuth(),
      categoryId,
    };
    return await this._.GetSubCategoriesAsync(request);
  }
}

export default CategoryService;
