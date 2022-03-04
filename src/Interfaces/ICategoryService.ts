import { IMainRequest, IMainResponse, IPagingData } from "./IUtils";

//#region GetTopLevelCategories
interface IGetTopLevelCategoriesRequest extends IMainRequest {}

interface ICategory {
  id: number;
  name?: string;
}

interface ICategoryList {
  category: ICategory[];
}

interface IGetTopLevelCategoriesResponse extends IMainResponse {
  categoryList: ICategoryList;
}
//#endregion

//#region GetCategoryAttributes
interface IGetCategoryAttributesRequest extends IMainRequest {
  categoryId: number;
  pagingData?: IPagingData;
}

interface IAttributeValue {
  id: number;
  name: string;
}

interface IAttributeValueList {
  value: IAttributeValue[];
}

interface IAttribute {
  id: number;
  mandatory: boolean;
  multipleSelect: boolean;
  name: string;
  priority: number;
  valueList: IAttributeValueList;
}

interface IAttributeList {
  attribute: IAttribute[];
}

interface ICategoryAttribute extends ICategory {
  metadata: IPagingData;
  attributeList: IAttributeList;
}

interface IGetCategoryAttributesResponse extends IMainResponse {
  category: ICategoryAttribute;
}
//#endregion

//#region GetSubCategories
interface IGetSubCategoriesRequest extends IMainRequest {
  categoryId: number;
}

interface ISubCategoryList {
  subCategory: ICategory[];
}

interface ISubCategory extends ICategory {
  subCategoryList: ISubCategoryList;
}

interface IGetSubCategoriesResponse extends IMainResponse {
  category: ISubCategory[];
}

//#endregion

export { IGetTopLevelCategoriesRequest, IGetTopLevelCategoriesResponse, IGetCategoryAttributesRequest, IGetCategoryAttributesResponse, IGetSubCategoriesRequest, IGetSubCategoriesResponse, ICategory };
