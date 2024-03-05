import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: 'auth', loadChildren: () => import('./auth-page/auth-page.module').then(m => m.AuthPageModule) },
  { path: 'speech', loadChildren: () => import('./speech-page/speech-page.module').then(m => m.SpeechModule) },
  { path: '', redirectTo: 'speech', pathMatch: 'full' },
];
