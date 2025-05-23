// src/routes/chapter.routes.ts
import { Router } from 'express';
import { createChapter, getAllChapters } from '../controllers/chapter.controller';
import { verifyToken, requireAdmin } from '../middlewares/auth.middleware';
import { validateBody } from '../middlewares/validate.middleware';
import { chapterSchema } from '../validators/chapter.validator';

const router = Router();

router.post('/', verifyToken, requireAdmin,validateBody(chapterSchema), createChapter); // Only admin
router.get('/', verifyToken, getAllChapters);                // Any logged-in user

export default router;
