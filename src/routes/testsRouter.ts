import { Router } from 'express';
import { Insert } from '../controllers/testsController';
import { testsMiddleware } from '../middlewares/testsMiddleware';

const router = Router();


router.post("/newTest", testsMiddleware, Insert);


export default router;