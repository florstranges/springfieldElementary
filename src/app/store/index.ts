import { ActionReducerMap } from "@ngrx/store";
import { State as AuthState, authFeatureName, reducer as authReducer } from "./auth/auth.reducer";

export interface AppState{
    [authFeatureName]: AuthState
}

export const appReducer: ActionReducerMap<AppState> = {
    [authFeatureName]: authReducer
}