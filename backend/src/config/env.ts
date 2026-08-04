import dotenv from 'dotenv';
dotenv.config();

export const env = {
    openAIApiKey: process.env.OPENAI_API_KEY!,
    useMockAI: process.env.USE_MOCK_AI === 'true'
};