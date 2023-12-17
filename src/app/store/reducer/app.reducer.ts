import { createReducer, on } from "@ngrx/store";
import { addSpending, addSpendings } from "../action/app.action";
import { SpendingModel } from "../../models/spending.model";

const initialSpendingState: SpendingModel[] = [];

export const spendingsReducer = createReducer(
  initialSpendingState,
  on(addSpending, (state, { spending }) => [...state, spending]),
  on(addSpendings, (_state, { spendings }) => [...spendings])
);
