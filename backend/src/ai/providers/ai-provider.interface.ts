import { AIRequest } from "../../shared/models/ai-request.model";
import { AIResponse } from "../../shared/models/ai-response.model";

export interface AIProvider {
  generateResponse(request: AIRequest): Promise<AIResponse>;
}