import { NgModule, Type } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { RootStoreModule } from './store/root-store.module';
import { LIMIT_TOKEN } from './tokens/core.token';

const MODULES: Type<unknown>[] = [
  AuthModule,
  LayoutModule,
  RootStoreModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
  providers: [
    { provide: LIMIT_TOKEN, useValue: 10 }
  ]
})
export class CoreModule { }
