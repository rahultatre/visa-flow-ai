import { AIRequest } from "../../shared/models/ai-request.model";
import { AIResponse } from "../../shared/models/ai-response.model";
import { AIProvider } from "./ai-provider.interface"; 
import Logger from "../../shared/common/logger";
export class OpenAIProvider implements AIProvider {
  async generateResponse(request: AIRequest): Promise<AIResponse> {
    Logger.info('Calling OpenAI...');
    return {
        message: 'OpenAI integration coming soon',
        prompt: request.prompt
    };
  }
}