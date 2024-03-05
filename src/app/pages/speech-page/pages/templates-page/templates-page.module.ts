import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../../../../features/template/template.module';
import { TemplatesPageComponent } from './templates-page.components';
import { TEMPALTES_ROUTES } from './templates.routes';

@NgModule({
  declarations: [TemplatesPageComponent],
  imports: [
    RouterModule.forChild(TEMPALTES_ROUTES),
    TemplateModule,
  ],
  exports: [RouterModule],
})
export class TemplatesPageModule { }
