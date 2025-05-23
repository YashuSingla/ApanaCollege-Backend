// src/routes/progress.routes.ts
import { Router } from 'express';
import { markProgress, getUserProgress } from '../controllers/progress.controller';
import { verifyToken } from '../middlewares/auth.middleware';
import { validateBody } from '../middlewares/validate.middleware';
import { progressSchema } from '../validators/progress.validator';

const router = Router();

router.use(verifyToken);
router.post('/', validateBody(progressSchema), markProgress);
router.get('/', getUserProgress);

export default router;
