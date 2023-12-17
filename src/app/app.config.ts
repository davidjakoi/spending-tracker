import { ApplicationConfig, importProvidersFrom, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { spendingsReducer } from "./store/reducer/app.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimations(),
    provideStore({ spendings: spendingsReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }) /* ,
    importProvidersFrom([BrowserAnimationsModule]) */
  ]
};
