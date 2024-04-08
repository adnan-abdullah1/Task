import express, { Router } from 'express';
import auth from '../middlewares/auth';
import apis from '../controllers/user.controller';
const router: Router = express.Router({ mergeParams: true });

router.get('/dashboard', apis.dashboard);
router.get('/profile/:userId', apis.profile);

export default router;
