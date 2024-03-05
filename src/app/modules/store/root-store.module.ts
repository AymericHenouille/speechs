import { NgModule } from '@angular/core';
import { Action, ActionReducerMap, StoreModule } from '@ngrx/store';

const REDUCER: ActionReducerMap<unknown, Action> = {

};

@NgModule({
  imports: [StoreModule.forRoot(REDUCER)],
  exports: [StoreModule],
})
export class RootStoreModule { }
