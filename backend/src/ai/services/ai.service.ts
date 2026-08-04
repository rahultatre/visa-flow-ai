import { AIRequest } from '../../shared/interfaces/ai-request.interface';
import { AIProvider } from '../providers/ai-provider.interface';
import { FormSchema } from '../../shared/interfaces/form-schema.interface';

export class AIService {
  constructor(private readonly provider: AIProvider) {
  }

  async generateResponse(request: AIRequest): Promise<FormSchema> {
    return this.provider.generateFormSchema(request);
  }

}
