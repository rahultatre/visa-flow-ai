import { request, Request, Response } from 'express';
import { AIService } from './services/ai.service';
import { AIRequest } from '../shared/interfaces/ai-request.interface';
import { AIResponse } from '../shared/interfaces/ai-response.interface';
import { AIProviderType } from '../shared/enum/ai-provider-type.enum';
import { AIProvider } from './providers/ai-provider.interface';
import { ProviderFactory } from './providers/provider.factory';

const provider: AIProvider = ProviderFactory.create(AIProviderType.OPENAI); // You can change this to the desired provider type
const aiService = new AIService(provider);

export const generate = async (req: Request, res: Response) => {
    const { prompt } = req.body;
    const request: AIRequest = { prompt };
    const result: AIResponse = await aiService.generateResponse(request);
    try {
        res.status(200).json({
            success: true,
            message: 'AI response generated successfully',
            data: result
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error generating AI response',
            error: error.message
        });
    }
}