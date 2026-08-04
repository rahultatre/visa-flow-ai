import { AIRequest } from "../../shared/interfaces/ai-request.interface";
import { AIResponse } from "../../shared/interfaces/ai-response.interface";
import { AIProvider } from "./ai-provider.interface"; 
import Logger from "../../shared/common/logger";
import { env } from "../../config/env";
import OpenAI from "openai";
import { buildFormGenerationPrompt } from "../prompts/form-generator.prompt";
import { FormSchema } from "../../shared/interfaces/form-schema.interface";
import { AI_MODELS } from "../../shared/constants/ai.constants";
import { BENEFICIARY_FORM_MOCK } from '../mocks/beneficiary-form.mock';

export class OpenAIProvider implements AIProvider {
  private readonly client = new OpenAI({
        apiKey: env.openAIApiKey
    });
    private readonly model = AI_MODELS.GPT_5_5;



    async generateFormSchema(
        request: AIRequest
    ): Promise<FormSchema> {
        try {
            if (env.useMockAI) {
              Logger.info('Returning mock schema');
              return BENEFICIARY_FORM_MOCK;
            }

            Logger.info("Generating form schema");
            const prompt =
                buildFormGenerationPrompt(request.prompt);

            const response = await this.client.responses.create({
                model: this.model,
                input: prompt,
            });

            return JSON.parse(response.output_text) as FormSchema;
        }
        catch(error){
            Logger.error(error, 'Failed to generate form schema');
            throw error;
        }

    }
}