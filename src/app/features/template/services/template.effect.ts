import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LIMIT_TOKEN } from '../../../modules/tokens/core.token';
import { templateActions } from '../state/template.action';
import { selectTotal } from '../state/template.selector';
import { TemplateApiService } from './template-api.service';

@Injectable()
export class TemplateEffect {
  public createTemplateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.createTemplate),
    exhaustMap(({ template }) => this.templateApiService.createTemplate(template).pipe(
      map((createdTemplate) => templateActions.createTemplateSuccess({ template: createdTemplate })),
    )),
    catchError((error) => of(templateActions.createTemplateFailure({ error }))),
  ));

  public readTemplateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.readTemplates),
    exhaustMap(() => this.store.select(selectTotal)),
    exhaustMap((total) => this.templateApiService.readTemplates(total, this.limit).pipe(
      map((templates) => templateActions.readTemplatesSuccess({ templates })),
    )),
    catchError((error) => of(templateActions.readTemplatesFailure({ error }))),
  ));

  public updateTemplateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.updateTemplate),
    exhaustMap(({ templates }) => this.templateApiService.updateTemplate(templates).pipe(
      map((updatedTemplates) => templateActions.updateTemplateSuccess({ templates: updatedTemplates })),
    )),
    catchError((error) => of(templateActions.updateTemplateFailure({ error }))),
  ));

  public deleteTemplateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.deleteTemplate),
    exhaustMap(({ ids }) => this.templateApiService.deleteTemplate(ids).pipe(
      map(() => templateActions.deleteTemplateSuccess({ ids })),
    )),
    catchError((error) => of(templateActions.deleteTemplateFailure({ error }))),
  ));

  public refreshTemplateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(templateActions.refreshTemplates),
    exhaustMap(({ templates }) => this.templateApiService.updateTemplate(templates).pipe(
      map((updatedTemplates) => templateActions.updateTemplateSuccess({ templates: updatedTemplates })),
    )),
    catchError((error) => of(templateActions.updateTemplateFailure({ error }))),
  ));

  public constructor(
    @Inject(LIMIT_TOKEN)
    private readonly limit: number,
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly templateApiService: TemplateApiService,
  ) { }
}
