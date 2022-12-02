import { ResponsoModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponsoModel {
  data: T
}