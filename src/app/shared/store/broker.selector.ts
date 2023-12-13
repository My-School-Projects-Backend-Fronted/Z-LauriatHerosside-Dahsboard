import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BrokersState } from "./broker.reducer";

export const brokerFeatureToken = 'brokers';

export const selectFeature = createFeatureSelector<BrokersState>(brokerFeatureToken);

export const selectFeatureBrokers = createSelector(
  selectFeature,
  (state: BrokersState) => state.brokers
);
