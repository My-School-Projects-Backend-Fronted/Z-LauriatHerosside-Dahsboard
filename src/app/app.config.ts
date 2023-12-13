import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore ,provideState,} from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { BrokersReducer } from './shared/store/broker.reducer';
import { BrokerEffects } from './shared/store/broker.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideAnimations(),
    provideStore(),
    provideHttpClient(),
    provideEffects([BrokerEffects]),
    provideState({ name: 'brokers', reducer: BrokersReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
]
};
