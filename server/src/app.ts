import express from 'express';
import cors from 'cors';

import healthRoutes from './health/health.routes';
import aiRoutes from './ai/routes/ai.routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', healthRoutes);

app.use('/api/ai', aiRoutes);

export default app;