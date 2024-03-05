import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadResponse } from '../models/read.model';
import { CreateTemplate, Template } from '../models/template.model';

@Injectable()
export class TemplateApiService {
  public constructor(
    private readonly http: HttpClient
  ) { }

  public createTemplate(template: CreateTemplate): Observable<Template> {
    return this.http.post<Template>('/api/templates', template);
  }

  public readTemplates(offset: number, limit: number): Observable<ReadResponse<Template[]>> {
    return this.http.get<ReadResponse<Template[]>>(`/api/templates?offset=${offset}&limit=${limit}`);
  }

  public updateTemplate(templates: Template[]): Observable<Template[]> {
    return this.http.put<Template[]>('/api/templates', templates);
  }

  public deleteTemplate(ids: number[]): Observable<number[]> {
    return this.http.delete<number[]>(`/api/templates?ids=${ids.join(',')}`);
  }

  public refreshTemplates(lastUpdate: string, ids: number[]): Observable<Template> {
    throw new Error('Not implemented');
  }
}
