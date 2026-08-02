import { AIProvider } from "./ai-provider.interface";
import { OpenAIProvider } from "./openai.provider";
import { AIProviderType } from "../../shared/enum/ai-provider-type.enum";


export class ProviderFactory { 
    static create(provider: AIProviderType): AIProvider {
        switch (provider) {
            case AIProviderType.OPENAI:
                return new OpenAIProvider();
            default:
                throw new Error(`Provider not supported: ${provider}`);
        }
    }
}