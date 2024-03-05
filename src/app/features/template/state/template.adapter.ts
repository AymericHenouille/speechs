import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Template } from '../models/template.model';

export const templateEntityAdapter: EntityAdapter<Template> = createEntityAdapter<Template>({
  selectId: (template: Template) => template.id,
  sortComparer: false
});
