import { CurrencyEnum } from "./currency.enum";

export type Currency = CurrencyEnum.HUF | CurrencyEnum.USD | null;

export interface SpendingModel {
  amount: number;
  currency: Currency;
  description: string;
  spent_at: string;
}
