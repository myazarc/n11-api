import { ResultStatus } from "../n11/Helpers/Utils";
import { IAuth } from "./IAuth";

interface IResult {
  status: ResultStatus;
}
interface IMainResponse {
  result: IResult;
}

interface IMainRequest {
  auth: IAuth;
}

interface IPagingData {
  currentPage: number;
  pageSize: number;
  totalCount?: number;
  pageCount?: number;
}

export { IMainResponse, IMainRequest, IResult, IPagingData };
