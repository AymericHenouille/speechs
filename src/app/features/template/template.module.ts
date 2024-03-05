import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TemplateApiService } from './services/template-api.service';
import { TemplateEffect } from './services/template.effect';
import { TemplateService } from './services/template.service';
import { templateFeature } from './state/template.feature';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(templateFeature),
    EffectsModule.forFeature([TemplateEffect]),
  ],
  providers: [
    TemplateService,
    TemplateApiService,
    TemplateEffect
  ],
})
export class TemplateModule { }
