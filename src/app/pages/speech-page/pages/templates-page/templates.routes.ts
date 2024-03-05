import { Routes } from '@angular/router';
import { TemplateEditPageComponent } from './components/template-edit-page/template-edit-page.component';
import { TemplateListPageComponent } from './components/templates-list-page/template-list-page.component';
import { TemplatesPageComponent } from './templates-page.components';

export const TEMPALTES_ROUTES: Routes = [
  {
    path: '',
    component: TemplatesPageComponent,
    children: [
      { path: '', component: TemplateListPageComponent },
      { path: 'edit/:id', component: TemplateEditPageComponent },
    ],
  },
];
