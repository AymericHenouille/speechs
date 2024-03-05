import { PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const platform: PlatformRef = platformBrowserDynamic();
platform.bootstrapModule(AppModule)
  .catch(err => console.error(err));
