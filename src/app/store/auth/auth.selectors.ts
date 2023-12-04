import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, authFeatureName } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<State>(authFeatureName);

export const selectAuthUser = createSelector(selectAuthState, (state) => state.authUser);