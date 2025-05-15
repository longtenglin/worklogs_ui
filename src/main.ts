import {platformBrowser} from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// bootstrapApplication(AppModule, appConfig)
//   .catch((err) => console.error(err));
//
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(error => console.error(error));


platformBrowserDynamic().bootstrapModule(AppModule).catch(e => console.error(e));
