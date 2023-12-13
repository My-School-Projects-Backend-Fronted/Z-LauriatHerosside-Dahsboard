import { createReducer, on } from "@ngrx/store";
import { Brokers } from "../../core/models/brokers";
import { loadBrokers, loadBrokersFailure, loadBrokersSuccess } from "./broker.actions";

export interface BrokersState {
  brokers: Brokers[];
  loading: boolean;
  loaded: boolean;
  error: string;
}


export const initialState: BrokersState = {
  brokers: [],
  loading: false,
  loaded: true,
  error: '',
};
export const BrokersReducer = createReducer(
  initialState,
  on(loadBrokers, (state) => ({ ...state, loading: true })),
  on(loadBrokersSuccess, (state: BrokersState, { brokers }) => ({
    ...state,
    loading: false,
    loaded: true,
    brokers
  })),
  on(loadBrokersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  })),
);
