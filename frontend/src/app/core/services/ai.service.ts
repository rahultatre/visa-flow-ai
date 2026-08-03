import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormSchema } from '../models/form-schema.model';
import { ApiResponse } from '../models/api-response.model';
import { PromptRequest } from '../models/prompt-request.model';

@Service()
export class AiService {
    private readonly http = inject(HttpClient);

    generateSchema(request: PromptRequest): Observable<ApiResponse<FormSchema>> {
        return this.http.post<ApiResponse<FormSchema>>('/ai/generate', request);
    }
}
