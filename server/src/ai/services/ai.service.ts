import { AIRequest } from '../../shared/models/ai-request.model';
import { AIResponse } from '../../shared/models/ai-response.model';
import { AIProviderType } from '../../shared/enum/ai-provider-type.enum';
import { AIProvider } from '../providers/ai-provider.interface';

export class AIService {
  constructor(private readonly provider: AIProvider) {
  }

  async generateResponse(request: AIRequest): Promise<AIResponse> {
    return this.provider.generateResponse(request);
  }

}
