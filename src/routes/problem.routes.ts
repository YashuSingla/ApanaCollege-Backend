// src/routes/problem.routes.ts
import { Router } from 'express';
import { createProblem, getAllProblems } from '../controllers/problem.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { problemSchema } from '../validators/problem.validator';
import { verifyToken, requireAdmin } from '../middlewares/auth.middleware';

const router = Router();

router.use(verifyToken);
router.post('/',  requireAdmin, validateBody(problemSchema), createProblem);
router.get('/', getAllProblems);

export default router;
