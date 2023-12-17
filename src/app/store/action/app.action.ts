import { createAction, props } from "@ngrx/store";
import { SpendingModel } from "../../models/spending.model";

export const addSpending = createAction("Spending Add", props<{ spending: SpendingModel }>());
export const addSpendings = createAction("[Spending] Add", props<{ spendings: SpendingModel[] }>());

export default {
  addSpending,
  addSpendings
};
