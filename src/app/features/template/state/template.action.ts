import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateTemplate, Template } from '../models/template.model';

export const templateActions = createActionGroup({
  source: 'Template',
  events: {
    'Select Default Template': props<{ template: Template }>(),
    'Select Default Template Success': props<{ template: Template }>(),
    'Select Default Template Failure': props<{ error: string }>(),

    'Create Template': props<{ template: CreateTemplate }>(),
    'Create Template Success': props<{ template: Template }>(),
    'Create Template Failure': props<{ error: string }>(),

    'Read Templates': emptyProps(),
    'Read Templates Success': props<{ templates: Template[] }>(),
    'Read Templates Failure': props<{ error: string }>(),

    'Update Template': props<{ templates: Template[] }>(),
    'Update Template Success': props<{ templates: Template[] }>(),
    'Update Template Failure': props<{ error: string }>(),

    'Delete Template': props<{ ids: number[] }>(),
    'Delete Template Success': props<{ ids: number[] }>(),
    'Delete Template Failure': props<{ error: string }>(),

    'Refresh Templates': props<{ templates: Template[] }>(),
  }
});
