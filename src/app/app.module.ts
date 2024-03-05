import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core.module';
import { PagesModule } from './pages/pages.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    PagesModule,
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
