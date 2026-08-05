import { AIRequest } from "../../shared/interfaces/ai-request.interface";
import { AIProvider } from "./ai-provider.interface"; 
import Logger from "../../shared/common/logger";
import { env } from "../../config/env";
import OpenAI from "openai";
import { buildFormGenerationPrompt } from "../prompts/form-generator.prompt";
import { FormSchema } from "../../shared/interfaces/form-schema.interface";
import { AI_MODELS } from "../../shared/constants/ai.constants";
import { MockSchemaResolver } from "../resolver/mock-schema.resolver";

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
              return MockSchemaResolver.resolve(request.prompt);
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