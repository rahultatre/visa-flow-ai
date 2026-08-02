import { Router } from 'express';
import { generate } from '../controllers/ai.controller';

const router = Router();

router.post('/generate', generate);

export default router;
