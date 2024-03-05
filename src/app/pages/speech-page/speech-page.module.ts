import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SPEECH_ROUTES } from './speech.routes';

@NgModule({
  imports: [RouterModule.forChild(SPEECH_ROUTES)],
  exports: [RouterModule]
})
export class SpeechModule { }
