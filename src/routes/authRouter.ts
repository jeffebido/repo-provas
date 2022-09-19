import { Router } from 'express';
import { LogIn, SignUp } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();


router.post("/signup", authMiddleware, SignUp);
router.post('/login', authMiddleware, LogIn)

export default router;