import { Currency } from "./spending.model";
import { OrderEnum } from "./order.enum";

export type Order = OrderEnum.AmountAscending | OrderEnum.AmountDescending | OrderEnum.SpentAtAscending | OrderEnum.SpentAtDescending | null;

export interface SpendingParamsModel {
  currency?: Currency;
  order?: Order;
}
