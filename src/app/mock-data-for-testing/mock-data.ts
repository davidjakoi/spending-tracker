import { CurrencyEnum } from "../models/currency.enum";
import { SpendingModel } from "../models/spending.model";

export const mockSpendings: SpendingModel[] = [
  {
    amount: 100,
    currency: CurrencyEnum.HUF,
    description: "Car",
    spent_at: "2023-12-17T10:42:24.455000Z"
  },
  {
    amount: 200,
    currency: CurrencyEnum.USD,
    description: "Apple",
    spent_at: "2023-12-16T10:42:24.455000Z"
  }
];
