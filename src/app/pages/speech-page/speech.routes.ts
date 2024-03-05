import { Routes } from '@angular/router';
import { SpeechPageComponent } from './speech-page.component';

export const SPEECH_ROUTES: Routes = [
  {
    path: '',
    component: SpeechPageComponent,
    children: [
      { path: 'templates', loadChildren: () => import('./pages/templates-page/templates-page.module').then(m => m.TemplatesPageModule) },
      { path: '', redirectTo: 'templates', pathMatch: 'full' },
    ],
  },
];
