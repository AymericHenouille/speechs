import { EntityState } from '@ngrx/entity';
import { Template } from './template.model';

export interface TemplateState extends EntityState<Template> {
  defaultTemplateId: number | null;
  error: any;
}
