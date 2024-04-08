import express, { Express, Router } from 'express';
import apis from '../controllers/auth.controller';
import authValidation from '../validations/auth.validation';
import validation from '../validations/validation';
const router: Router = express.Router({ mergeParams: true });

router.post('/login', validation.validate(authValidation.loginValidation), apis.login);
router.post('/register', validation.validate(authValidation.registerValidation), apis.register);

export default router;
