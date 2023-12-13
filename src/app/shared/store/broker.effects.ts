import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BrokersService } from '../../core/services/brokers.service';
import * as BrokersActions from './broker.actions'
@Injectable()
export class BrokerEffects {
  // loadBrokers$ = createEffect(() =>
  //   this.actions$.pipe(

  //     ofType(BrokersActions.loadBrokers),
  //     mergeMap(() =>
  //       this.brokersService.getDbData().pipe(
  //         tap(brokers=> console.log("brokers",brokers)
  //         ),
  //         map(brokers => BrokersActions.loadBrokersSuccess({ brokers })),
  //         catchError(error => of(BrokersActions.loadBrokersFailure({ error })))
  //       )
  //     )
  //   )
  // );
  // constructor(
  //   private actions$: Actions,
  //   private brokersService: BrokersService
  // ) {}
  loadBrokers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BrokersActions.loadBrokers),
    mergeMap(() =>
      this.brokersService.getBrokers().pipe(
        // tap((brokers) => {
        //   console.log("brokers", brokers); // Add this line to see the data
        //   return brokers; // Explicitly return the data for further processing
        // }),
        map(brokers => BrokersActions.loadBrokersSuccess({ brokers })),
        catchError(error => of(BrokersActions.loadBrokersFailure({ error })))
      )
    )
  )
);
constructor(
    private actions$: Actions,
    private brokersService: BrokersService
  ) {}
}
