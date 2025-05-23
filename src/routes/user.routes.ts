import { Router } from 'express';
import { getProfile } from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware'; // Ensure JWT middleware is applied

const router = Router();

router.get('/me', verifyToken, getProfile); // GET /api/users/me

export default router;
