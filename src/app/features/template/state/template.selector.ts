import { EntitySelectors, EntityState } from '@ngrx/entity/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Template } from '../models/template.model';
import { TemplateState } from '../models/template.state';
import { templateEntityAdapter } from './template.adapter';
import { templateFeature } from './template.feature';

export const templateSelector = createFeatureSelector<TemplateState>(templateFeature.name);

const selectors: EntitySelectors<Template, EntityState<Template>> = templateEntityAdapter.getSelectors();

export const selectDefaultTemplateId = createSelector(
  templateSelector,
  (state) => state.defaultTemplateId
);

export const selectError = createSelector(
  templateSelector,
  (state) => state.error
);

export const selectAllTemplates = createSelector(
  templateSelector,
  selectors.selectAll
);

export const selectTotal = createSelector(
  templateSelector,
  selectors.selectTotal
);

export function selectTemplateById(id: number) {
  return createSelector(
    selectAllTemplates,
    (templates) => templates.find((template) => template.id === id)
  );
}

