import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { Template } from '../models/template.model';
import { templateActions } from '../state/template.action';
import { selectAllTemplates } from '../state/template.selector';

@Injectable()
export class TemplateService {
  public constructor(
    private readonly store: Store
  ) { }

  public createTemplate(template: Template): void {
    this.store.dispatch(templateActions.createTemplate({ template }));
  }

  public readTemplates(): void {
    this.store.dispatch(templateActions.readTemplates());
  }

  public updateTemplate(templates: Template[]): void {
    this.store.dispatch(templateActions.updateTemplate({ templates }));
  }

  public deleteTemplate(ids: number[]): void {
    this.store.dispatch(templateActions.deleteTemplate({ ids }));
  }

  public selectDefaultTemplate(template: Template): void {
    this.store.dispatch(templateActions.selectDefaultTemplate({ template }));
  }

  public async refreshAllTemplates(): Promise<void> {
    const templates: Template[] = await firstValueFrom(this.store.select(selectAllTemplates));
    this.store.dispatch(templateActions.refreshTemplates({ templates }));
  }

  public refreshTemplates(templates: Template[]): void {
    this.store.dispatch(templateActions.refreshTemplates({ templates }));
  }
}
