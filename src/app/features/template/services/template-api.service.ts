import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTemplate, Template } from '../models/template.model';

@Injectable()
export class TemplateApiService {
  public constructor(
    private readonly http: HttpClient
  ) { }

  public createTemplate(template: CreateTemplate): Observable<Template> {
    throw new Error('Not implemented');
  }

  public readTemplates(offset: number, limit: number): Observable<Template[]> {
    return this.http.get<Template[]>(`/api/templates?offset=${offset}&limit=${limit}`);
  }

  public updateTemplate(templates: Template[]): Observable<Template[]> {
    throw new Error('Not implemented');
  }

  public deleteTemplate(ids: number[]): Observable<number[]> {
    throw new Error('Not implemented');
  }
}
