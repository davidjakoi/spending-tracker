import { createAction, props } from "@ngrx/store";
import { SpendingModel } from "../../models/spending.model";

export const addSpending = createAction("Add spending", props<{ spending: SpendingModel }>());
export const addSpendings = createAction("Add spendings", props<{ spendings: SpendingModel[] }>());

export default {
  addSpending,
  addSpendings
};
