import { AIRequest } from "../../shared/interfaces/ai-request.interface";
import { FormSchema } from "../../shared/interfaces/form-schema.interface";

export interface AIProvider {
  generateFormSchema(request: AIRequest): Promise<FormSchema>;
}