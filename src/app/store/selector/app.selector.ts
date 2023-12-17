import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SpendingModel } from "../../models/spending.model";

export const selectAppState = createFeatureSelector<AppState>("spending");
export const appState = (state: { spendings: SpendingModel[] }) => state;

export const spendingsState = createSelector(appState, (state: AppState) => state.spendings);
