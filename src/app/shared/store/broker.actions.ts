import { createAction, props } from '@ngrx/store';
import { Brokers } from '../../core/models/brokers';

export const loadBrokers = createAction('[Broker] Load Brokers');

export const loadBrokersSuccess = createAction(
  '[Broker] Load Brokers Success',
  props<{ brokers: Brokers[] }>()
);

export const loadBrokersFailure = createAction(
  '[Broker] Load Brokers Failure',
  props<{ error: any }>()
);
