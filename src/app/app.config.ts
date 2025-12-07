import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { headersInterceptor } from './core/interceptors/headers-interceptor';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';
const loaderConfig: NgxUiLoaderConfig = {
  fgsType: 'three-strings',
  fgsSize: 60,
  fgsColor: '#ff0000',
  overlayColor: 'rgba(0,0,0,0.65)',
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([errorInterceptor, headersInterceptor, loadingInterceptor])
    ),
    importProvidersFrom(NgxUiLoaderModule.forRoot(loaderConfig)),
  ],
};
