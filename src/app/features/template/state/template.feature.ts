import { createFeature, createReducer, on } from '@ngrx/store';
import { TemplateState } from '../models/template.state';
import { templateActions } from './template.action';
import { templateEntityAdapter } from './template.adapter';

const initialState: TemplateState = templateEntityAdapter.getInitialState({
  defaultTemplateId: null,
  error: null,
  total: undefined,
});

export const templateFeature = createFeature({
  name: 'template',
  reducer: createReducer(
    initialState,
    on(templateActions.createTemplateSuccess, (state, { template }) => templateEntityAdapter.addOne(template, state)),
    on(templateActions.readTemplatesSuccess, (state, { templates: { payload, total } }) => templateEntityAdapter.setMany(payload, { ...state, total })),
    on(templateActions.deleteTemplateSuccess, (state, { ids }) => templateEntityAdapter.removeMany(ids, state)),
    on(templateActions.selectDefaultTemplateSuccess, (state, { template }) => ({ ...state, defaultTemplateId: template.id })),
    on(templateActions.updateTemplateSuccess, (state, { templates }) => templateEntityAdapter.updateMany(
      templates.map((template) => ({ id: template.id, changes: template })),
      state
    )),
    on(
      templateActions.createTemplateFailure,
      templateActions.readTemplatesFailure,
      templateActions.updateTemplateFailure,
      templateActions.deleteTemplateFailure,
      templateActions.selectDefaultTemplateFailure,
      (state, { error }) => ({ ...state, error })
    ),
  ),
});
